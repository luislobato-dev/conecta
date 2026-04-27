import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

/**
 * Configuración de Vite para CONECTA
 * - Aliases para imports limpios
 * - Optimizaciones de build
 * - Configuración PWA
 */
export default defineConfig({
  plugins: [react()],
  
  // Aliases para imports (@/components/...)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
      '@store': path.resolve(__dirname, './src/store'),
      '@types': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },

  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    open: true,
    host: true,
  },

  // Optimizaciones de build
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remover console.logs en producción
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar dependencias grandes en chunks
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react', 'react-hot-toast'],
          'storage-vendor': ['dexie', 'dexie-react-hooks'],
          'state-vendor': ['zustand'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Warning a 1MB
  },

  // Optimizaciones de dependencias
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'zustand',
      'dexie',
      'dexie-react-hooks',
      'zod',
    ],
  },

  // Variables de entorno
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
