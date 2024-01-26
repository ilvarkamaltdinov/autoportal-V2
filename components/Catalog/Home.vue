<template>
  <h2 class="heading heading--h2">Автомобили в наличии</h2>
  <div class="catalog__list grid" v-if="pending">
    <CatalogItemSkeletonUsed v-for="i in 3" :key="i"/>
  </div>
  <div class="catalog__list grid" v-else>
    <CatalogItem v-for="offer in offers" :key="offer.external_id" :offer="offer"/>
  </div>
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
</template>
<script setup lang="ts">
import CatalogItem from '~/components/Catalog/Item/index.vue';
import CatalogItemSkeletonUsed from '~/components/Catalog/Item/SkeletonUsed.vue';

import { useOffers } from '~/store/offersStore';
import { Offer, OffersQueryVariables } from '~/types/graphql';

const offersStore = useOffers();
const currentPage = ref(1);
const lastPage = ref(1);
const offers = ref<Offer[]>([]);

const variables = computed<OffersQueryVariables>(() => {
  return {
    category: 'cars',
    mark_slug_array: [],
    folder_slug_array: [],
    generation_slug_array: [],
    limit: 3,
    page: currentPage.value,
    dateFormat: 'j F Y года.',
  };
});

async function getOffers() {
  const fetchedOffers = await offersStore.fetchOffers(variables.value);
  offers.value = fetchedOffers.data;
  lastPage.value = fetchedOffers.last_page;
}

const { pending } = useAsyncData('offerCategory', () => getOffers());


</script>