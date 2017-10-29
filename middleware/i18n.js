import { DEFAULT_LOCALE, LOCALES } from '~~/config'

/**
 * i18n middleware - Handles lang switching and redirections to default lang
 * Inspired by Nuxt.js i18n example: https://nuxtjs.org/examples/i18n
 * @param  {Object} options.app       Vue app
 * @param  {Object} options.store     Vuex store
 * @param  {Object} options.route     Current route
 * @param  {Function} options.error     Error function
 * @param  {Function} options.redirect  Redirect function
 * @param  {Boolean} options.hotReload True if middleware was called by hotreload
 * @return {void}
 */
export default function ({ app, store, route, error, redirect, hotReload }) {
  // Check if middleware called from hot-reloading, ignore
  if (hotReload) return
  // Get locale from params
  let locale = DEFAULT_LOCALE
  LOCALES.forEach(l => {
    const regexp = new RegExp(`^/${l.code}/`)
    if (route.path.match(regexp)) {
      locale = l.code
    }
  })
  if (LOCALES.findIndex(l => l.code === locale) === -1) {
    return error({ message: 'Page not found.', statusCode: 404 })
  }
  if (locale === store.state.i18n.currentLocale) return
  // Set locale
  store.dispatch('i18n/setLocale', { locale })
  app.i18n.locale = locale
  // If route is /<DEFAULT_LOCALE>/... -> redirect to /...
  if (locale === DEFAULT_LOCALE && route.fullPath.indexOf(`/${DEFAULT_LOCALE}`) === 0) {
    const regexp = new RegExp(`^/${DEFAULT_LOCALE}/`)
    return redirect(route.fullPath.replace(regexp, '/'))
  }
}
