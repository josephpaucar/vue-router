<script setup>
import store from "@/store.js"
import { useRoute } from 'vue-router';
import { computed } from "vue";

const route = useRoute();
const slug = route.params.slug
const experienceSlug = route.params.experienceSlug

const imageUrl = (image) => {
  return new URL(`../assets/${image}.jpg`, import.meta.url).href
}

const destination = computed(() => store.destinations.find(
  destination => destination.slug === slug
))

const experience = computed(() => destination.value.experiences.find(
  experience => experience.slug === experienceSlug
))
</script>

<template>
  <section>
    <h1>Experiences</h1>
    <h2>{{ experience.name }}</h2>
    <div class="experience-details">
      <img :src="imageUrl(experience.slug)" :alt="experience.name">
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin-top: 50px;
}
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.experience-details {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>