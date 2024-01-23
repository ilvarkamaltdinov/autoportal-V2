<template>
  <component :is="currentComponent"/>
</template>

<script setup lang="ts">

import Offer from '~/components/Offer/index.vue';
import CatalogPage from '~/components/Catalog/Page.vue';
//TODO возможные урлы ->
//TODO слаг поколения/
//TODO слаг типа двигателя/
//TODO слаг типа кузова/
//TODO год/
//TODO id офера, если id офера тогда показываем стр офера

const route = useRoute();

const currentComponent = computed(() => {
  if (Number.isInteger(Number(route.params.offer))) {
    return Offer;
  } else {
    return CatalogPage;
  }
});


</script>