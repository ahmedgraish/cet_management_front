<script setup>
  import {onMounted} from 'vue'
  import {useUserStore} from '../stores/UserStore'
  const user = useUserStore();



</script>

<template>
  <div class="about">
    <h1>{{ user.userData }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
