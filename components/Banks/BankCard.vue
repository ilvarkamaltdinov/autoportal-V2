<template>
  <li class="featured__item" :class="bank.class">
    <nuxt-link :to="`/credit/${bank.slug}`"
               class="featured__link">
      <div class="featured__about">
        <h3 class="featured__title">{{ bank.name }}</h3>
        <div class="featured__text">от {{ bank.rate }} %</div>
      </div>
      <div class="featured__picture">
        <div class="glass featured__glass featured__glass--small"></div>
        <div class="glass featured__glass featured__glass--big"></div>
        <nuxt-img :src="`/img/featured/featured-${bank.image}@2x.png`" densities="1x 2x" format="webp"
                  class="featured__img lazyload"/>
      </div>
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
import {featuredBank} from '~/app/types/banks';

defineProps<{ bank: featuredBank }>();
</script>