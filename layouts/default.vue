<template>
  <div class="container">
    <header>
      <nuxt-link
        :to="getLocalizedRoute('index')"
        class="button--green">
        {{ $t('labels.home') }}
      </nuxt-link>
      <nuxt-link :to="getLocalizedRoute({ name: 'category' })" class="button--green">
        {{ $t('labels.see_categories') }}
      </nuxt-link>
      <nuxt-link :to="getLocalizedRoute({ name: 'about' })" class="button--green">
        {{ $t('labels.about') }}
      </nuxt-link>
      <LangSwitcher />
    </header>
    <nuxt/>
  </div>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher'

export default {
  components: {
    LangSwitcher
  }
}
</script>

<style>
.container {
  margin: 0 5%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

header {
  text-align: center;
  display: flex;
  margin-bottom: auto;
}

header a {
  margin: 10px;
}

section {
  margin-bottom: auto;
}
</style>
