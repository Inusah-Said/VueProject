<script setup>
import SideBar from "../SideBar.vue";
import Header from "../HeaderComponent.vue";
</script>

<template>
  <side-bar />
  <main class="ml-[250px]">
    <Header />
    <router-view />
  </main>
</template>
