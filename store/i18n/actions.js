import * as types from '../mutation-types'

export default {
  setLocale ({ commit }, { locale }) {
    commit(types.I18N_SET_LOCALE, { locale })
  }
}
