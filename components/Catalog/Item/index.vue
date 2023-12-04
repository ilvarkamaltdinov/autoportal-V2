<template>
  <article class="catalog__item catalog__item--vertical ">
    <CatalogItemImage/>
    <CatalogItemInfo/>
    <CatalogItemTech/>
    <CatalogItemButtons/>
  </article>
</template>
<script setup lang="ts">
import CatalogItemImage from '~/components/Catalog/Item/Image.vue';
import CatalogItemInfo from '~/components/Catalog/Item/Info.vue';
import CatalogItemTech from '~/components/Catalog/Item/Tech.vue';
import CatalogItemButtons from '~/components/Catalog/Item/Buttons.vue';
</script>
