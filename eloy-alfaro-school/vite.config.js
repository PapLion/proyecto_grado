import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        historia: resolve(__dirname, "pages/historia.html"),
        contacto: resolve(__dirname, "pages/contacto.html"),
        ofertaAcademica: resolve(__dirname, "pages/oferta-academica.html"),
        actividades: resolve(__dirname, "pages/actividades.html"),
        admisiones: resolve(__dirname, "pages/admisiones.html"),
        noticias: resolve(__dirname, "pages/noticias.html"),
        calendarioAcademico: resolve(__dirname, "pages/calendario-academico.html"),
      },
    },
  },
  root: "./",
  base: "/",
})

