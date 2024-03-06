<script setup>
import { useTeacherStore } from "@/stores/TeacherStore";
import studentsIcon from "@/components/icons/Iconstudents.vue";
import { onMounted, ref, defineProps } from "vue";

const props = defineProps({
  teacherId: Number,
  required: true,
});

const teacher = useTeacherStore();

async function drawSubjects() {
  try {
    await teacher.getSubjects(props.teacherId);
  } catch (error) {
    console.log(error);
  }
  console.log(teacher.subjects);
}

onMounted(() => {
  drawSubjects();
});
</script>

<template>
  <div
    :key="subject.id"
    class="subject"
    v-for="subject in teacher.subjects"
    :style="{ '--delay': subject.id }"
    @click="$emit('clickedSubject', subject.id)"
  >
    <h2 class="subjectName">{{ subject.name }}</h2>
    <div class="studentCount">
      <studentsIcon style="" />
      <h2 class="count">25</h2>
    </div>
  </div>
</template>

<style scoped>
.subject {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 35vh;
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
.subject:hover {
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
</style>
