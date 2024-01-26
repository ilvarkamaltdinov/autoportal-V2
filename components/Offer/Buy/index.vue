<template>
  <div class="car__buy-wrap">
    <component @on-credit="onCredit"
               @on-exchange="onExchange"
               @on-installment="onInstallment"
               @on-autoteka="onAutoteka"
               @about-dealer="aboutDealer"
               :is="currentBuy"/>
    <OfferTerms v-if="!isMobile" class="car__info-group--options"/>
  </div>

</template>
<script setup lang="ts">
import Default from '~/components/Offer/Buy/Default.vue';
import Europe from '~/components/Offer/Buy/Europe.vue';
import New from '~/components/Offer/Buy/New.vue';
import OfferTerms from '~/components/Offer/Terms.vue';

const route = useRoute();
const { isMobile } = useDevice();
const currentBuy = computed(() => {
  if (route.params.category === 'new') {
    return New;
  }
  if (route.params.category === 'europe') {
    return Europe;
  }
  return Default;
});


function onCredit() {
  console.log('onCredit');
}

function onExchange() {
  console.log('onExchange');
}

function onInstallment() {
  console.log('onInstallment');
}

function onAutoteka() {
  console.log('onAutoteka');
}

function aboutDealer() {
  console.log('aboutDealer');
}

</script>

