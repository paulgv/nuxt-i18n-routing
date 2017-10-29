import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

import { LOCALES } from '~~/config'

Vue.mixin({
  data: () => ({
    locales: LOCALES
  }),
  computed: {
    ...mapState('i18n', ['currentLocale'])
  },
  methods: {
    ...mapActions({
      setLocale: 'i18n/setLocale'
    }),
    getLocalizedRoute (route, locale) {
      locale = locale || this.$i18n.locale
      // If route parameters is a string, consider it as the route's name
      if (typeof route === 'string') {
        route = { name: route }
      }
      // Build localized route options
      const baseRoute = Object.assign({}, route, { name: `${route.name}-${locale}` })
      // Resolve localized route
      const resolved = this.$router.resolve(baseRoute)
      let { href } = resolved
      // Handle exception for homepage
      if (route.name === 'index') {
        href += '/'
      }
      // Cleanup href
      href = (href.match(/^\/\/+$/)) ? '/' : href
      return href
    },
    getRouteBaseName (route) {
      route = route || this.$route
      if (!route.name) {
        return null
      }
      for (let i = LOCALES.length - 1; i >= 0; i--) {
        const regexp = new RegExp(`-${LOCALES[i].code}$`)
        if (route.name.match(regexp)) {
          return route.name.replace(regexp, '')
        }
      }
    },
    getSwitchLocaleRoute (locale) {
      const name = this.getRouteBaseName()
      if (!name) {
        return ''
      }
      const baseRoute = Object.assign({}, this.$route, { name })
      return this.getLocalizedRoute(baseRoute, locale)
    }
  }
})
