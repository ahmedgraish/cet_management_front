<script setup>
import sideBar from "../components/SideBar.vue";
import scheduleIcon from "../components/icons/IconSchedule.vue";
import percentageIcon from "../components/icons/IconPercentage.vue";
import marksIcon from "../components/icons/IconMarks.vue";
import settingsIcon from "../components/icons/IconSittings.vue";
import { useUserStore } from "../stores/UserStore";
import { useStudentStore } from "@/stores/StudentStore";
import headercom from "@/components/header.vue";
import schedule from "@/components/Schedule.vue";
import { onMounted, ref } from "vue";
import router from "@/router";

const studentNav = [
  { name: 2, icon: scheduleIcon, route: "/home" },
  { name: 1, icon: percentageIcon, route: "/home/absenceRatio" },
  { name: 3, icon: marksIcon, route: "" },
  { name: 4, icon: settingsIcon, route: "" },
];
onMounted(() => {});
</script>

<template>
  <div class="mainContainer">
    <div class="body">
      <headercom />

      <main>hello</main>
    </div>

    <div class="navContainer">
      <sideBar :Items="studentNav" />
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
