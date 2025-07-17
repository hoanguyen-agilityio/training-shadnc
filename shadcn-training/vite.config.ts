import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // ✅ move allowedHosts here
  server: {
    allowedHosts: ['romantic-verified-haddock.ngrok-free.app'],
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
  define: {
    'process.env': {
      VITE_ACCOUNT_URL: JSON.stringify(process.env.VITE_ACCOUNT_URL),
      VITE_CLERK_PUBLISHABLE_KEY: JSON.stringify(process.env.VITE_CLERK_PUBLISHABLE_KEY),
      VITE_CLERK_SECRET_KEY: JSON.stringify(process.env.VITE_CLERK_SECRET_KEY),
      VITE_SIGNING_SECRET: JSON.stringify(process.env.VITE_SIGNING_SECRET),
      VITE_PRODUCTS_TAB: JSON.stringify(process.env.VITE_PRODUCTS_TAB),
    },
    'process.env.VITE_ACCOUNT_URL': JSON.stringify(process.env.VITE_ACCOUNT_URL),
    'process.env.VITE_CLERK_PUBLISHABLE_KEY': JSON.stringify(
      process.env.VITE_CLERK_PUBLISHABLE_KEY,
    ),
    'process.env.VITE_CLERK_SECRET_KEY': JSON.stringify(process.env.VITE_CLERK_SECRET_KEY),
    'process.env.VITE_SIGNING_SECRET': JSON.stringify(process.env.VITE_SIGNING_SECRET),
    'process.env.VITE_PRODUCTS_TAB': JSON.stringify(process.env.VITE_PRODUCTS_TAB),
  },
});
