<template>
  <div class="rating"
       @click="$emit('click')"
       :style="`--rating-number:${ratingValue}; --rating-color:${ratingColor};`">
    {{ ratingText }}
  </div>
</template>

<script lang="ts" setup>
import {OfferQuery} from '~/types/graphql';

type RatingProps = {
  rating: OfferQuery['offer']['rating']
}

const props = defineProps<RatingProps>();

const ratingText = computed(() => parseFloat(props.rating.value.rating_total).toFixed(1));

// export default {
//   props: {
//     rating: Object
//   },
//   computed: {
//     ratingText() {
//       return parseFloat(this.rating.rating_total).toFixed(1);
//     },
//     ratingValue() {
//       return this.rating.rating_total * 20;
//     },
//     ratingColor() {
//       if (this.rating.rating_total >= 4) {
//         return '#0DC268';
//       }
//       if (this.rating.rating_total >= 3 && this.rating.rating_total < 4) {
//         return '#ED7B29';
//       }
//       if (this.rating.rating_total < 3) {
//         return '#ED2939';
//       }
//     }
//   }
// };
</script>