<script setup>
import sideBar from "../components/SideBar.vue";
import scheduleIcon from "../components/icons/IconSchedule.vue";
import percentageIcon from "../components/icons/IconPercentage.vue";
import marksIcon from "../components/icons/IconMarks.vue";
import settingsIcon from "../components/icons/IconSittings.vue";
import headercom from "@/components/header.vue";
import schedule from "@/components/Schedule.vue";
import { onMounted, ref } from "vue";

const studentNav = [
  { name: 1, icon: scheduleIcon, route: "/home" },
  { name: 2, icon: percentageIcon, route: "/absenceRatio" },
  { name: 3, icon: marksIcon, route: "/grades" },
  { name: 4, icon: settingsIcon, route: "" },
];

onMounted(() => {});
</script>

<template>
  <div class="mainContainer">
    <div class="body">
      <headercom />

      <main>
        <schedule />
      </main>
    </div>

    <div class="navContainer">
      <sideBar :Items="studentNav" :staer="1" />
    </div>
  </div>
</template>

<style scoped>
.mainContainer {
  display: flex;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  align-items: end;
  height: 100%;
  width: 95%;
}
main {
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  height: 85%;
  padding: 0 5% 2%;
}
</style>
