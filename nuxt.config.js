const { generateRoutes } = require('./utils/router')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-i18n-routing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Localized routing with Nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /**
   * Router configuration
   */
  router: {
    middleware: ['i18n'],
    extendRoutes (routes) {
      const newRoutes = generateRoutes(routes)
      routes.splice(0, routes.length)
      routes.unshift(...newRoutes)
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~/plugins/global-mixin.js' },
    { src: '~/plugins/vue-i18n.js', injectAs: 'i18n' }
  ]
}
