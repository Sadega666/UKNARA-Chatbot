Frontend (Vite + React) untuk berkomunikasi dengan Rasa backend.

Cara menjalankan:

1. Masuk ke folder frontend

   cd frontend

2. Install dependencies

   npm install

3. Jalankan dev server

   npm run dev

4. Pastikan Rasa backend berjalan dengan API & CORS enabled (jalankan di repo root):

   .\rasa-env\Scripts\Activate.ps1
   rasa run --enable-api --cors "*"

5. Buka alamat dev server (biasanya http://localhost:5173)

Catatan:
- Ubah URL Rasa di `src/components/Chat.jsx` jika Rasa berjalan di host/port berbeda, atau set environment variable VITE_RASA_URL.
- Untuk production: build dengan `npm run build` dan deploy `dist/` ke hosting static.
