import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),             
        yosemite: resolve(__dirname, 'yosemite.html'),    
        zion: resolve(__dirname, 'zion.html'),            
        channel: resolve(__dirname, 'channel.html') 
      }
    }
  }
})
