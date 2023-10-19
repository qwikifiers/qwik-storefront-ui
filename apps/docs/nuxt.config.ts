// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['sf-docs-base'],
  algolia: {},
  alias: {
    'micromark/lib/preprocess.js': 'micromark',
    'micromark/lib/postprocess.js': 'micromark',
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://qwik-storefront-ui.pages.dev/',
      siteName: 'Qwik Storefront UI library',
      siteDescription:
        'A frontend library for Qwik that helps developers quickly build fast, accessible, and beautiful storefronts.',
      language: 'en',
      storefrontUi: true,
      DOCS_EXAMPLES_QWIK_PATH: process.env.DOCS_EXAMPLES_QWIK_PATH,
    },
  },
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },
  devtools: {
    enabled: false,
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  css: ['@/assets/main.scss'],
});
