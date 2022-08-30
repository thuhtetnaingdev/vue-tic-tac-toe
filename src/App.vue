<script setup lang="ts">
import NavBar from './components/NavBar/index.vue'
import Modal from './components/Modal/index.vue'
</script>

<template>
  <Modal />
  <NavBar />
  <router-view></router-view>
</template>

<style>
/* * {
  color: white
} */
</style>
