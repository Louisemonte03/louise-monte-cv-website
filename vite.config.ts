import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/louise-monte-cv-website/' : '/'
}));
