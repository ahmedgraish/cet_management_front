<script setup>
import { ref } from "vue";
const fill = ref("white");
const line = ref("#7AD8A0");
const click = ref(false);

function handleHover() {
  fill.value = "#7AD8A0";
  line.value = "white";
}
function handleLeave() {
  if (click.value) {
    fill.value = "#7AD8A0";
    line.value = "white";
    return;
  }
  fill.value = "white";
  line.value = "#7AD8A0";
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
      x="2.38086"
      y="2"
      width="50.1457"
      height="51"
      rx="25.0729"
      stroke="#7AD8A0"
      stroke-width="4"
    />
    <g clip-path="url(#clip0_293_579)">
      <path
        d="M24.715 33.1524L19.6108 28.0482C19.0421 27.4795 18.1379 27.4795 17.5691 28.0482C17.0004 28.617 17.0004 29.5211 17.5691 30.0899L23.6796 36.2003C24.2483 36.7691 25.1671 36.7691 25.7358 36.2003L41.1941 20.7566C41.7629 20.1878 41.7629 19.2836 41.1941 18.7149C40.6254 18.1461 39.7212 18.1461 39.1525 18.7149L24.715 33.1524Z"
        :fill="line"
      />
    </g>
    <defs>
      <clipPath id="clip0_293_579">
        <rect width="35" height="35" fill="#7AD8A0" transform="translate(11.3809 10)" />
      </clipPath>
    </defs>
  </svg>
</template>
