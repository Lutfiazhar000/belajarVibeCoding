import { Elysia, t } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const port = process.env.PORT || 3000;

const app = new Elysia()
  .get("/", () => ({
    message: "Welcome to Elysia + Drizzle + MySQL Backend API!",
    status: "OK",
  }))
  .get("/users", async () => {
    try {
      const allUsers = await db.select().from(users);
      return allUsers;
    } catch (error) {
      console.error(error);
      return { success: false, error: "Database query failed" };
    }
  })
  .post(
    "/users",
    async ({ body, set }) => {
      try {
        await db.insert(users).values({
          name: body.name,
          email: body.email,
        });
        set.status = 211; // Created
        return { success: true, message: "User created successfully" };
      } catch (error: any) {
        console.error(error);
        if (error.code === "ER_DUP_ENTRY") {
          set.status = 400;
          return { success: false, error: "Email already exists" };
        }
        set.status = 500;
        return { success: false, error: "Failed to create user" };
      }
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String(),
      }),
    }
  )
  .listen(port);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
