<template>
  <v-app>
    <TheHeader />
    <main class="main">
      <RouterView></RouterView>
    </main>
    <TheFooter />
  </v-app>
</template>

<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<style scoped></style>
