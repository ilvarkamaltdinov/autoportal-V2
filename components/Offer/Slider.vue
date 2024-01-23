<template>
  <div class="car__slider slider-car grid__col-12">
    <Swiper class="swiper swiper--car"
            :loop="true"
            :modules="[Autoplay, Pagination, Navigation]"
            :slides-per-view="2">
      <div class="swiper-wrapper">
        <slot name="slides"></slot>
      </div>
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
</script>