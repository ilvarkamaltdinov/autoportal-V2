<template>
  <div class="car__buy-wrap">
    <div class="car__buy">
      <div class="car__price-block">
        <div class="car__price">
          1 000 000 ₽  <!--offer.price-->
        </div>
        <TippyQuestion text="Цена актуальна при покупке в кредит"/>
        <div class="car__price-old" v-if="$route.params.category !== 'europe'">
          1 400 000 ₽  <!--offer.price_old-->
        </div>
        <div class="car__price-payment">
          12 000 ₽ / мес. без взноса
        </div>
      </div>
      <!--      TODO offer.is_active-->
      <div v-if="true" class="car__buy-block">
        <div v-if="route.params.category === 'europe'" class="car__actions-buttons">
          <ButtonAutoteka v-if="route.params.category !== 'europe'" @click="onAutoteka"/>
          <!--      TODO offer.is_active-->
          <ButtonFavorite v-if="true"/>
          <!--<button-compare />-->
        </div>
        <button v-if="$route.params.category !== 'europe'" @click.prevent="onInstallmentClick"
                class="button button--credit-pay button--link">
          Рассрочка
        </button>
        <button v-if="showTradeIn" @click.prevent="onExchange" class="button button--trade-in button--link">
          Trade-In
        </button>
        <button v-if="$route.params.category === 'europe'" @click.prevent="onCredit"
                class="button button--credit button--credit-europe">
          Рассчитать кредит
        </button>
        <button v-else @click.prevent="onCredit" class="button button--credit">
          Купить в кредит
        </button>
      </div>
      <div v-if="route.params.category !== 'europe'" class="car__actions-block">
        <Rating v-if="!isNew" :max="5" :rating="4"/>
        <!--        <rating-car v-if="!isNew" v-tippy="{-->
        <!--          content: `<div class='tippy__text'>Рейтинг автомобиля</div>`,-->
        <!--          animation: 'scale',-->
        <!--          arrow: true,-->
        <!--        }" @click="ratingClick" :rating="offer.rating" />-->

        <div class="car__rating-new" v-if="isNew">
          <Rating :max="5" :rating="4"/>
          <!--          <rating-car v-tippy="{-->
          <!--            content: `<div class='tippy__text'>Рейтинг автомобиля</div>`,-->
          <!--            animation: 'scale',-->
          <!--            arrow: true,-->
          <!--          }" :rating="{ rating_total: 5 }"/>-->

          <span class="car__rating-new-label">
            Новый <span>автомобиль</span>
          </span>
        </div>

        <div class="car__actions-buttons">
          <ButtonAutoteka v-if="route.params.category !== 'europe' && !isNew" @click="onAutoteka"/>
          <!--        TODO    offer.is_active-->
          <button-favorite v-if="true"/>
          <!--<button-compare />-->
<!--          <button-call v-if="offer.is_active && offer.dealer.phone" :phone="offer.dealer.phone"-->
<!--                       @click="callback(offer)"/>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TippyQuestion from '~/components/Tippy/TippyQuestion.vue';
import ButtonFavorite from '~/components/Button/ButtonFavorite.vue';
import Rating from '~/components/Rating/Rating.vue';


const route = useRoute();
const { isMobile } = useDevice();

function onCredit() {
  console.log('onCredit');
}

function onExchange() {
  console.log('onExchange');
}

function onInstallmentClick() {
  console.log('onInstallmentClick');
}

function onAutoteka() {
  console.log('onAutoteka');
}

const showTradeIn = computed(() => {
  if (route.params.category === 'europe') {
    return !isMobile;
  } else {
    return true;
  }
});

const isNew = computed(() => {
  // return this.offer.run <= 100 && this.offer.owner.number <= 1;
  return true;
});

</script>