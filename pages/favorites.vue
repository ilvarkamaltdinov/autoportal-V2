<template>
  <main class="page-main">
    <div class="grid">
<!--      <crumbs :crumbs="crumbs"/> todo add crumb-->
    </div>
    <div class="grid grid--container">
      <section class="page-main__not-found not-found"
               v-if="likedOffers.length === 0 && !loading">
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
          <component v-for="i in 3"
                     :key="i"
                     :is="$device.isMobile ? 'skeleton-card-large': 'skeleton-card-small'" />
        </div>
        <div v-else
             class="catalog__list grid grid__col-12">
          <component :is="component"
                     v-for="offer in likedOffers"
                     :offer="offer"
                     :key="offer.id" />
        </div>
      </section>
    </div>
  </main>
</template>
<script setup lang="ts">
import {computed} from '#imports';
import {request} from '~/helpers/request';
import {offers} from '~/apollo/queries/offer/offers';
import {useFavorites} from '~/store/favorites';

const loading = ref(true);
const likedOffers = ref([]);
const {isTablet, isMobile} = useDevice();

const component = computed(() => {
  if (isTablet) {
    return 'catalog-item-large-mobile';
  }
  return isMobile ? 'catalog-item-large-mobile' : 'catalog-item-small-desktop';
});

onMounted(async () => {
  if(process.client) {
    loading.value = true;
    const favoritesStore = useFavorites();
    likedOffers.value = await favoritesStore.favoriteCars.then((favs) => { loading.value = false; return favs; });
  }
});
</script>