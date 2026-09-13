import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rolldownOptions: {
      input: {
        home: 'index.html',
        curriculumVitae: 'curriculum-vitae/index.html',
      },
    },
  },
});
