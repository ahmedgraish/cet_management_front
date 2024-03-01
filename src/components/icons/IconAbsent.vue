<script setup>
import { ref } from "vue";
const fill = ref("white");
const line = ref("#FF5858");
const click = ref(false);

function handleHover() {
  fill.value = "#FF5858";
  line.value = "white";
}
function handleLeave() {
  if (click.value) {
    fill.value = "#FF5858";
    line.value = "white";
    return;
  }
  fill.value = "white";
  line.value = "#FF5858";
}
</script>

<template>
  <svg
    width="55"
    height="55"
    viewBox="0 0 55 55"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
    @click="click = !click"
    @mouseenter="handleHover"
    @mouseleave="handleLeave"
    style="cursor: pointer; transition: 0.5s ease"
  >
    <rect
      x="2.35938"
      y="2"
      width="50.1457"
      height="51"
      rx="25.0729"
      stroke="#FF5858"
      stroke-width="4"
    />
    <g clip-path="url(#clip0_293_583)">
      <path
        d="M36.5845 18.0295C36.0158 17.4608 35.097 17.4608 34.5283 18.0295L27.397 25.1462L20.2658 18.0149C19.697 17.4462 18.7783 17.4462 18.2095 18.0149C17.6408 18.5837 17.6408 19.5024 18.2095 20.0712L25.3408 27.2024L18.2095 34.3337C17.6408 34.9024 17.6408 35.8212 18.2095 36.3899C18.7783 36.9587 19.697 36.9587 20.2658 36.3899L27.397 29.2587L34.5283 36.3899C35.097 36.9587 36.0158 36.9587 36.5845 36.3899C37.1533 35.8212 37.1533 34.9024 36.5845 34.3337L29.4533 27.2024L36.5845 20.0712C37.1387 19.517 37.1387 18.5837 36.5845 18.0295Z"
        :fill="line"
      />
    </g>
    <defs>
      <clipPath id="clip0_293_583">
        <rect width="35" height="35" fill="white" transform="translate(10.3594 10)" />
      </clipPath>
    </defs>
  </svg>
</template>
