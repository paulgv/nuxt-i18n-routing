import { LOCALES, DEFAULT_LOCALE } from '~~/config'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

// Default module's state
const state = {
  locales: LOCALES,
  currentLocale: DEFAULT_LOCALE
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
