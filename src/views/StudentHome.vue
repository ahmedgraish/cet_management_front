<script setup>
import sideBar from '../components/SideBar.vue';

</script>


<template>

    <div class="navContainer">
       <sideBar user="student" />
    </div>

</template>

<style>

    .navContainer{
        display: flex;
        justify-content: end;
    }
   
</style>