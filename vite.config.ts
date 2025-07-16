import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  plugins: [react(), glsl()],
  server: {
    allowedHosts: [
      'luiza.henriquesoares.dev.br',
      'lloures.com.br'
    ]
  }
});
