import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import i18n from './i18n'

const debug = process.env.NODE_ENV !== 'production'

// Common plugins for store
let plugins = []
if (debug) {
  // Dev plugins
  const devPlugins = []
  if (process.browser) {
    devPlugins.push(createLogger())
  }
  plugins = devPlugins
} else {
  // Prod plugins
  plugins = plugins.concat([])
}

const store = () => new Vuex.Store({
  modules: {
    i18n
  },
  actions: {
    /**
     * Action triggered on server served pages (first load)
     * @param  {Function} options.dispatch  Dispatch method
     * @param  {Object} options.req         Request object
     * @return {void}
     */
    // nuxtServerInit ({ commit, dispatch, rootState }, { req, res }) {}
  },
  plugins
})

export default store
