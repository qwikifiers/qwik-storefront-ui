import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['sf-docs-base'],
  alias: {
    "micromark/lib/preprocess.js": "micromark",
    "micromark/lib/postprocess.js": "micromark",
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
    enabled: true,
  },
});
