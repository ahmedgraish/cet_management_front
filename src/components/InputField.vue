<script setup lang="ts">
import { useAttrs } from "vue";
type Props = {
  inputClasses?: string;
  containerClasses?: string;
};
const props = defineProps<Props>();
const attrs = useAttrs();
</script>

<template>
  <input dir="rtl" v-bind="attrs" class="input" />
</template>
<style scoped>
.input {
  height: 4rem;
  width: 100%;
  padding: 0 25px 0 15px;
  margin-top: 1rem;
  border-radius: 50px;
  border: 1px solid #9e9e9e;
  background-color: #dadada02;
  outline: none;
  transition: all 0.2s ease;
  font-size: large;
  font-family: "El Messiri", sans-serif;
}
</style>
