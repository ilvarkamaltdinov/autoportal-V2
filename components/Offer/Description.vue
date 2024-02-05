<template>
  <div class="car__info-group car__info-group--options">
    <div class="heading-group">
      <div class="heading-group__wrap">
        <h2 class="heading heading--h2">
          Описание
        </h2>
        <span class="heading-group__label">pageTitle</span>
      </div>
    </div>
    <p class="text__p text__p--car-description" v-html="offer.description"></p>
  </div>
</template>

<script setup lang="ts">
const offer = inject('offer');
</script>