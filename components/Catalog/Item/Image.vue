<template>
  <component :is="imageComponent" :images="images" />
</template>

<script setup lang="ts">
import ImageHoverSlider from '~/components/Catalog/Item/ImageHoverSlider.vue';
import ImageNativeSlider from '~/components/Catalog/Item/ImageNativeSlider.vue';
import ImageLongSlider from '~/components/Catalog/Item/ImageLongSlider.vue';
import { Offer } from '~/types/graphql';


const props = defineProps<{
  view?: string;
  images: Offer['images']
}>();

const { isMobile } = useDevice();
const imageComponent = computed(() => {
  return isMobile ? ImageNativeSlider : props.view === 'long' ? ImageLongSlider : ImageHoverSlider;
});
</script>

