<script setup>
import { ref } from "vue";
const fill = ref("white");
const line = ref("#828282");
const click = ref(false);

function handleHover() {
  fill.value = "#828282";
  line.value = "white";
}
function handleLeave() {
  if (click.value) {
    fill.value = "#828282";
    line.value = "white";
    return;
  }
  fill.value = "white";
  line.value = "#828282";
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
      x="2.33813"
      y="2"
      width="50.1457"
      height="51"
      rx="25.0729"
      stroke="#828282"
      stroke-width="4"
    />
    <g clip-path="url(#clip0_293_587)">
      <path
        d="M24.6725 33.1524L19.5683 28.0482C18.9996 27.4795 18.0954 27.4795 17.5267 28.0482C16.9579 28.617 16.9579 29.5211 17.5267 30.0899L23.6371 36.2003C24.2058 36.7691 25.1246 36.7691 25.6933 36.2003L41.1517 20.7566C41.7204 20.1878 41.7204 19.2836 41.1517 18.7149C40.5829 18.1461 39.6787 18.1461 39.11 18.7149L24.6725 33.1524Z"
        :fill="line"
      />
      <line
        x1="12.0452"
        y1="9.29289"
        x2="47.0452"
        y2="44.2929"
        stroke="#828282"
        stroke-width="2"
      />
    </g>
    <defs>
      <clipPath id="clip0_293_587">
        <rect width="35" height="35" fill="white" transform="translate(11.3381 10)" />
      </clipPath>
    </defs>
  </svg>
</template>
