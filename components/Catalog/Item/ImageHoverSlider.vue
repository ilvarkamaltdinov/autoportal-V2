<template>
  <a @click.prevent="$emit('click')" class="catalog__img brazzers-daddy">
    <img :data-src="coverSrc"
         @load="onImgLoad"
         :class="className"
         alt="offer.title"
         :src="coverSrc"/>
    <div class="tmb-wrap">
      <div class="tmb-wrap-table"
           v-if="photos && photos.length"
           @mouseleave="mouseLeave">
        <div v-for="(photo, key) in photos"
             :key="key"
             :class="{'active': key === activeThumb }"
             @mouseover="mouseOver(photo, key)">
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">

let className = ref<string>('');
let limit = ref<number>(10);
let forceCoverPhoto = ref<string | null>(null);
let activeThumb = ref<number>(0);
const onImgLoad = () => {
  className.value = 'loaded';
};
const mouseOver = (photo: string, key: number) => {
  activeThumb.value = key;
  if (forceCoverPhoto.value !== null) {
    className.value = 'load';
  }
  forceCoverPhoto.value = photo;
};
const mouseLeave = () => {
  activeThumb.value = 0;
  forceCoverPhoto.value = null;
  className.value = 'loaded';
};
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
  // return props.offer.images;
});
const coverSrc = computed(() => {
  return forceCoverPhoto.value
    ? forceCoverPhoto.value
    : photos.value[0];
});
</script>