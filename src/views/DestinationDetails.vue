<script setup>
import { useRoute, RouterLink, RouterView } from 'vue-router';
import GoBack from '../components/GoBack.vue';
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
  <div>
  <GoBack />
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="imageUrl(destination.slug)" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="expiriences">
    <h2>Top experiences in {{ destination.name }}</h2>
    <div class="cards">
      <div v-for="experience in destination.experiences" :key="experience.slug" class="card">
        <RouterLink :to="{
          name: 'experienceDetail',
          params: { experienceSlug: experience.slug }
        }">
          <img :src="imageUrl(experience.slug)" :alt="experience.name">
          <span class="card__text">
            {{ experience.name }}
          </span>
        </RouterLink>
      </div>
    </div>

    
    <RouterView :key="route.path" v-slot="{ Component, route }">
      <Transition name="fade">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </section>
  </div>
</template>

<style scoped>
h1{
  margin: 30px 0 30px;
}
h2 {
  margin-bottom: 20px;
}
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.experiences {
  padding: 40px 0;
}
.destination-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.cards {
  display: flex;
  justify-content: space-between;
}
.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>