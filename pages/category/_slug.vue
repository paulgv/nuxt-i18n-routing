<template>
  <section>

    <nuxt-link :to="getLocalizedRoute({ name: 'category' })" class="button--grey">
      {{ $t('labels.back') }}
    </nuxt-link>

    <h2>{{ $t('labels.showing_category') }} {{ $t(currentCategoryLabel) }}</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </section>
</template>

<script>
export default {
  computed: {
    currentCategoryLabel () {
      return `categories.${this.$route.params.slug}`
    }
  }
}
</script>
