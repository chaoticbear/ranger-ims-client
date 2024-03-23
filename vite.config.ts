import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      // Supports react-secure-storage which depends on a process.env accessible variable
      "process.env": {
        'process.env.SECURE_LOCAL_STORAGE_HASH_KEY': JSON.stringify(env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY),
      },
    },
    plugins: [
      react(),
      legacy()
    ],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BACKEND_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    }
  }
})
