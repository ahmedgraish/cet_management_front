<script setup>
import showMoreIcon from "../components/icons/IconShowMore.vue";
import showLessIcon from "../components/icons/IconShowLess.vue";
import { useUserStore } from "../stores/UserStore";
import { useStudentStore } from "@/stores/StudentStore";
import { onMounted, ref, defineProps } from "vue";

const student = useStudentStore();
const user = useUserStore();

const props = defineProps({
  studentId: Number,
  required: true,
});

const bunnerShown = ref(false);

async function grades() {
  try {
    await student.getGrades(props.studentId);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  grades();
});
</script>

<template>
  <div
    class="gradesBunner"
    :class="{
      gradesBunnerShown: bunnerShown,
      gradesBunnerGood: grade.Total > 50 ? true : false,
      gradesBunnerBad: grade.Total < 50 ? true : false,
    }"
    v-for="grade in student.grades"
  >
    <h1>{{ grade.name }}</h1>
    <h1>{{ grade.Total }}</h1>
    <div class="marks" v-if="bunnerShown">
      <div class="mid">
        <span>اعمال</span>
        <h1>{{ grade.mid_mark }}</h1>
      </div>
      <div class="final">
        <span>نهائي</span>
        <h1>{{ grade.final_mark }}</h1>
      </div>
    </div>
    <showMoreIcon v-if="!bunnerShown" class="more" @click="bunnerShown = !bunnerShown" />
    <showLessIcon v-if="bunnerShown" class="less" @click="bunnerShown = !bunnerShown" />
  </div>
</template>

<style scoped>
.gradesBunner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
  min-width: 25vw;
  border-radius: 10px;
  padding-bottom: 1%;
  margin: 2%;
  transform: translateY(30%);
  opacity: 0;
  transition: all 0.7s ease;
  animation: slideIn 1s ease forwards;
  animation-delay: calc(var(--delay) * 200ms);
  background: linear-gradient(to left, rgb(50, 202, 138, 1), rgb(207, 240, 228));
}
.gradesBunnerShown {
  height: 50vh;
}
.gradesBunnerGood {
  background: linear-gradient(to left, rgb(50, 202, 138, 1), rgb(207, 240, 228));
}
.gradesBunnerBad {
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

.marks {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.more:hover {
  transition: all 0.5s ease;
  cursor: pointer;
  transform: translateY(10%);
}
.less:hover {
  transition: all 0.5s ease;
  cursor: pointer;
}
</style>
