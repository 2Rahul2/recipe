import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/recipe/', // <-- set to your repo name for GitHub Pages (owner/repo)
  plugins: [react(), tailwindcss()],
})
