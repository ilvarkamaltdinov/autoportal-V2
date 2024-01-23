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
      <div class="car__buy-block">
        <div v-if="$route.params.category === 'europe'" class="car__actions-buttons">
<!--          <ButtonFavorite/>-->
          <!--          <button-favorite v-if="offer.is_active" :active="likesArray.some((id) => id === String(offer.external_id))"-->
          <!--                           @click="like()" />-->
          <!--          &lt;!&ndash;<button-compare />&ndash;&gt;-->
          <!--          <button-call v-if="offer.is_active && offer.dealer.phone" :phone="offer.dealer.phone"-->
          <!--                       @click="callback(offer)" />-->
        </div>
        <!--        <button v-if="$route.params.category !== 'europe'" @click.prevent="installmentClick(offer)"-->
        <!--                class="button button&#45;&#45;credit-pay button&#45;&#45;link">-->
        <!--          Рассрочка-->
        <!--        </button>-->
        <!--        <button v-if="showTradeIn" @click.prevent="tradeInClick(offer)" class="button button&#45;&#45;trade-in button&#45;&#45;link">-->
        <!--          Trade-In-->
        <!--        </button>-->
        <!--        <button v-if="$route.params.category === 'europe'" @click.prevent="creditClick(offer)"-->
        <!--                class="button button&#45;&#45;credit button&#45;&#45;credit-europe">-->
        <!--          Рассчитать кредит-->
        <!--        </button>-->
        <!--        <button v-else @click.prevent="creditClick(offer)" class="button button&#45;&#45;credit">-->
        <!--          Купить в кредит-->
        <!--        </button>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TippyQuestion from '~/components/Tippy/TippyQuestion.vue';
// import ButtonFavorite from '~/components/Button/';
</script>