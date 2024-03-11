import { defineConfig } from 'vite'
import MillionCompiler from "@million/lint";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [MillionCompiler.vite(), react()],
})
