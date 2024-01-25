<template>
  <div class="car__slider slider-car grid__col-12">
    <Swiper class="swiper swiper--car"
            :loop="true"
            :modules="[Autoplay, Pagination, Navigation]"
            :spaceBetween="slidesSpaceBetween"
            :centeredSlides="centeredSlides"
            :slides-per-view="slidesPerView">
      <slot name="slides"></slot>
      <div class="swiper-pagination"></div>
    </Swiper>
    <button class="swiper-button swiper-button-prev">
      <nuxt-icon class="swiper-button__icon" name="icon-arrow"/>
    </button>
    <button class="swiper-button swiper-button-next">
      <nuxt-icon class="swiper-button__icon" name="icon-arrow"/>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const { isMobile } = useDevice();


const centeredSlides = computed(() => {
  return isMobile;
});

const slidesPerView = computed(() => {
  if (isMobile) {
    return 1.1;
  } else {
    return 2;
  }
});

const slidesSpaceBetween = computed(() => {
  if (isMobile) {
    return 8;
  } else {
    return 24;
  }
});
</script>