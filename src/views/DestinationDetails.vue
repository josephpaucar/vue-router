<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import store from "@/store.js"

const imageUrl = (image) => {
  return new URL(`../assets/${image}.jpg`, import.meta.url).href
}

const route = useRoute();
const slug = route.params.slug

const destination = computed(() => store.destinations.find(
  destionation => destionation.slug === slug
))
</script>

<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destionation-details">
      <img :src="imageUrl(destination.slug)" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.destionation-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>