<script setup>
import store from "@/store.js"

const imageUrl = (image) => {
  return new URL(`../assets/${image}.jpg`, import.meta.url).href
}

const destinations = store.destinations
</script>

<template>
  <main class="home">
    <h1>
      All Destinations
    </h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <RouterLink :to="{ name: 'DestinationDetails', params: { slug: destination.slug } }">
          <h2>{{ destination.name }}</h2>
        </RouterLink>
        <figure>
          <RouterLink :to="{ name: 'DestinationDetails', params: { slug: destination.slug } }">
            <img :src="imageUrl(destination.slug)" :alt="destination.name" />
          </RouterLink>
        </figure>
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 200px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
</style>
