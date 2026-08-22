# Belajar Vibe Coding: ElysiaJS + Drizzle ORM + MySQL

Project backend minimalis menggunakan **Bun**, **ElysiaJS**, **Drizzle ORM**, dan **MySQL** database.

## 🛠️ Prasyarat
Pastikan Anda sudah menginstal:
- [Bun](https://bun.sh) (v1.x atau lebih baru)
- [Docker](https://www.docker.com/) (untuk menjalankan database MySQL lokal)

---

## 🚀 Memulai Project

### 1. Jalankan Database MySQL (Docker)
Jalankan perintah berikut untuk menjalankan container database MySQL:
```bash
docker run -d --name vcoding-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=belajar_vibe_coding mysql:8.0
```

### 2. Konfigurasi Environment
Salin file konfigurasi environment:
```bash
cp .env.example .env
```
Sesuaikan kredensial di dalam file `.env` jika diperlukan.

### 3. Install Dependencies
```bash
bun install
```

### 4. Push Schema ke Database (Drizzle Push)
Sinkronisasikan skema TypeScript Drizzle ke tabel MySQL secara langsung:
```bash
bun run db:push
```

### 5. Jalankan Server Lokal (Development)
Jalankan server ElysiaJS dengan hot-reload:
```bash
bun run dev
```
Server akan berjalan di [http://localhost:3000](http://localhost:3000).

---

## 🔌 API Endpoints
- `GET /` - Pesan selamat datang & status aplikasi.
- `GET /users` - Mengambil seluruh data user dari database.
- `POST /users` - Menambahkan user baru ke database.
  - **Body (JSON)**:
    ```json
    {
      "name": "Budi",
      "email": "budi@example.com"
    }
    ```

---

## 🛠️ Script yang Tersedia
- `bun run dev` - Menjalankan server development dengan reload otomatis.
- `bun run db:push` - Menyinkronkan perubahan skema di `src/db/schema.ts` langsung ke database MySQL.
- `bun run db:studio` - Membuka GUI interaktif Drizzle Studio untuk memantau data di browser.
