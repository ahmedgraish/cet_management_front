<script setup>
import userBunner from "./userBunner.vue";
</script>

<template>
  <header>
    <userBunner />
  </header>
</template>

<style>
header {
  display: flex;
  position: relative;
  width: 100%;
  height: 10%;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.08), 0 1px 1px 0 rgba(0, 0, 0, 0.12);
}

</style>
