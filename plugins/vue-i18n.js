import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { DEFAULT_LOCALE, I18N } from '~/config'

Vue.use(VueI18n)

export default ({ app, store }) => {
  const i18n = new VueI18n({
    fallbackLocale: DEFAULT_LOCALE,
    messages: I18N
  })
  i18n.locale = store.state.i18n.currentLocale
  app.i18n = i18n
}
