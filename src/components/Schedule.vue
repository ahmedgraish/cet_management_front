<script setup>
import { useStudentStore } from "@/stores/StudentStore";
import { onMounted, ref } from "vue";

const studentStore = useStudentStore();
const welcomeMsg = ref("💫" + " مرحبا  " + studentStore.Data.name);

const lectures = ref();
const absenceRatio = ref([]);

async function draw() {
  try {
    await studentStore.getAbsenceRatio(studentStore.Data.id);
    await studentStore.getSchedule(studentStore.Data.id);
  } catch (error) {
    console.log(error);
  }
  absenceRatio.value = studentStore.absenceRatio;
  lectures.value = studentStore.schedule;
}

onMounted(() => {
  draw();
});
</script>

<template>
  <div class="welcomeMsg">
    <h1>{{ welcomeMsg }}</h1>
  </div>

  <div class="scheduleContainer">
    <h3 style="margin: 6px">جدول الاسبوع</h3>
    <div class="schedule">
      <h4>08:00</h4>
      <h4>09:00</h4>
      <h4>10:00</h4>
      <h4>11:00</h4>
      <h4>12:00</h4>
      <h4>13:00</h4>
      <h4>14:00</h4>
      <h4>15:00</h4>
      <h4>16:00</h4>
      <h4>17:00</h4>
      <h4>18:00</h4>
      <h4>اليوم/ الساعة</h4>
      <h4>السبت</h4>
      <h4>الاحد</h4>
      <h4>الاثنين</h4>
      <h4>الثلاثاء</h4>
      <h4>الاربعاء</h4>
      <h4>الخميس</h4>

      <div v-if="studentStore.isLoading">loading...</div>
      <div
        class="lecture"
        v-else-if="Array.isArray(studentStore.absenceRatio)"
        v-for="lecture in lectures"
        :style="{
          'grid-column-start':
            parseFloat(lecture.start_time) - parseFloat('06:00'),
          'grid-column-end': parseFloat(lecture.end_time) - parseFloat('06:00'),
          'grid-row-start': lecture.day_of_week + 1,
        }"
      >
        <span
          class="sideIndicator"
          :class="{
            IndicatorGood:
              absenceRatio[
                absenceRatio.findIndex(
                  (item) => item.subject_id == lecture.subject_id
                )
              ]?.ratio < 5
                ? true
                : false,
            IndicatorBad:
              absenceRatio[
                absenceRatio.findIndex(
                  (item) => item.subject_id == lecture.subject_id
                )
              ]?.ratio > 10
                ? true
                : false,
          }"
        ></span>
        <div class="data">
          <span>{{ lecture.subject_name }}</span>
          <span>{{ lecture.start_time }} - {{ lecture.end_time }} </span>
          <span
            >نسبة الغياب
            {{
              absenceRatio[
                absenceRatio.findIndex(
                  (item) => item.subject_id == lecture.subject_id
                )
              ]?.ratio
            }}%
          </span>
        </div>
        <span
          class="bottomIndicator"
          :class="{
            IndicatorGood:
              absenceRatio[
                absenceRatio.findIndex(
                  (item) => item.subject_id == lecture.subject_id
                )
              ]?.ratio < 5
                ? true
                : false,
            IndicatorBad:
              absenceRatio[
                absenceRatio.findIndex(
                  (item) => item.subject_id == lecture.subject_id
                )
              ]?.ratio > 10
                ? true
                : false,
          }"
        ></span>
      </div>
      <div v-else>حدث خطا</div>
    </div>
  </div>
</template>

<style scoped>
.welcomeMsg {
  transition: all 1s ease;
  animation: slideOut 1s ease forwards;
  animation-delay: 1s;
}
@keyframes slideOut {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  50% {
    transform: translateX(-20%);
    opacity: 0.5;
  }
  100% {
    transform: translateX(-30%);
    opacity: 0;
    display: none;
  }
}
.scheduleContainer {
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: all 0.5s ease;
  animation: slideIn 1s ease forwards;
  animation-delay: 2s;
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
.schedule {
  display: grid;
  direction: rtl;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2px 2px;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 90%;
  border: 1px solid var(--vt-c-divider-dark-2);
}
h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-left: 1px solid var(--vt-c-divider-dark-2);
  border-bottom: 1px solid var(--vt-c-divider-dark-2);
}
h4:nth-child(1) {
  grid-area: 1 / 2 / 1 / 2;
}
h4:nth-child(2) {
  grid-area: 1 / 3 / 1 / 3;
}
h4:nth-child(3) {
  grid-area: 1 / 4 / 1 / 4;
}
h4:nth-child(4) {
  grid-area: 1 / 5 / 1 / 5;
}
h4:nth-child(5) {
  grid-area: 1 / 6 / 1 / 6;
}
h4:nth-child(6) {
  grid-area: 1 / 7 / 1 / 7;
}
h4:nth-child(7) {
  grid-area: 1 / 8 / 1 / 8;
}
h4:nth-child(8) {
  grid-area: 1 / 9 / 1 / 9;
}
h4:nth-child(9) {
  grid-area: 1 / 10 / 1 / 10;
}
h4:nth-child(10) {
  grid-area: 1 / 11 / 1 / 11;
}
h4:nth-child(11) {
  grid-area: 1 / 12 / 1 / 12;
}

h4:nth-child(13) {
  grid-area: 2 / 1 / 2 / 1;
}
h4:nth-child(14) {
  grid-area: 3 / 1 / 3 / 1;
}
h4:nth-child(15) {
  grid-area: 4 / 1 / 4 / 1;
}
h4:nth-child(16) {
  grid-area: 5 / 1 / 5 / 1;
}
h4:nth-child(17) {
  grid-area: 6 / 1 / 6 / 1;
}
h4:nth-child(18) {
  grid-area: 7 / 1 / 7 / 1;
}
.lecture {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 20px 0 0px 0;
  background-color: var(--vt-c-white-mute);
  grid-row-end: span 1;
  /* grid-column: 2 / span 5;
    grid-row: 2 / span 1; */
}
.data {
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  margin-right: 5%;
}
.bottomIndicator {
  width: 100%;
  height: 3%;
}
.IndicatorGood {
  background-color: #1bc47d;
}
.IndicatorBad {
  background-color: #ff7262;
}

.sideIndicator {
  position: absolute;
  height: 97%;
  width: 0.2vw;
}
</style>
