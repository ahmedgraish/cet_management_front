<template>
  <div class="relative bg-white rounded-3xl py-12 md:min-w-[450px]">
    <!-- Modal header -->
    <div class="flex flex-col items-center gap-4 justify-center p-4 md:p-5 rounded-t">
      <h3 class="text-3xl font-semibold text-gray-900">إنشاء حساب طالب</h3>
    </div>
    <!-- Modal body -->
    <div class="p-4 md:p-5">
      <form @submit="onSubmit" :validation-schema="typedSchema" class="space-y-4" action="#">
        <div class="grid grid-cols-2 gap-4 p-8">

        <div>
          <label
            for="ref_number"
            class="block mb-2 text-right text-sm font-semibold text-black-900"
          >
          رقم الاشاري
          </label>
          <Field
            type="text"
            name="ref_number"
            id="ref_number"
            class="border border-gray-300 text-gray-900 text-md rounded-full focus:ring-1 focus:ring-primary focus:border-primary block w-full px-4 py-2.5"
            v-slot="{ field }"
          >
            <InputField
              container-classes="mb-6"
              type="text"
              v-bind="field"
              placeholder="xxxxxxxxxxxx"
              v-mask="'####'"
            />
          </Field>
          <ErrorMessage name="ref_number" class="text-red-500" as="small" />
        </div>
        <div>
          <label for="password" class="block mb-2 text-right text-md font-semibold text-black-900">
            الاسم
          </label>
          <Field
            name="name"
            class="border border-gray-300 text-gray-900 text-md rounded-full focus:ring-1 focus:ring-primary focus:border-primary block w-full px-4 py-2.5"
            v-slot="{ field }"
          >
            <InputField
              container-classes="mb-6"
              id="name"
              type="text"
              v-bind="field"
              placeholder="الاسم" 
            >
              <template #postfix>
                <div v-if="isFieldTouched('name')">
                  <CheckIcon v-if="isFieldValid('name')" />
                  <CrossIcon v-else />
                </div>
              </template>
            </InputField>
          </Field>
          <ErrorMessage name="name" class="text-red-500" as="small" />
        </div>
        <div>
          <label for="phone_number" class="block mb-2 text-right text-md font-semibold text-black-900">
            رقم الهاتف
          </label>
          <Field
            name="phone_number"
            class="border border-gray-300 text-gray-900 text-md rounded-full focus:ring-1 focus:ring-primary focus:border-primary block w-full px-4 py-2.5"
            v-slot="{ field }"
          >
            <InputField
              container-classes="mb-6"
              id="phone_number"
              type="text"
              v-bind="field"
              placeholder="phone_number" 
            />
          </Field>
          <ErrorMessage name="phone_number" class="text-red-500" as="small" />
        </div>
        <div>
          <label for="email" class="block mb-2 text-right text-md font-semibold text-black-900">
            الايميل
          </label>
          <Field
            name="email"
            class="border border-gray-300 text-gray-900 text-md rounded-full focus:ring-1 focus:ring-primary focus:border-primary block w-full px-4 py-2.5"
            v-slot="{ field }"
          >
            <InputField
              container-classes="mb-6"
              id="email"
              type="text"
              v-bind="field"
              placeholder="email" 
            />
          </Field>
          <ErrorMessage name="email" class="text-red-500" as="small" />
        </div>
        <div>
          <label for="password" class="block mb-2 text-right text-md font-semibold text-black-900">
            كلمة المرور
          </label>
          <Field
            type="password"
            name="password"
            id="password"
            class="border border-gray-300 text-gray-900 text-md rounded-full focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5"
            placeholder="xxxxxxxxxxxx"
            v-slot="{ field }"
          >
            <InputField
              container-classes="mb-6"
              :type="isPassword ? 'password' : 'text'"
              v-bind="field"
              placeholder="كلمة السر"
            >
              <template #postfix>
                <div @click="isPassword = !isPassword" class="cursor-pointer">
                  <EyeIcon v-if="isPassword" />
                  <EyeOffIcon v-else />
                </div>
              </template>
            </InputField>
          </Field>
          <ErrorMessage name="password" class="text-red-500" as="small" />
        </div>
        <div>
          <label
            for="confirmPassword"
            class="block mb-2 text-right text-md font-semibold text-black-900"
          >
            تأكيد كلمة المرور
          </label>
          <Field
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            class="border border-gray-300 text-gray-900 text-md rounded-full focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5"
            placeholder="xxxxxxxxxxxx"
            v-slot="{ field }"
          >
            <InputField
              container-classes="mb-6"
              :type="isConfirmPasswordHidden ? 'password' : 'text'"
              v-bind="field"
              placeholder="تأكيد كلمة المرور "
            >
              <template #postfix>
                <div @click="isConfirmPasswordHidden = !isConfirmPasswordHidden" class="cursor-pointer">
                  <EyeIcon v-if="isConfirmPasswordHidden" />
                  <EyeOffIcon v-else />
                </div>
              </template>
            </InputField>
          </Field>
          <ErrorMessage name="confirmPassword" class="text-red-500" as="small" />
        </div>
        </div>
        <Button type="submit" :disabled="isLoading" size="full">
          <span v-if="isLoading">
            <LoadingIcon class="animate-spin" />
          </span>
          <span v-else> التسجيل </span>
        </Button>
      </form>
    </div>
  </div>

</template>

<script setup lang="ts">
import { useForm, ErrorMessage, Field } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { string, object, z } from 'zod'
import { computed, ref } from 'vue'
//import useAuthenticationStore from '@/stores/modules/auth'
//import LoadingIcon from '@/components/CustomIcons/LoadingIcons/LoadingIcon.vue'
//import OtpDialog, { type OtpFormParams } from '@/components/Auth/OtpDialog.vue'
//import EyeOffIcon from '@/components/CustomIcons/EyeOffIcon.vue'
//import EyeIcon from '@/components/CustomIcons/EyeIcon.vue'
import InputField from '@/components/InputField.vue'
import axios from 'axios'
//import showSuccessMessage from '@/utils/showSuccessMessage'
//import showErrorMessage from '@/utils/showErrorMessage'
//import mapBackendErrorsToFields from '@/utils/mapBackendErrorsToFrontErrors'
import router from '@/router'
//import CheckIcon from '@/components/CustomIcons/FieldIcons/CheckIcon.vue'
//import CrossIcon from '@/components/CustomIcons/FieldIcons/CrossIcon.vue'
import Button from '@/components/Button.vue'
import {useAdminStore} from '@/stores/AdminStore'

const adminStore = useAdminStore()

const schema = object({
  ref_number: string().min(4, 'يجب أن يتكون الرقم الوطني من 4 رقم').max(12),
  name: string(),
  password: string().min(8),
  email: string().email(),
  phone_number: string(),
  confirmPassword: string().min(8)
}).refine((data) => data.password === data.confirmPassword, {
  message: 'يجب على كلمة المرور ان تكون مطابقة',
  path: ['confirmPassword']
})

const frontendKeysToBackendKeys = {
  ref_number: 'national_id',
  name: 'name_number',
  password: 'password',
  confirmPassword: 'password_confirmation'
}

const typedSchema = toTypedSchema(schema)
//const authStore = useAuthenticationStore()
const showOtpModal = ref(false)

export type SignupFormParams = z.infer<typeof schema>

const { handleSubmit, setErrors, isFieldValid, isFieldTouched } = useForm({
  validateOnMount: false,
  validationSchema: typedSchema
})

const onSubmit = handleSubmit(
  async (values) => {
    try {
      console.log('values : ', values)
      const res = await adminStore.createStudent(values)
      console.log(res)
    } catch (error) {
      console.log(error)
      if (!axios.isAxiosError(error)) {
        return
      }

      //const errors = error.response?.data.errors
//
      //if (errors) {
        ////const frontErrors = mapBackendErrorsToFields(frontendKeysToBackendKeys, errors)
        ////setErrors(frontErrors)
      //} else {
        //showErrorMessage({
          //confirmButtonText: 'حسنا',
          //message: error.response?.data.message,
          //title: 'حدث خطأ'
        //})
      //}
    }
  },
  (errors) => {
    console.log(errors)
  }
)

const isLoading = computed(() => {
  //return authStore.dataLoading
})

//const openOtpDialog = () => {
  //showOtpModal.value = true
//}
const handleVerifyOtp = async (params: OtpFormParams) => {
  try {
    //await authStore.verifyOtp(params)
    showOtpModal.value = false
    showSuccessMessage({
      message: 'تم التسجيل بنجاح',
      title: 'تمت العملية'
    })
    router.push({ name: 'signIn' })
  } catch (error) {
    if (axios.isAxiosError(error)) {
      showErrorMessage({ confirmButtonText: 'asdf', message: 'asdf', title: 'asdfasdf' })
    }
  }
}
const handleResendOtp = async () => {
  //await authStore.resendOtp()
}
const isPassword = ref(true)
const isConfirmPasswordHidden = ref(true)

</script>
@/utils/mapBackendErrorsToFrontErrors
