import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        historia: resolve(__dirname, 'pages/historia.html'),
        contacto: resolve(__dirname, 'pages/contacto.html'),
        ofertaAcademica: resolve(__dirname, 'pages/oferta-academica.html'),
        actividades: resolve(__dirname, 'pages/actividades.html')
      }
    }
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: '/main.js',
          filename: 'index.html',
          template: 'index.html',
        },
        {
          entry: '/main.js',
          filename: 'pages/historia.html',
          template: 'pages/historia.html',
        },
        {
          entry: '/main.js',
          filename: 'pages/contacto.html',
          template: 'pages/contacto.html',
        },
        {
          entry: '/main.js',
          filename: 'pages/oferta-academica.html',
          template: 'pages/oferta-academica.html',
        },
        {
          entry: '/main.js',
          filename: 'pages/actividades.html',
          template: 'pages/actividades.html',
        },
      ],
    }),
  ],
  root: './',
  base: '/'
})