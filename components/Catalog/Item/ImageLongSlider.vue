<template>
  <Swiper :loop="true"
          :spaceBetween="16"
          :slidesPerView="'auto'"
          :modules="[Autoplay, Pagination, Navigation]">
    <SwiperSlide v-for="image in photos"
                 :key="image">
      <a class="catalog__img-link"
         title="Увеличить фотографию"
         aria-label="Увеличить фотографию">
        <img :data-src="image" class="lazyload" loading="lazy" alt="" src="">
      </a>
    </SwiperSlide>
  </Swiper>
  <div class="swiper__buttons-wrapper">
    <button class="swiper-button swiper-button-prev">
      <nuxt-icon name="icon-arrow"
                 class="swiper-button__icon"/>
    </button>
    <button class="swiper-button swiper-button-next">
      <nuxt-icon name="icon-arrow"
                 class="swiper-button__icon"/>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/vue';

const photos = computed(() => {
  return [
    '/img/mock/offer-card-img-1.webp',
    '/img/mock/offer-card-img-2.webp',
    '/img/mock/offer-card-img-3.webp',
    '/img/mock/offer-card-img-1.webp',
    '/img/mock/offer-card-img-2.webp',
    '/img/mock/offer-card-img-3.webp',
    '/img/mock/offer-card-img-1.webp',
    '/img/mock/offer-card-img-2.webp',
    '/img/mock/offer-card-img-3.webp',
    '/img/mock/offer-card-img-1.webp',
    '/img/mock/offer-card-img-2.webp',
    '/img/mock/offer-card-img-3.webp'
  ];
});
</script>