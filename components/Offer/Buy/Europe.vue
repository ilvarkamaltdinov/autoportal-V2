<template>
  <div class="car__buy">
    <div class="car__price-block">
      <div class="car__price">
        1 000 000 ₽  <!--offer.price-->
      </div>
      <TippyQuestion text="Цена актуальна при покупке в кредит"/>
      <div class="car__price-payment">
        12 000 ₽ / мес. без взноса
      </div>
    </div>
    <!--      TODO offer.is_active-->
    <div v-if="true" class="car__buy-block">
      <button @click.prevent="$emit('onCredit')"
              class="button button--credit button--credit-europe">
        Рассчитать кредит
      </button>
      <button v-if="!isMobile" @click.prevent="$emit('onExchange')" class="button button--trade-in button--link">
        Trade-In
      </button>
      <div class="car__actions-buttons">
        <!--      TODO offer.is_active-->
        <ButtonFavorite v-if="true"/>
        <!--<button-compare />-->
      </div>


    </div>
    <div class="car__stock">
      Под заказ в автоцентре
      <a href="#" @click.prevent="$emit('aboutDealer')" class="car__stock-dealer">
        «PRIME Премиум»
      </a>
      <div class="car__stock-promo">
        г. Москва, Варшавское шоссе, дом 170 Г, строение 3
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TippyQuestion from '~/components/Tippy/TippyQuestion.vue';
import ButtonFavorite from '~/components/Button/ButtonFavorite.vue';

const { isMobile } = useDevice();


</script>