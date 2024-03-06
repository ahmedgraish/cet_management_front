<script setup>
import { useUserStore } from "@/stores/UserStore";
import arrowDownIcon from "../components/icons/IconArrowDown.vue";
import { useTeacherStore } from "@/stores/TeacherStore";
import { useAdminStore } from "@/stores/AdminStore";
import { useStudentStore } from "@/stores/StudentStore";

let user = null;

if (document.URL.includes("teacher")) {
  user = useTeacherStore();
} else if (document.URL.includes("admin")) {
  user = useAdminStore();
} else {
  user = useStudentStore();
}
</script>

<template>
  <div class="userBunner">
    <div class="userName">{{ user.Data.name }}</div>
    <div class="userPicture"></div>
    <div class="more">
      <arrowDownIcon />
    </div>
  </div>
</template>

<style>
.userBunner {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  height: 100%;
  width: 20%;
  margin-left: 5%;
  border-radius: 20px 0 20px 0;
  border: 1px solid var(--vt-c-white-mute);
  user-select: none;
}
.userBunner:hover {
  transition: all 0.5s ease;
  background-color: var(--vt-c-white-soft);
  cursor: pointer;
}
.userPicture {
  height: 80%;
  width: 20%;
  border-radius: 50%;
  background-image: url("../assets/images/userPicture.jpg");
  background-size: contain;
}
</style>
