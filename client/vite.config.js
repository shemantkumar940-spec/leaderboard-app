import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/users': 'http://localhost:5000',
      '/claim': 'http://localhost:5000',
      '/history': 'http://localhost:5000',
      '/init-users': 'http://localhost:5000',
    },
  },
})
