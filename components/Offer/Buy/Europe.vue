<template>
  <div class="car__buy">
    <div class="car__price-block">
      <div class="car__price">
        {{ numberFormat(offer.price) }} ₽
      </div>
      <TippyQuestion text="Цена актуальна при покупке в кредит"/>
      <div class="car__price-payment">
        {{ creditPrice(offer.price) }} ₽ / мес. без взноса
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
        «{{ offer.dealer.title }}»
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

const offer = inject('offer');
const { isMobile } = useDevice();

</script>