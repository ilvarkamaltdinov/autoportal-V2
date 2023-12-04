<template>
  <component :is="imageComponent"/>
</template>

<script setup lang="ts">
import ImageHoverSlider from '~/components/Catalog/Item/ImageHoverSlider.vue';
import ImageNativeSlider from '~/components/Catalog/Item/ImageNativeSlider.vue';

const {isMobile} = useDevice();
const imageComponent = computed(() => {
  return isMobile ? ImageNativeSlider : ImageHoverSlider;
});
</script>

