import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
<<<<<<< HEAD
    host:'192.168.135.236',
=======
    host:'10.112.66.47',
>>>>>>> 75ceeaade2362922d075fbceeb92e8386080e516
    port:3000,
  }
})