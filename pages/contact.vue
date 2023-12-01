<template>
  <main class="page-main">
    <div class="grid">
<!--      <crumbs :crumbs="crumbs" />-->
    </div>
    <div class="grid grid--container">
        <section class="page-main__dealers dealers grid">
          <div class="heading-group heading-group--h1">
            <div class="heading-group__wrap">
              <h1 class="heading heading--h1">
                {{ title }}
                <span class="heading__promo"></span>
              </h1>
              <span class="heading-group__label">Партнеры carro</span>
            </div>
          </div>
          <Card v-for="dealer in dealers" :key="dealer.id" :dealer="dealer" />
        </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import {useDealers} from '~/store/dealers';
import {storeToRefs} from 'pinia';
import Card from '~/components/Dealer/Card.vue';

const dealersStore = useDealers();
dealersStore.fetchDealers();
const {dealers} = storeToRefs(dealersStore);
</script>
