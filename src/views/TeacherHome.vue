<script setup>
import sideBar from "../components/SideBar.vue";
import scheduleIcon from "../components/icons/IconSchedule.vue";
import marksIcon from "../components/icons/IconMarks.vue";
import settingsIcon from "../components/icons/IconSittings.vue";
import { useUserStore } from "../stores/UserStore";
import headercom from "@/components/header.vue";
import { onMounted, ref } from "vue";
import LectureCard from "@/components/LectureCard.vue";

const studentNav = [
  { name: 1, icon: scheduleIcon, route: "/teacher/home" },
  { name: 2, icon: marksIcon, route: "" },
  { name: 3, icon: settingsIcon, route: "" },
];

const user = useUserStore();

function handleClickedLecture(data) {
  console.log("from child" + data);
}
onMounted(() => {});
</script>

<template>
  <div class="mainContainer">
    <div class="body">
      <headercom />

      <main>
        <LectureCard
          :teacherId="user.Data.id"
          @clickedLecture="(n) => handleClickedLecture(n)"
        />
      </main>
    </div>

    <div class="navContainer">
      <sideBar :Items="studentNav" :startOn="1" />
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 85%;
  padding: 0 5% 2%;
  overflow-y: scroll;
}
</style>
