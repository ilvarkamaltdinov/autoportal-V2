<template></template>
<!--<template>-->
<!--  <div class="catalog__list grid">-->
<!--    <swiper class="swiper swiper&#45;&#45;catalog">-->
<!--      <swiper-slide v-for="offer in offers" :key="offer.id">-->
<!--        <MiniCardOffer :offer="offer"/>-->
<!--      </swiper-slide>-->
<!--    </swiper>-->


<!--    &lt;!&ndash;    <div class="swiper swiper&#45;&#45;catalog">&ndash;&gt;-->
<!--    &lt;!&ndash;      <div class="swiper-wrapper">&ndash;&gt;-->
<!--    &lt;!&ndash;        <catalog-item-small-desktop&ndash;&gt;-->
<!--    &lt;!&ndash;            slide&ndash;&gt;-->
<!--    &lt;!&ndash;            :key="offer.id"&ndash;&gt;-->
<!--    &lt;!&ndash;            v-for="offer in offers"&ndash;&gt;-->
<!--    &lt;!&ndash;            :offer="offer" />&ndash;&gt;-->
<!--    &lt;!&ndash;      </div>&ndash;&gt;-->
<!--    &lt;!&ndash;    </div>&ndash;&gt;-->
<!--    &lt;!&ndash;    <button class="swiper-button swiper-button-prev">&ndash;&gt;-->
<!--    &lt;!&ndash;      <svg-icon class="swiper-button__icon"&ndash;&gt;-->
<!--    &lt;!&ndash;                name="icon-arrow" />&ndash;&gt;-->
<!--    &lt;!&ndash;    </button>&ndash;&gt;-->
<!--    &lt;!&ndash;    <button class="swiper-button swiper-button-next">&ndash;&gt;-->
<!--    &lt;!&ndash;      <svg-icon class="swiper-button__icon"&ndash;&gt;-->
<!--    &lt;!&ndash;                name="icon-arrow" />&ndash;&gt;-->
<!--    &lt;!&ndash;    </button>&ndash;&gt;-->
<!--  </div>-->
<!--</template>-->
<!--<script setup lang="ts">-->
<!--import {Swiper, SwiperSlide} from 'swiper/vue';-->
<!--import {getOffers, request} from '~/helpers/request';-->
<!--import {Offer, OffersQueryVariables} from '~/types/graphql';-->
<!--import {LoadAction} from '@ts-pro/vue-eternal-loading';-->
<!--import {OffersTypeData} from '~/app/types/offers';-->


<!--const offers = ref<Offer[]>([]);-->

<!--let variables = computed<OffersQueryVariables>(() => {-->
<!--  return {-->
<!--    category: 'cars',-->
<!--    page: 0,-->
<!--    limit: 10,-->
<!--    dateFormat: 'j F Y года.'-->
<!--  };-->
<!--});-->

<!--offers.value = getOffers(variables);-->


<!--</script>-->
<script setup lang="ts">
import Template from '~/components/Modals/Template.vue';
</script>