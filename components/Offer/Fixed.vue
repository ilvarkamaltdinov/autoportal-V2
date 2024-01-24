<template>
  <div class="car__fixed-wrap">
    <div class="car__buy car__buy--fixed">
      <!--<div class="car__price-block">-->
      <!--	<div class="car__price">-->
      <!--		{{ offer.price | toCurrency }}-->
      <!--	</div>-->
      <!--	<tippy-question text="Цена актуальна при покупке в кредит"/>-->
      <!--	<div class="car__price-payment">-->
      <!--		В кредит от {{ offer.price | access_acredit }} / мес.-->
      <!--	</div>-->
      <!--</div>-->
      <div class="car__buy-block">
        <div class="car__actions-buttons">
          <ButtonFavorite />
<!--          <button-call :phone="offer.dealer.phone" @click="callback(offer)" />-->
        </div>
        <button @click.prevent="onCallback"
                class="button button--link">
          Обратный звонок
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function onCallback(){
  console.log('onCallback');
}
</script>