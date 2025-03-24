<template>
  <div class="slider-container" @wheel.prevent="handleScroll" @touchstart="startTouch" @touchmove="moveTouch" ref="sliderContainer">
    <div class="slider">
      <div class="slide">
        <div class="button-container" v-for="(button, index) in buttons" :key="index">
          <a :href="button.link">
            <button class="fill" :style="{ backgroundColor: button.color }">
              {{ button.label }}
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { buttons } from '../utils/mainpage.js';

const sliderContainer = ref(null);
let startX = 0;

const handleScroll = (event) => {
  if (sliderContainer.value) {
    sliderContainer.value.scrollLeft += event.deltaY;
  }
};

const startTouch = (event) => {
  startX = event.touches[0].clientX;
};

const moveTouch = (event) => {
  if (sliderContainer.value) {
    let endX = event.touches[0].clientX;
    sliderContainer.value.scrollLeft += startX - endX;
    startX = endX;
  }
};
</script>

<style scoped>
.slider-container {
  /*margin/padding!*/
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  scroll-behavior: smooth;
}
.slider {
  display: inline-block;
}
.slide {
  display: flex;
  gap: 10px;
  padding: 10px;
  margin: 25px;
  margin-left: 50%;
  margin-top: 1rem;

}
.button-container {
  display: inline-flex;
  align-items: center;
}
button {
  overflow:hidden;
  cursor: pointer;
}
</style>