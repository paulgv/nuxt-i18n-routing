import * as types from '../mutation-types'

export default {
  [types.I18N_SET_LOCALE] (state, { locale }) {
    state.currentLocale = locale
  }
}
