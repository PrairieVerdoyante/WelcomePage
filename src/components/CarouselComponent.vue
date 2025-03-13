<template>
  <div class="slider-container" @wheel="handleScroll">
    <div class="slider">
      <div class="slide" v-for="(chunk, index) in buttons" :key="index">
        <div class="button-container" v-for="(button, index) in buttons" :key="index">
                <a :href="button.link">
                    <button class="fill" :style="{ backgroundColor: button.color }">
                    </button>
                </a>
            </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { buttons } from '../utils/mainpage.js';
/*
const buttonChunks = computed(() => {
  const chunks = [];
  for (let i = 0; i < buttons.value.length; i += 8) {
    chunks.push(buttons.value.slice(i, i + 8));
  }
  return chunks;
});
*/
const handleScroll = (event) => {
  document.querySelector(".slider-container").scrollLeft += event.deltaY;
};
</script>

<style scoped>
.slider-container {
  width: 100%;
  max-width: 700px;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  scroll-behavior: smooth;
}
.slider {
  display: flex;
}
.slide {
  
  display: flex;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 10px;
  padding: 100px;
}
.button-container {
  display: inline-flex;
  justify-content: left;
  align-items: center;
}
button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>
