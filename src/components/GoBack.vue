<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const goBack = () => {
  return router.go(-1)
}
</script>

<template>
  <span class="go-back">
    <button @click="goBack">Go back</button>
  </span>
</template>

<style scoped>
  .go-back {
    display: flex;
    margin: 20px 0;
  }
  button {
    border: 0;
    padding: 4px 7px;
  }
  button:hover {
    cursor: pointer;
  }
</style>