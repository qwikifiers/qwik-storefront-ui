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
});
