import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(
    {
      manifest: {
        "theme_color": "#000",
        "background_color": "#000",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "short_name": "ChatBOX",
        "description": "ChatBOX",
        "name": "ChatBOX",
        "icons": [
          {
            "src": "/app_logo.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
          },
        ],
      }
    }
  )],
})
