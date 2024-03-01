<script setup>
import PresentIcon from "@/components/icons/IconPresent.vue";
import absent from "@/components/icons/IconAbsent.vue";
import permission from "@/components/icons/IconPermissioned.vue";
import { useLectureStore } from "@/stores/LectureStore";
import { onMounted, ref } from "vue";

const lecture = useLectureStore();

onMounted(() => {});
</script>

<template>
  <div class="studentTable">
    <div class="baseRow">
      <span>الاسم</span>
      <span>رقم القيد</span>
      <span>رقم الهاتف</span>
      <span>الايميل</span>
      <span>حالة الحضور</span>
    </div>

    <div class="Row" v-for="student in lecture.students">
      <span>{{ student.name }}</span>
      <span>{{ student.ref_number }}</span>
      <span>{{ student.phone_number }}</span>
      <span>{{ student.email }}</span>
      <div class="status">
        <PresentIcon />
        <absent />
        <permission />
      </div>
    </div>
  </div>
</template>

<style scoped>
.studentTable {
  display: flex;
  flex-direction: column;
  align-items: end;
  position: relative;
  height: 100%;
  width: 90%;
  direction: rtl;
  opacity: 0;
  transform: translateY(30%);
  animation: slideIn 0.7s ease forwards;
}
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(30%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.baseRow {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10%;
  margin-top: 4%;
  background-color: var(--vt-c-white-mute);
  border-radius: 20px 20px 0 0;
}
.Row {
  display: flex;
  align-items: center;
  height: 15%;
  width: 100%;
  background-color: var(--vt-c-white-soft);
  span {
    display: flex;
    justify-content: center;
    width: 20%;
  }
}
.status {
  display: flex;
  justify-content: center;
  gap: 10%;
  width: 20%;
}
</style>
