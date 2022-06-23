import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - anitech-connect',
    title: 'anitech-connect',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

    /*
  ** Customize the progress-bar color
  */
  loading: { color: '#333' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ 
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/composition-api/module'
   // '@pinia/nuxt',
   // '@nuxtjs/eslint-module',
   // '@nuxtjs/axios'
  ],

  strapi: {
    // Options
    url: process.env.STRAPI_URL || 'https://strapi-nb0l.onrender.com/',
    prefix: '/api',
    version: 'v4',
    cookie: {},
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', 
    'nuxt-uid-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
        name: 'English'
      },
      {
        code: 'es',
        file: 'es-ES.js',
        name: 'Español'
      },
      {
        code: 'fr',
        file: 'fr-FR.js',
        name: 'Français'
      },
      {
        code: 'it',
        file: 'it-IT.js',
        name: 'Italiano'
      },
      {
        code: 'de',
        file: 'de-DE.js',
        name: 'Deutsch'
      },
      
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    strategy: "prefix",
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
     /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}
