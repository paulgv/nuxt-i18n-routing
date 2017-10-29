<template>
  <div class="lang-switcher">
    <nuxt-link
      class="button--green"
      v-for="locale in locales"
      v-if="locale.code !== $i18n.locale"
      :to="getSwitchLocaleRoute(locale.code)"
      :key="locale.code">
      {{ locale.code }}
    </nuxt-link>
  </div>
</template>

<script>
/**
 * Lang switcher component to change the language of the website
 */
export default {
  name: 'LangSwitcher'
}
</script>
