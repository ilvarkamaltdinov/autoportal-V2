<script setup lang="ts">
import { ref, onMounted, onUnmounted } from '#imports';
type RangeSliderProps = {
  options: object;
  rangeClass: string;
};
defineProps<RangeSliderProps>();
const slider = ref(null);
onMounted(() => {
  slider.value = ion;
});
onUnmounted(() => {
  slider.value.destroy();
});
</script>

<template>
  <input :class="rangeClass" @change.prevent="$emit('input', $event.target.value)"/>
</template>

<style scoped>

</style>