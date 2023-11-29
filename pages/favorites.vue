<template>
  <client-only>
  <main class="page-main">
    <div class="grid">
<!--      <crumbs :crumbs="crumbs"/> todo add crumb-->
    </div>
    <div class="grid grid--container">
      <section class="page-main__not-found not-found"
               v-if="favCars.length === 0 && !loading">
        <h1 class="heading heading--h1">
          {{ title }}
        </h1>
        <div class="not-found__block">
          <PictureComponent
              classes="not-found__img lazyload"
              small="/img/favorites@1x.png"
              small-webp="/img/favorites@1x.webp"
              big="/img/favorites@2x.png"
              big-webp="/img/favorites@2x.webp" />
        </div>
      </section>
      <section v-else
               class="page-main__catalog catalog grid__col-12">
        <h1 class="heading heading--h1">
          {{ title }}
        </h1>
        <div v-if="loading"
             class="catalog__list grid grid__col-12">
<!--          <component v-for="i in 3"-->
<!--                     :key="i"-->
<!--                     :is="$device.isMobile ? 'skeleton-card-large': 'skeleton-card-small'" />-->
        </div>
        <div v-else
             class="catalog__list grid grid__col-12">
          <DesktopSmall
                     v-for="offer in favCars"
                     :offer="offer"
                     :key="offer.id" />
        </div>
      </section>
    </div>
  </main>
  </client-only>
</template>
<script setup lang="ts">
import {useFavorites} from '~/store/favorites';
import {storeToRefs} from 'pinia';
import DesktopSmall from '~/components/MiniCard/DesktopSmall.vue';

const loading = ref(false);

// const component = computed(() => {
//   if (isTablet) {
//     return 'catalog-item-large-mobile';
//   }
//   return isMobile ? 'catalog-item-large-mobile' : 'catalog-item-small-desktop';
// });
const favCars = ref([]);
if(process.client) {
  const favoritesStore = useFavorites();
  await favoritesStore.favoriteCars;
  const {favoriteCarArray} = storeToRefs(favoritesStore);
  if(favoriteCarArray.value?.data?.offers?.data) {
    favCars.value = favoriteCarArray.value?.data?.offers?.data;
  }
  favoritesStore.$subscribe((mutation, state) => {
    if (state.favoriteCarArray?.data?.offers.data) {
      favCars.value = state.favoriteCarArray?.data?.offers.data;
    }
  });
}
</script>