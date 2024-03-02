<script setup>
import PresentIcon from "@/components/icons/IconPresent.vue";
import absent from "@/components/icons/IconAbsent.vue";
import permission from "@/components/icons/IconPermissioned.vue";
import Loading from "./LoadingScreen.vue";
import { useLectureStore } from "@/stores/LectureStore";
import { onMounted, ref, computed, reactive } from "vue";

const lecture = useLectureStore();
const attendentStudents = ref([]);
const absentStudents = ref([]);
const permissionedStuents = ref([]);
const submitionData = {
  lecture_id: null,
  student_id: null,
  status: 0,
  note: "done",
};

async function attendent(student_id) {
  attendentStudents.value.includes(student_id)
    ? null
    : attendentStudents.value.push(student_id);

  submitionData.lecture_id = lecture.lecture_id;
  submitionData.student_id = student_id;
  submitionData.status = 1;
  await lecture.submitAttendence(submitionData);
  console.log(lecture.submitionStatus);
}

async function absence(student_id) {
  absentStudents.value.includes(student_id)
    ? null
    : absentStudents.value.push(student_id);

  submitionData.lecture_id = lecture.lecture_id;
  submitionData.student_id = student_id;
  submitionData.status = 0;
  await lecture.submitAttendence(submitionData);
  console.log(lecture.submitionStatus);
}

async function permissioned(student_id) {
  permissionedStuents.value.includes(student_id)
    ? null
    : permissionedStuents.value.push(student_id);

  submitionData.lecture_id = lecture.lecture_id;
  submitionData.student_id = student_id;
  submitionData.status = 2;
  await lecture.submitAttendence(submitionData);
  console.log(lecture.submitionStatus);
}

const handleAbsent = reactive((id) => {
  if (attendentStudents.value.includes(id)) {
    return false;
  } else if (permissionedStuents.value.includes(id)) {
    return false;
  } else {
    return true;
  }
});

const handleAttendent = reactive((id) => {
  if (absentStudents.value.includes(id)) {
    return false;
  } else if (permissionedStuents.value.includes(id)) {
    return false;
  } else {
    return true;
  }
});

const handlePermissioned = reactive((id) => {
  if (attendentStudents.value.includes(id)) {
    return false;
  } else if (absentStudents.value.includes(id)) {
    return false;
  } else {
    return true;
  }
});
onMounted(() => {});
computed(() => {});
</script>

<template>
  <Loading v-if="lecture.isLoading" />
  <div class="studentTable">
    <div class="baseRow">
      <span>الاسم</span>
      <span>رقم القيد</span>
      <span>رقم الهاتف</span>
      <span>الايميل</span>
      <span>حالة الحضور</span>
    </div>

    <div class="Row" v-for="(student, i) in lecture.students">
      <span>{{ student.name }}</span>
      <span>{{ student.ref_number }}</span>
      <span>{{ student.phone_number }}</span>
      <span>{{ student.email }}</span>
      <div class="status">
        <PresentIcon @click="attendent(student.id)" v-if="handleAttendent(student.id)" />
        <absent @click="absence(student.id)" v-if="handleAbsent(student.id)" />
        <permission
          @click="permissioned(student.id)"
          v-if="handlePermissioned(student.id)"
        />
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
  padding-bottom: 2%;
  padding-top: 2%;
  margin-top: 4%;
  background-color: var(--vt-c-white-mute);
  border-radius: 20px 20px 0 0;
}
.Row {
  display: flex;
  align-items: center;
  height: 15%;
  padding-top: 1%;
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
