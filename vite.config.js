import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ✅ This is correct for your GitHub Pages URL
  plugins: [react()],
})
