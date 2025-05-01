import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mychatApp/',  // 👈 EXACTLY this (your repo name)
})
