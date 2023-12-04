<template>
  <div class="catalog__info">
    <div class="catalog__title-wrap">
      <h3 class="catalog__heading">
        <a href="/" class="catalog__title-link">
          <span class="catalog__title"> Hyundai Sonata <span>, {{ engineVolume(2) }} </span></span> <span
            class="catalog__year">2007</span>
        </a>
      </h3>
    </div>
    <div class="catalog__price-wrap">
      <div class="catalog__price">{{ numberFormat(300000) }} ₽</div>
      <div class="catalog__price-old">{{ numberFormat(400000) }} ₽</div>
      <div class="catalog__credit-price">{{ creditPrice(300000) }}₽ / мес. без взноса</div>
      <div>
        <div class="stock stock--true" data-tippy-directive="" tabindex="0">
          В наличии
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {creditPrice, engineVolume, numberFormat} from '~/helpers/filters';
</script>
