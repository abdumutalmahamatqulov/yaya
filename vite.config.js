import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite konfiguratsiyasi
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png','**/*.jpg']
//   server:{
//     hmr:{
//         overlay:false, //Xatolik oynasini o'chirish
//     },
//   },
});
