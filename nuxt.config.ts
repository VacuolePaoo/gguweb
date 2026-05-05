// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],
  content: {
    experimental: { nativeSqlite: true }
  },

  runtimeConfig: {
    public: {
      // 留空由运行时环境变量 NUXT_PUBLIC_MAIL_API_BASE_URL 注入
      mailApiBaseUrl: '',
      postApiBaseUrl: 'https://postapi.ggu.edu.kg'
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/mail': { ssr: false },
    '/mail/**': { ssr: false }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
