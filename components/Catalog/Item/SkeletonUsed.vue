<template>
  <CatalogItem>
    <template #slider>
      <div class="catalog__img">
        <Skeleton height="100%" width="100%"/>
      </div>
    </template>
    <template #heading>
      <Skeleton height="24px" width="100%"/>
    </template>
    <template #price>
      <Skeleton height="24px" width="80px"/>
    </template>
    <template #price-credit>
      <Skeleton height="24px" width="180px"/>
    </template>
    <template #tech>
      <Skeleton height="48px" width="100%"/>
    </template>
    <template #actions-button-secondary>
      <Skeleton height="48px" width="48px"/>
      <Skeleton height="48px" width="48px"/>
    </template>
    <template #main-button>
      <Skeleton height="48px" width="193px"/>
    </template>
    <template #stock>
      <div></div>
    </template>
  </CatalogItem>
</template>

<script setup lang="ts">

import CatalogItem from '~/components/Catalog/Item/index.vue';
</script>