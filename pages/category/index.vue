<template>
  <section>
    <h2>{{ $t('labels.select_category') }}</h2>
    <div>
      <nuxt-link
        :to="getLocalizedRoute({ name: 'category-slug', params: { slug: 'animals' } })"
        class="button--green">
        {{ $t('categories.animals') }}
      </nuxt-link>
      <nuxt-link
        :to="getLocalizedRoute({ name: 'category-slug', params: { slug: 'landscapes' } })"
        class="button--green">
        {{ $t('categories.landscapes') }}
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>
