<script setup>
import scheduleIcon from "../components/icons/IconSchedule.vue";
import percentageIcon from "../components/icons/IconPercentage.vue";
import marksIcon from "../components/icons/IconMarks.vue";
import settingsIcon from "../components/icons/IconSittings.vue";

import { ref } from "vue";
import router from "@/router";

defineProps(["Items", "startOn"]);
const activeNav = ref(1);
</script>

<template>
  <nav>
    <div class="icon"></div>
    <div
      v-for="item in Items"
      class="navBtns"
      :class="{ activeNav: activeNav == item.name ? true : false }"
      @click="
        activeNav = item.name;
        router.push(item.route);
      "
    >
      <component :is="item.icon" :color="activeNav == item.name ? '#4494D0' : '#fff'" />
    </div>

    <!-- 
        <div class="navBtns" :class="{ 'activeNav': activeNav == 1 ? true : false }" @click="activeNav = 1">
            <scheduleIcon :color="activeNav == 1 ? '#4494D0' : '#fff'" />
        </div>

        <div class="navBtns" :class="{ 'activeNav': activeNav == 2 ? true : false }" @click="activeNav = 2">
            <percentageIcon :color="activeNav == 2 ? '#4494D0' : '#fff'" />
        </div>

        <div class="navBtns" :class="{ 'activeNav': activeNav == 3 ? true : false }" @click="activeNav = 3">
            <marksIcon :color="activeNav == 3 ? '#4494D0' : '#fff'" />
        </div>

        <div class="navBtns" :class="{ 'activeNav': activeNav == 4 ? true : false }" @click="activeNav = 4">
            <settingsIcon :color="activeNav == 4 ? '#4494D0' : '#fff'" />
        </div> -->
  </nav>
</template>

<style>
:root {
  --mainColor: #4494d0;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 5%;
  height: 100%;
  width: 5vw;
  background-color: var(--mainColor);
}

.icon {
  height: 10%;
  width: 100%;
  background-image: url("../assets/images/header_icon_noBk.png");
  background-size: contain;
}

.navBtns {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
}
.navBtns:nth-child(5) {
  margin-top: 25vh;
}

.navBtns:hover {
  transition: all 0.2s ease-in;
  cursor: pointer;
}

.activeNav {
  transition: all 0.2s ease;
  background-color: #fafafa;
}
</style>
