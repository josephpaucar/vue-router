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

  <RouterView :key="route.path" v-slot="{ Component, route }">
    <Transition name="fade">
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
  
</template>

<style>

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
