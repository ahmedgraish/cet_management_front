<script setup>
import { ref } from 'vue';
defineProps(['value','fun'])

</script>

<template>

<input type="submit" :value="value" id="submitBtn" >


</template>

<style scoped>
#submitBtn{
  /* height: 25%;
  width: 60%; */
  border-radius: 10px;
  outline: none;
  border: 1px solid #9e9e9e ;
  background-color: #4494D0;
  color: #fff;
  font-size: 1.1rem;
  font-family: "El Messiri", sans-serif;
}
#submitBtn:hover{
  transition: all 0.3s ease;
  background-color: #4493d0da;
  cursor: pointer;
}
</style>