<template>
  <div class="catalog__buttons">
    <div class="catalog__actions">
      <ButtonFavorite @click="onFavoriteClick" :active="isFavorite"/>
      <button class="button button--action button--call">
        <nuxt-icon class="button__icon" name="icon-call"/>
      </button>
    </div>
    <div>
      <button class="button button--credit">
        Купить в кредит
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import ButtonFavorite from '~/components/Button/ButtonFavorite.vue';

const isFavorite = ref<boolean>(false);

function onFavoriteClick() {
  isFavorite.value = !isFavorite.value;
}
</script>
