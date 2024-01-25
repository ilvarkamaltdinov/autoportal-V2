<template>
  <main class="page-main">
    <div class="grid ">
      <Crumbs/>
    </div>
    <div class="page-main__car car">
      <div class="grid grid--container" v-if="isMobile">
        <!--        <Benefits :type="currentBenefitsType" class="car__benefits"/>-->
      </div>
      <div class="grid grid--container">
        <div class="heading-group heading-group--h1 grid__col-6">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1 heading--h1-car"
                v-html="'Mercedes-Benz C-Класс, 1.8, АКПП, 120 994 км'"></h1>
            <div class="heading-group__label heading-group__label--car">
              <div class="heading-group__year">
                2018
              </div>
              <span class="heading-group__generation">
                II (F20/F21) Рестайлинг 2
              </span>
              <div class="vin__wrapper-car">
                <div class="car__vin vin">
                  <nuxt-icon name="icon-check"/>
                  VIN
                </div>
                <div> WDD20404*1A****57</div>
              </div>
            </div>
          </div>
        </div>
        <div class="car__top-buttons grid__col-6" v-if="true"> <!--        TODO  v-if="offer.is_active"-->
          <button @click="callback" class="button button--icon button--link">
            Обратный звонок
            <nuxt-icon class="icon" name="icon-callback"/>
          </button>
          <!--          <button-call-modal @click="callback" v-if="offer.dealer.phone" :phone="offer.dealer.phone"/>-->
        </div>
      </div>
      <div class="car__slider-wrap">
        <div class="grid grid--container">
          <OfferSlider>
            <template #slides>
              <SwiperSlide class="slider-car__item" v-for="slide in 10" :key="slide">
                <div class="slider-car__link"
                     @click.right.prevent
                     :data-fancybox="`/img/mock/offer-card-img-${slide}.webp`"
                     data-src="/img/mock/offer-card-img-${img}.webp`"
                     tabindex="0">
                  <img class="slider__car-img lazyload" :src="`/img/mock/offer-card-img-${slide}.webp`" alt="">
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
        <OfferDescription v-if="isMobile" class="car__info-group--description"/>
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
import OfferBuy from '~/components/Offer/Buy.vue';
import OfferFixed from '~/components/Offer/Fixed.vue';
import OfferInfo from '~/components/Offer/Info.vue';
import OfferComplectation from '~/components/Offer/Complectation.vue';

const { isMobile } = useDevice();

// const currentBenefitsType = computed(() => {
//   return 'credit';
// });

let showFixed = ref(false);

function callback() {
  console.log('callback');
}
</script>