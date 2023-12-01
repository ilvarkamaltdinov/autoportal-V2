<template>
  <div class="rating"
       @click="$emit('click')"
       :style="`--rating-number:${ratingValue}; --rating-color:${ratingColor};`">
    {{ ratingText }}
  </div>
</template>

<script lang="ts" setup>
type RatingProps = {
  rating: number;
  max: number
}
const props = defineProps<RatingProps>();

const ratingText = computed(() => props.rating.toFixed(1));
const ratingValue = computed(() => props.max === 100 ? props.rating : props.rating * 20);
const ratingColor = computed(() => {
  if (props.max === 100) {
    if (props.rating >= 70) {
      return '#0DC268';
    }
    if (props.rating >= 50 && props.rating < 70) {
      return '#ED7B29';
    }
    if (props.rating < 50) {
      return '#ED2939';
    }
  } else {
    if (props.rating >= 4) {
      return '#0DC268';
    }
    if (props.rating >= 3 && props.rating < 4) {
      return '#ED7B29';
    }
    if (props.rating < 3) {
      return '#ED2939';
    }
  }
});
</script>