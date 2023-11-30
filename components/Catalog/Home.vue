<template>
  <div class="catalog__list grid">
    <MiniCardOffer v-for="i in 3" :key="i"/>
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
// import {Swiper, SwiperSlide} from 'swiper/vue';
// import {Offer, OffersQueryVariables, OfferTypePagination} from '~/types/graphql';
// import {request} from '~/helpers/request';
// import {offers as offersGql} from '~/apollo/queries/offer/offers';

// const offerPagination = ref<OfferTypePagination>();
// const offers = ref<Offer[]>([]);
// let variables = computed<OffersQueryVariables>(() => {
//   return {
//     category: 'cars',
//     page: 0,
//     limit: 10,
//     dateFormat: 'j F Y года.'
//   };
// });

// async function getOffers() {
//   const {data} = await request<OfferTypePagination, OffersQueryVariables>(offersGql, variables.value);
//   console.log(data.value?.offers.data);
//   // offerPagination.value = data.value;
//   // offers.value = data.value.data
// }
//
// getOffers();


</script>