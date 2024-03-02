<script setup>
import Cet from "@/components/icons/IconCet.vue";
</script>
<template>
  <div class="loading">
    <Cet />
  </div>
</template>
<style scoped>
.loading {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  background: linear-gradient(
    rgb(68, 148, 208, 0.9),
    rgb(68, 148, 208, 0.8),
    rgb(255, 255, 255, 0.8)
  );
}
</style>
