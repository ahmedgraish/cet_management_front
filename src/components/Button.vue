<template>
  <button :class="twMerge(buttonStyles({ intent, size }), attrs.class as string)" v-bind="attrs">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'
import { useAttrs } from 'vue'
import { cva } from 'class-variance-authority'
const attrs = useAttrs()

type Props = {
  intent?: 'primary' | 'secondary' | 'transparent'
  size?: 'full' | 'large' | 'regular'
}

defineProps<Props>()

const buttonStyles = cva(
  'flex items-center justify-center gap-2 font-medium rounded-full  text-center hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer',
  {
    variants: {
      intent: {
        primary: 'text-white bg-primary',
        secondary: 'bg-white text-primary border border-gray-300',
        transparent: 'text-white bg-transparent',
        soft: 'bg-[#F3F4F6]'
      },
      size: {
        large: 'py-2.5 px-6 text-md',
        full: 'w-full text-sm px-5 py-2.5',
        regular: 'text-sm px-5 py-2.5'
      }
    },
    defaultVariants: {
      intent: 'primary',
      size: 'regular'
    }
  }
)
</script>
