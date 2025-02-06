import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: 'main.js',
          filename: 'index.html',
          template: 'index.html',
        },
        {
          entry: 'main.js',
          filename: 'pages/historia.html',
          template: 'pages/historia.html',
        },
        {
          entry: 'main.js',
          filename: 'pages/contacto.html',
          template: 'pages/contacto.html',
        },
        {
          entry: 'main.js',
          filename: 'pages/oferta-academica.html',
          template: 'pages/oferta-academica.html',
        },
        {
          entry: 'main.js',
          filename: 'pages/actividades.html',
          template: 'pages/actividades.html',
        },
      ],
    }),
  ],
})