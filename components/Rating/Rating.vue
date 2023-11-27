<template>
  <div class="rating"
       @click="$emit('click')"
       :style="`--rating-number:${ratingValue}; --rating-color:${ratingColor};`">
    {{ ratingText }}
  </div>
</template>

<script lang="ts" setup>
import {Offer} from '~/types/graphql';

type RatingProps = {
  rating: Offer['rating'];
}
const props = defineProps<RatingProps>();
console.log(props.rating);

const ratingText = computed(() => props.rating?.rating_total!.toFixed(1));
const ratingValue = computed(() => props.rating!.rating_total! * 20);
const ratingColor = computed(() => {
  if (props.rating!.rating_total! >= 4) {
    return '#0DC268';
  }
  if (props.rating!.rating_total! >= 3 && props.rating!.rating_total! < 4) {
    return '#ED7B29';
  }
  if (props.rating!.rating_total! < 3) {
    return '#ED2939';
  }
});
</script>