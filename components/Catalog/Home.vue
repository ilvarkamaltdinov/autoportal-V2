<template>
  <h2 class="heading heading--h2">Автомобили в наличии</h2>
  <div class="catalog__list grid">
    <CatalogItem v-for="i in 3" :key="i" class="grid__col-4"/>
    <!--    <swiper class="swiper swiper&#45;&#45;catalog">-->
    <!--&lt;!&ndash;      <swiper-slide v-for="offer in offers" :key="offer.id">&ndash;&gt;-->
    <!--&lt;!&ndash;        <MiniCardOffer :offer="offer"/>&ndash;&gt;-->
    <!--&lt;!&ndash;      </swiper-slide>&ndash;&gt;-->
    <!--    </swiper>-->


    <!--    <div class="swiper swiper--catalog">-->
    <!--      <div class="swiper-wrapper">-->
    <!--        <catalog-item-small-desktop-->
    <!--            slide-->
    <!--            :key="offer.id"-->
    <!--            v-for="offer in offers"-->
    <!--            :offer="offer" />-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <button class="swiper-button swiper-button-prev">-->
    <!--      <svg-icon class="swiper-button__icon"-->
    <!--                name="icon-arrow" />-->
    <!--    </button>-->
    <!--    <button class="swiper-button swiper-button-next">-->
    <!--      <svg-icon class="swiper-button__icon"-->
    <!--                name="icon-arrow" />-->
    <!--    </button>-->
  </div>
</template>
<script setup lang="ts">
import CatalogItem from '~/components/Catalog/Item/index.vue';

import { requestCatalogOffers } from '~/utils/request';
import { OfferCatalog, OffersCatalogInputType } from '~/app/types/offers';

const route = useRoute();
const offers = ref<OfferCatalog[]>();
let variables = computed<OffersCatalogInputType>(() => {
  return {
    page: 0,
    limit: 10,
    dateFormat: 'j F Y года.'
  };
});

async function getOffers() {
  const { data } = await requestCatalogOffers(variables.value);
  // offers.value = data.value.data;
}


watch(route, async () => {
  await getOffers();
}, { immediate: true });


</script>