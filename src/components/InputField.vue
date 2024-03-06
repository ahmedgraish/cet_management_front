<template>
  <div :class="twMerge('relative', props.containerClasses)">
    <div class="absolute inset-y-0 end-0 flex items-center pe-3.5">
      <slot name="postfix"></slot>
    </div>
    <input

      dir="rtl"
      v-bind="attrs"
      :class="
        twMerge(
          'border border-gray-300 text-gray-900 text-md rounded-full focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5',
          props.inputClasses
        )
      "
    />
  </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { useAttrs } from 'vue'
type Props = {
  inputClasses?: string
  containerClasses?: string
}
const props = defineProps<Props>()
const attrs = useAttrs()
</script>
