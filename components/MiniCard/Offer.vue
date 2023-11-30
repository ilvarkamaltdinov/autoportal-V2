<template>
  <article class="catalog__item catalog__item--vertical grid__col-4">
    <OfferHoverSlider/>
    <OfferInfo/>
    <OfferTech/>
    <OfferControls/>
  </article>
</template>
<script setup lang="ts">
import OfferHoverSlider from '~/components/MiniCard/OfferHoverSlider.vue';
import OfferInfo from '~/components/MiniCard/OfferInfo.vue';
import OfferTech from '~/components/MiniCard/OfferTech.vue';
import OfferControls from '~/components/MiniCard/OfferControls.vue';
//
// type DesktopSmallProps = {
//   isForm?: boolean,
//   choose?: boolean,
//   hasButtons?: boolean,
//   slide?: boolean,
//   offer: Offer,
//   hideStock?: boolean,
// }
//
// const props = withDefaults(defineProps<DesktopSmallProps>(), {
//   hideStock: false,
//   hasButtons: true,
//   slide: false,
//   choose: false,
//   isForm: false
// });
//
// const activeTmb = ref<number>(0);
// const class_name = ref('load');
// const isLoaded = false;
// const limit = ref(7);
// const forceCoverPhoto = ref<string>('');
//
// const placeholderUrl = computed(() => props.offer!.images![0]!.small_webp);
// const photos = computed(() => props.offer.images);
// const coverSrc = computed(() => {
//   return forceCoverPhoto.value
//       ? forceCoverPhoto.value
//       : photos!.value!.length > 0
//           ? photos!.value![0]!.small_webp
//           : placeholderUrl.value;
// });
//
// const isNew = computed(() => {
//   return props.offer!.run! <= 100 && props.offer!.owner!.number <= 1;
// });
//
// const onImgLoad = () => {
//   class_name.value = 'loaded';
// };
// const mouseOver = (photo: string, index: number) => {
//   activeTmb.value = index;
//   if (forceCoverPhoto.value !== '') {
//     class_name.value = 'load';
//   }
//   forceCoverPhoto.value = photo;
// };
// const mouseLeave = () => {
//   activeTmb.value = 0;
//   forceCoverPhoto.value = '';
//   class_name.value = 'loaded';
// };
//
// function ratingClick() {
//   console.log('click');
// }

</script>
