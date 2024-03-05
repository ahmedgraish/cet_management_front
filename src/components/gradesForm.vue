<script setup>
import PresentIcon from "@/components/icons/IconPresent.vue";
import Loading from "./LoadingScreen.vue";
import { useSubjectStore } from "@/stores/SubjectStore";
import { onMounted, ref, computed, reactive } from "vue";

const subject = useSubjectStore();
const midMark = ref([]);
const finalMark = ref([]);

const validationError = ref();
const hint = ref(false);

const submitionData = {
  student_id: null,
  subject_id: null,
  mid_mark: 0,
  final_mark: 0,
};

async function submitGrades(student_id, index) {
  submitionData.subject_id = subject.subject_id;
  submitionData.student_id = student_id;
  submitionData.mid_mark = midMark.value[index];
  submitionData.final_mark = finalMark.value[index];

  try {
    await subject.submitGrades(submitionData);
  } catch (error) {
    // console.log(error.response.data.errors.mid_mark[0]);
    console.log(error.response);
    validationError.value = error.response;
    hint.value = true;
    setTimeout(() => {
      hint.value = false;
    }, 5000);
  }
}

onMounted(() => {});
computed(() => {});
</script>

<template>
  <Loading v-if="subject.isLoading" />
  <div class="studentTable">
    <div class="baseRow">
      <span>الاسم</span>
      <span>رقم القيد</span>
      <span>رقم الهاتف</span>
      <span>الاعمال</span>
      <span>النهائي</span>
      <span>تأكيد</span>
    </div>

    <div class="Row" v-for="(student, i) in subject.students">
      <span>{{ student.name }}</span>
      <span>{{ student.ref_number }}</span>
      <span>{{ student.phone_number }}</span>
      <div class="grades">
        <input type="text" value="0" class="midMark" v-model="midMark[i]" />
        <input type="text" value="0" class="finalMark" v-model="finalMark[i]" />
      </div>

      <div class="status">
        <PresentIcon @click="submitGrades(student.id, i)" />
      </div>
    </div>
  </div>
  <div v-if="hint" class="validationHint">
    <small
      v-if="hint"
      id="finalHint"
      v-for="msg in validationError.data.errors.final_mark"
      >{{ msg }}</small
    >
    <small
      v-if="hint"
      class="hint"
      id="midHint"
      v-for="msg in validationError.data.errors.mid_mark"
      >{{ msg }}
    </small>
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
  position: relative;
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
.grades {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 40%;
  aspect-ratio: 7;
}
.midMark,
.finalMark {
  height: 75%;
  max-width: 15%;
  margin-right: 5%;
  aspect-ratio: 2.01;
  border-radius: 10px;
  outline: none;
  border: 1px solid var(--mainColor);
  text-align: center;
  font-family: "El Messiri", sans-serif;
  font-size: large;
  background-color: var(--vt-c-white);
}

.validationHint {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 10vh;
  width: 35vw;
  border-radius: 30px;
  position: absolute;
  background-color: rgba(255, 0, 0, 0.5);
  top: 0;
  left: 35%;
  transition: all 1s ease;
  animation: popUp 1s ease forwards;
}
@keyframes popUp {
  from {
    transform: translate(0);
  }
  to {
    transform: translateY(70%);
  }
}
#finalHint,
#midHint {
  color: white;
  font-size: medium;
  font-family: "El Messiri", sans-serif;
}

.status {
  display: flex;
  justify-content: center;
  width: 20%;
}
</style>
