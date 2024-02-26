<script setup>
import { useUserStore } from "../stores/UserStore";
import { useStudentStore } from "@/stores/StudentStore";
import { onMounted, ref } from "vue";

const student = useStudentStore();
const user = useUserStore();

const props = defineProps({
  studentId: Number,
  required: true,
});

async function drawRatio() {
  try {
    await student.getAbsenceRatio(props.studentId);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  drawRatio();
});
</script>

<template>
  <div
    class="ratioBunner"
    v-for="subject in student.absenceRatio"
    :class="{
      ratioBunnerGood: subject.ratio < 5 ? true : false,
      ratioBunnerBad: subject.ratio > 5 ? true : false,
    }"
    :style="{
      '--delay': student.absenceRatio.findIndex((item) => item.id == subject.id) + 1,
    }"
  >
    <h1>{{ subject.name }}</h1>
    <h1>{{ subject.ratio }}%</h1>
  </div>
</template>

<style scoped>
.ratioBunner {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  height: 25vh;
  min-width: 20vw;
  border-radius: 10px;
  padding-right: 20px;
  margin: 2%;
  transform: translateY(30%);
  opacity: 0;
  transition: all 0.3s ease;
  animation: slideIn 1s ease forwards;
  animation-delay: calc(var(--delay) * 200ms);
  background: linear-gradient(to left, rgb(50, 202, 138, 1), rgb(207, 240, 228));
}
.ratioBunnerGood {
  background: linear-gradient(to left, rgb(50, 202, 138, 1), rgb(207, 240, 228));
}
.ratioBunnerBad {
  background: linear-gradient(to left, rgb(249, 55, 28), rgb(252, 0, 0, 0.1));
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
</style>
