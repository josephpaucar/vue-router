<script setup>
import { RouterView, useRoute } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'

const route = useRoute()
</script>

<template>
  <header>
    <div class="wrapper">
      <TheNavigation />
    </div>
  </header>

  <RouterView :key="route.path" />
</template>

<style scoped>

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>
