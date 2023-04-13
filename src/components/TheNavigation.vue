<template>
  <nav id="nav">
    <p>VueRouter</p>
    <ul class="nav-links">
      <li class="links">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="links" v-for="destination in destinations" :key="destination.name">
        <RouterLink :to="{
          name: 'DestinationDetails',
          params: { slug: destination.slug }
        }">{{ destination.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import store from "@/store.js"

const destinations = store.destinations
</script>

<style scoped>
nav {
  display: flex;
  width: 100%;
  font-size: 16px;
  text-align: center;
}
ul {
  display: flex;
  list-style: none;
}
nav a {
  margin-right: 15px;
  padding: 5px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>