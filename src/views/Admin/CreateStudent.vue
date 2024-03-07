<script setup lang="ts">
import { useForm, ErrorMessage, Field } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { string, object, z } from "zod";
import { computed, ref } from "vue";
import InputField from "@/components/InputField.vue";
import axios from "axios";
import Button from "@/components/Button.vue";
import { useAdminStore } from "@/stores/AdminStore";
import AdminSideBar from "@/components/SideBar.vue";
import addLectureIcon from "@/components/icons/IconSchedule.vue";
import percentageIcon from "@/components/icons/IconPercentage.vue";
import marksIcon from "@/components/icons/IconMarks.vue";
import settingsIcon from "@/components/icons/IconSittings.vue";
import AddStudentIcon from "@/components/icons/IconAddStudent.vue";
import AddTeacherIcon from "@/components/icons/IconAddTeacher.vue";
import submitBtn from "@/components/SubmitBtn.vue";
const studentNav = [
  { name: 2, icon: AddTeacherIcon, route: "/admin/create-teacher" },
  { name: 1, icon: AddStudentIcon, route: "/admin/create-student" },
  { name: 3, icon: addLectureIcon, route: "" },
  { name: 4, icon: marksIcon, route: "" },
];
const adminStore = useAdminStore();

const schema = object({
  ref_number: string({ required_error: "مطلوب" })
    .min(4, "يجب ان يتكون معرف الطالب من اربعة ارقام")
    .max(12),
  name: string({ required_error: "مطلوب" }),
  password: string({ required_error: "مطلوب" }).min(
    8,
    "يجب ان تتكون كلمة المرور من 8 حروف"
  ),
  email: string({ required_error: "مطلوب" }).email("الرجاء ادخال ايميل صحيح"),
  phone_number: string({ required_error: "مطلوب" }),
  confirmPassword: string({ required_error: "مطلوب" }).min(
    8,
    "يجب ان تتكون كلمة المرور من 8 حروف"
  ),
}).refine((data) => data.password === data.confirmPassword, {
  message: "يجب على كلمة المرور ان تكون مطابقة",
  path: ["confirmPassword"],
});

const typedSchema = toTypedSchema(schema);

export type SignupFormParams = z.infer<typeof schema>;

const { handleSubmit, setErrors, isFieldValid, isFieldTouched } = useForm({
  validateOnMount: false,
  validationSchema: typedSchema,
});

const onSubmit = handleSubmit(
  async (values) => {
    try {
      const res = await adminStore.createStudent(values);
      console.log(res);
    } catch (error) {
      console.log(error);
      if (!axios.isAxiosError(error)) {
        return;
      }
    }
  },
  (errors) => {
    console.log(errors);
  }
);

const isLoading = computed(() => {
  return false;
});

const isPassword = ref(true);
const isConfirmPasswordHidden = ref(true);
</script>

<template>
  <div class="mainContainer">
    <div class="body">
      <main>
        <h1 style="font-size: 3rem">إنشاء حساب طالب</h1>
        <form @submit="onSubmit" :validation-schema="typedSchema" action="#" dir="rtl">
          <div class="inputMianContainer">
            <div class="inputContainer">
              <label for="ref_number"> رقم الاشاري </label>
              <Field type="text" name="ref_number" id="ref_number" v-slot="{ field }">
                <InputField
                  type="text"
                  v-bind="field"
                  placeholder="xxxx"
                  v-mask="'####'"
                />
              </Field>
              <ErrorMessage name="ref_number" as="small" class="hint" />
            </div>
            <div class="inputContainer">
              <label for="password"> الاسم </label>
              <Field name="name" v-slot="{ field }">
                <InputField id="name" type="text" v-bind="field" placeholder="الاسم">
                  <template #postfix>
                    <div v-if="isFieldTouched('name')">
                      <CheckIcon v-if="isFieldValid('name')" />
                      <CrossIcon v-else />
                    </div>
                  </template>
                </InputField>
              </Field>
              <ErrorMessage name="name" as="small" class="hint" />
            </div>
            <div class="inputContainer">
              <label for="phone_number"> رقم الهاتف </label>
              <Field name="phone_number" v-slot="{ field }">
                <InputField
                  id="phone_number"
                  type="text"
                  v-bind="field"
                  placeholder="phone_number"
                />
              </Field>
              <ErrorMessage name="phone_number" as="small" class="hint" />
            </div>
            <div class="inputContainer">
              <label for="email"> الايميل </label>
              <Field name="email" v-slot="{ field }">
                <InputField id="email" type="text" v-bind="field" placeholder="email" />
              </Field>
              <ErrorMessage name="email" as="small" class="hint" />
            </div>
            <div class="inputContainer">
              <label for="password"> كلمة المرور </label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="xxxxxxxxxxxx"
                v-slot="{ field }"
              >
                <InputField
                  :type="isPassword ? 'password' : 'text'"
                  v-bind="field"
                  placeholder="كلمة السر"
                >
                  <template #postfix>
                    <div @click="isPassword = !isPassword">
                      <EyeIcon v-if="isPassword" />
                      <EyeOffIcon v-else />
                    </div>
                  </template>
                </InputField>
              </Field>
              <ErrorMessage name="password" as="small" class="hint" />
            </div>
            <div class="inputContainer">
              <label for="confirmPassword"> تأكيد كلمة المرور </label>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="xxxxxxxxxxxx"
                v-slot="{ field }"
              >
                <InputField
                  :type="isConfirmPasswordHidden ? 'password' : 'text'"
                  v-bind="field"
                  placeholder="تأكيد كلمة المرور "
                >
                  <template #postfix>
                    <div @click="isConfirmPasswordHidden = !isConfirmPasswordHidden">
                      <EyeIcon v-if="isConfirmPasswordHidden" />
                      <EyeOffIcon v-else />
                    </div>
                  </template>
                </InputField>
              </Field>
              <ErrorMessage name="confirmPassword" as="small" class="hint" />
            </div>
          </div>
          <submitBtn value="حفظ" id="submitBtn" />
        </form>
      </main>
    </div>

    <div class="navContainer">
      <AdminSideBar :Items="studentNav" :staer="1" />
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
  position: relative;
  align-items: flex-end;
  height: 100%;
  width: 95%;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
}
.inputMianContainer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  height: 75%;
  margin-top: 3%;
}
.inputContainer {
  width: 40%;
}
#submitBtn {
  width: 20rem;
  height: 4rem;
}
.hint {
  margin: 2% 2% 0 0;
  font-size: medium;
  color: crimson;
}
</style>
