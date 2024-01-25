<template>
  <component :is="imageComponent"/>
</template>

<script setup lang="ts">
import ImageHoverSlider from '~/components/Catalog/Item/ImageHoverSlider.vue';
import ImageNativeSlider from '~/components/Catalog/Item/ImageNativeSlider.vue';
import ImageLongSlider from '~/components/Catalog/Item/ImageLongSlider.vue';


const props = defineProps<{
  view?: string
}>();

const { isMobile } = useDevice();
const imageComponent = computed(() => {
  return isMobile ? ImageNativeSlider : props.view === 'long' ? ImageLongSlider : ImageHoverSlider;
});
</script>

