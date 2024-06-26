export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Elfan Rodhian | Web Developer",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Elfan Rodhian, M. Elfa Rodhian Putra, Bojonegoro, Web Developer, Front End, Back End, Developer",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Hello World, I am M. Elfa Rodhian Putra, a Professional Web Developer, I am passionate about building beautiful, responsive, and accessible websites and applications.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/icon.png" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Exo+2:wght@500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
    "@nuxt/postcss8",
    "@nuxtjs/pwa",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  generate: {
    dir: "my-site",
  },
  target: "static",
  // ssr: true,
  axios: {
    baseURL: "https://62e49d6c3c89b95396dcd06e.mockapi.io/api/portfolio/",
  },

  env: {
    apiUrl: process.env.API_URL,
  },

  pwa: {
    manifest: {
      name: "Elfan Rodhian",
      short_name: "Elfan Rodhian",
      lang: "id",
      useWebmanifestExtension: false,
    },
  },
};
