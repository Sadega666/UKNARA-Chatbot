import { defineConfig } from 'vite'

// Minimal config without @vitejs/plugin-react to avoid ESM/plugin compatibility issues
export default defineConfig({
  server: {
    port: 5173
  }
})
