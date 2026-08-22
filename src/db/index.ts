import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL || "mysql://root:root@127.0.0.1:3306/belajar_vibe_coding";

const connection = mysql.createPool(connectionString);

export const db = drizzle(connection, { mode: "default", schema });
export type DB = typeof db;
