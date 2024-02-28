<script setup>
import { useUserStore } from "../stores/UserStore";
import { useTeacherStore } from "@/stores/TeacherStore";
import studentsIcon from "@/components/icons/Iconstudents.vue";
import { onMounted, ref, defineProps } from "vue";

const props = defineProps({
  teacherId: Number,
  required: true,
});

function daysName(num) {
  switch (num) {
    case 1:
      return "السبت";
      break;
    case 2:
      return "الاحد";
      break;
    case 3:
      return "الاثنين";
      break;
    case 4:
      return "الثلاثاء";
      break;
    case 5:
      return "الاربعاء";
      break;
    case 6:
      return "الخميس";
      break;

    default:
      break;
  }
}
const teacher = useTeacherStore();

async function drawLectures() {
  try {
    await teacher.getLectures(props.teacherId);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  drawLectures();
});
</script>

<template>
  <div
    :key="lecture.id"
    class="lecture"
    v-for="lecture in teacher.lectures"
    :style="{ '--delay': lecture.id }"
    @click="$emit('clickedLecture', lecture.id)"
  >
    <h2 class="subjectName">{{ lecture.name }}</h2>
    <div class="studentCount">
      <studentsIcon style="" />
      <h2 class="count">25</h2>
    </div>
    <span>وقت المحاضرة</span>
    <h3 class="day">{{ daysName(lecture.day_of_week) }}</h3>
    <div class="time">
      <div class="hourDigit">
        <h1>{{ lecture.start_time.split(":")[0] }}</h1>
      </div>
      <h1>:</h1>
      <div class="minDigit">
        <h1>{{ lecture.start_time.split(":")[1] }}</h1>
      </div>
      <div class="meridiem"></div>
    </div>
  </div>
</template>

<style scoped>
.lecture {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 70vh;
  width: 25vw;
  border-radius: 20px;
  margin: 2%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  background-color: var(--vt-c-white);
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateY(30%);
  animation: slideIn 1s ease forwards;
  animation-delay: calc(var(--delay) * 200ms);
  user-select: none;
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
.lecture:hover {
  cursor: pointer;
  scale: 1.01;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
}
.studentCount {
  display: flex;
  align-items: center;
  justify-content: start;
  padding-right: 15%;
}
.time {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  gap: 2%;
}
.hourDigit {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 19%;
  border-radius: 20px;
  color: var(--mainColor);
  background-color: #fafafa;
}
.minDigit {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 19%;
  border-radius: 20px;
  background-color: #fafafa;
}
</style>
