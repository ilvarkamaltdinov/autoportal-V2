<template>
  <div class="car__buy">
    <div class="car__price-block">
      <div class="car__price">
        {{numberFormat(offer.price)}} ₽
      </div>
      <TippyQuestion text="Цена актуальна при покупке в кредит"/>
      <div class="car__price-old">
        1 400 000 ₽  <!--offer.price_old-->
      </div>
      <div class="car__price-payment">
       {{creditPrice(offer.price)}} ₽ / мес. без взноса
      </div>
    </div>
    <div v-if="offer.is_active" class="car__buy-block">
      <button @click.prevent="$emit('onCredit')" class="button button--credit">
        Купить в кредит
      </button>
      <button @click.prevent="$emit('onExchange')" class="button button--trade-in button--link">
        Trade-In
      </button>
      <button v-if="!isMobile" @click.prevent="$emit('onInstallment')"
              class="button button--credit-pay button--link">
        Рассрочка
      </button>
    </div>
    <div class="car__actions-block">
      <Rating :max="5" :rating="offer.rating.rating_total"/>
      <div class="car__actions-buttons">
        <ButtonAutoteka @click="$emit('onAutoteka')"/>
        <!--        TODO    offer.is_active-->
        <button-favorite v-if="true"/>
        <!--<button-compare />-->
        <!--          <button-call v-if="offer.is_active && offer.dealer.phone" :phone="offer.dealer.phone"-->
        <!--                       @click="callback(offer)"/>-->
      </div>
    </div>
    <div class="car__stock">
      В наличии в автоцентре
      <a href="#" @click.prevent="$emit('aboutDealer')" class="car__stock-dealer">
        «{{offer.dealer.title}}»
      </a>
      <div class="car__stock-promo">
        {{ offer.dealer.address }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TippyQuestion from '~/components/Tippy/TippyQuestion.vue';
import ButtonFavorite from '~/components/Button/ButtonFavorite.vue';
import ButtonAutoteka from '~/components/Button/ButtonAutoteka.vue';
import Rating from '~/components/Rating/Rating.vue';
import { numberFormat, creditPrice } from '~/utils/filters';

const offer = inject('offer');
const { isMobile } = useDevice();

</script>