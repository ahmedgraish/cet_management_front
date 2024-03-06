<script setup lang="ts">
import { useForm, ErrorMessage, Field } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { string, object, z } from "zod";
import { computed, ref } from "vue";
import InputField from "@/components/InputField.vue";
import axios from "axios";
import router from "@/router";
import Button from "@/components/Button.vue";
import { useAdminStore } from "@/stores/AdminStore";
import AdminSideBar from "@/components/SideBar.vue";
import scheduleIcon from "@/components/icons/IconSchedule.vue";
import percentageIcon from "@/components/icons/IconPercentage.vue";
import marksIcon from "@/components/icons/IconMarks.vue";
import settingsIcon from "@/components/icons/IconSittings.vue";

const studentNav = [
  { name: 1, icon: scheduleIcon, route: "/home" },
  { name: 2, icon: percentageIcon, route: "/absenceRatio" },
  { name: 3, icon: marksIcon, route: "/grades" },
  { name: 4, icon: settingsIcon, route: "" },
];
const adminStore = useAdminStore();

const schema = object({
  ref_number: string().min(4, "يجب أن يتكون الرقم الوطني من 4 رقم").max(12),
  name: string(),
  password: string().min(8),
  email: string().email(),
  phone_number: string(),
  confirmPassword: string().min(8),
}).refine((data) => data.password === data.confirmPassword, {
  message: "يجب على كلمة المرور ان تكون مطابقة",
  path: ["confirmPassword"],
});

// const frontendKeysToBackendKeys = {
//   ref_number: "national_id",
//   name: "name_number",
//   password: "password",
//   confirmPassword: "password_confirmation",
// };

const typedSchema = toTypedSchema(schema);

export type SignupFormParams = z.infer<typeof schema>;

const { handleSubmit, setErrors, isFieldValid, isFieldTouched } = useForm({
  validateOnMount: false,
  validationSchema: typedSchema,
});

const onSubmit = handleSubmit(
  async (values) => {
    try {
      const res = await adminStore.createTeacher(values);
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
        <div>
          <div>
            <h1>إنشاء حساب استاذ</h1>
          </div>
          <div>
            <form
              @submit="onSubmit"
              :validation-schema="typedSchema"
              action="#"
              dir="rtl"
            >
              <div>
                <div>
                  <label for="ref_number"> رقم الاشاري </label>
                  <Field type="text" name="ref_number" id="ref_number" v-slot="{ field }">
                    <InputField
                      type="text"
                      v-bind="field"
                      placeholder="xxxx"
                      v-mask="'####'"
                    />
                  </Field>
                  <ErrorMessage name="ref_number" as="small" />
                </div>
                <div>
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
                  <ErrorMessage name="name" as="small" />
                </div>
                <div>
                  <label for="phone_number"> رقم الهاتف </label>
                  <Field name="phone_number" v-slot="{ field }">
                    <InputField
                      id="phone_number"
                      type="text"
                      v-bind="field"
                      placeholder="phone_number"
                    />
                  </Field>
                  <ErrorMessage name="phone_number" as="small" />
                </div>
                <div>
                  <label for="email"> الايميل </label>
                  <Field name="email" v-slot="{ field }">
                    <InputField
                      id="email"
                      type="text"
                      v-bind="field"
                      placeholder="email"
                    />
                  </Field>
                  <ErrorMessage name="email" as="small" />
                </div>
                <div>
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
                  <ErrorMessage name="password" as="small" />
                </div>
                <div>
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
                  <ErrorMessage name="confirmPassword" as="small" />
                </div>
              </div>
              <Button type="submit" :disabled="isLoading" size="full">
                <span v-if="isLoading">
                  <LoadingIcon />
                </span>
                <span v-else> التسجيل </span>
              </Button>
            </form>
          </div>
        </div>
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
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  align-items: end;
  height: 100%;
  width: 95%;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 85%;
  padding: 0 5% 2%;
}
</style>
