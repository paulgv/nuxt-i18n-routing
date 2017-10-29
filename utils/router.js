const { has } = require('lodash')

const { ROUTES_ALIASES, DEFAULT_LOCALE, LOCALES } = require('../config')

/**
 * Generate localized route using Nuxt's generated routes and i18n config
 * @param  {Array}  baseRoutes  Nuxt's default routes based on pages/ directory
 * @param  {Array}  locales     Locales to use for route generation, should be
 *                              used when recursively generating children routes,
 *                              defaults to app's configured LOCALES
 * @return {Array}              Localized routes to be used in Nuxt config
 */
function generateRoutes (baseRoutes, locales = []) {
  const newRoutes = []
  locales = locales.length ? locales : LOCALES
  baseRoutes.forEach((baseRoute) => {
    locales.forEach((locale) => {
      const { component } = baseRoute
      let { path, name, children } = baseRoute
      if (children) {
        children = generateRoutes(children, [locale])
      }
      const { code } = locale
      if (has(ROUTES_ALIASES, `${name}.${code}`)) {
        path = ROUTES_ALIASES[name][code]
      }
      if (code !== DEFAULT_LOCALE) {
        // Add leading / if needed (ie. children routes)
        if (path.match(/^\//) === null) {
          path = `/${path}`
        }
        // Prefix path with locale code if not default locale
        path = `/${code}${path}`
      }
      const route = { path, component }
      if (name) {
        name += `-${code}`
        route.name = name
      }
      if (children) {
        route.children = children
      }
      newRoutes.push(route)
    })
  })
  return newRoutes
};

/**
 * Make a copy of a route
 * @param  {Object} route Route to be cloned
 * @return {Objet}        Route copy
 */
function cloneRoute (route) {
  const clonedRoute = Object.assign({}, route)
  if (route.meta) {
    clonedRoute.meta = Object.assign({}, route.meta)
  }
  if (route.params) {
    clonedRoute.params = Object.assign({}, route.params)
  }
  if (route.query) {
    clonedRoute.query = Object.assign({}, route.query)
  }
  return clonedRoute
};

module.exports = {
  generateRoutes,
  cloneRoute
}
