<template>
  <main class="page-main" v-if="!pending">
    <div class="grid ">
      <Crumbs/>
    </div>
    <div class="page-main__car car" v-if="offer">
      <div class="grid grid--container" v-if="isMobile">
        <!--        <Benefits :type="currentBenefitsType" class="car__benefits"/>-->
      </div>
      <div class="grid grid--container">
        <div class="heading-group heading-group--h1 grid__col-6">
          <div class="heading-group__wrap">
            <h1 v-if="route.params.category === 'used'" class="heading heading--h1 heading--h1-car"
                v-html="'pageTitle'"></h1>
            <h1 v-if="route.params.category === 'new'" class="heading heading--h1 heading--h1-car"
                v-html="'pageTitle NEW'"></h1>
            <div class="heading-group__label heading-group__label--car" v-if="route.params.category === 'used'">
              <div class="heading-group__year">
                {{ offer.year }}
              </div>
              <span class="heading-group__generation">
                {{ offer.generation.name }}
              </span>
              <div class="vin__wrapper-car" v-if="offer.vin">
                <div class="car__vin vin">
                  <nuxt-icon name="icon-check"/>
                  VIN
                </div>
                <span> {{ offer.vin }}</span>
              </div>
            </div>
            <div class="heading-group__label heading-group__label--car" v-if="route.params.category === 'new'">
              Официальный дилер Lixiang в Москве
            </div>
          </div>
        </div>
        <div class="car__top-buttons grid__col-6" v-if="offer.is_active">
          <button @click="callback" class="button button--icon button--link">
            Обратный звонок
            <nuxt-icon class="icon" name="icon-callback"/>
          </button>
          <Button class="button button--action button--call">
            <nuxt-icon class="button__icon" name="icon-call"/>
          </Button>
        </div>
      </div>
      <div class="car__slider-wrap">
        <div class="grid grid--container">
          <OfferSlider>
            <template #slides>
              <SwiperSlide class="slider-car__item" v-for="(img, key) in offer.images" :key="key">
                <div class="slider-car__link"
                     @click.right.prevent
                     :data-src="img.medium_webp"
                     tabindex="0">
                  <img class="slider__car-img lazyload" :src="img.medium_webp" alt="">
                </div>
              </SwiperSlide>
            </template>
          </OfferSlider>
        </div>
      </div>
      <div class="grid grid--car grid--container grid__col-12">
        <OfferBuy/>
        <transition name="slide-fade">
          <OfferFixed v-if="showFixed"/>
        </transition>
        <OfferInfo/>
        <OfferComplectation v-if="isMobile" class="car__info-group--complectation"/>
        <OfferDescription v-if="offer.description && isMobile" class="car__info-group--description"/>
      </div>
      <div class="grid grid--container">

      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// import { SwiperSlide } from 'swiper/vue';
// import Benefits from '~/components/Benefits/index.vue';
import OfferSlider from '~/components/Offer/Slider.vue';
import OfferBuy from '~/components/Offer/Buy/index.vue';
import OfferFixed from '~/components/Offer/Fixed.vue';
import OfferInfo from '~/components/Offer/Info.vue';
import OfferComplectation from '~/components/Offer/Complectation.vue';
import { OfferQuery, OfferQueryVariables } from '~/types/graphql';
import { useOffers } from '~/store/offersStore';
import { useNuxtApp } from '#app';

const route = useRoute();
const { isMobile } = useDevice();
const offersStore = useOffers();
// const currentBenefitsType = computed(() => {
//   return 'credit';
// });

let showFixed = ref(false);
const offer = ref<OfferQuery | null>(null);

function callback() {
  console.log('callback');
}

provide('offer', offer);

const variables = computed<OfferQueryVariables>(() => {
  return {
    mark_slug: route.params.mark,
    folder_slug: route.params.folder,
    external_id: Number(route.params.offer),
    dateFormat: 'j F Y года.'
  };
});

async function getOffer() {
  offer.value = await offersStore.fetchOffer(variables.value);
}

const nuxtApp = useNuxtApp();
const { pending } = useAsyncData(route.params.offer, () => getOffer(), {
  getCachedData: (key: string) => nuxtApp.payload.data[key] || nuxtApp.static.data[key]
});

</script>