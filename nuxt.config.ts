// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
      link: [
        { rel: "icon", type: "image/svg", href: "/img/logo.svg" },
      ],
    }
  },
  css: ["@/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/defines.scss";',
        },
      },
    },
  },
})
