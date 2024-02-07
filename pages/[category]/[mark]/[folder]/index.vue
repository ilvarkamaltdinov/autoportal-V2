<template>
  <component :is="currentComponent"/>
</template>

<script setup lang="ts">
import CatalogPage from '~/components/Catalog/Page.vue';
import CatalogFolder from '~/components/Catalog/New/Folder.vue';

const route = useRoute();

const currentComponent = computed(() => {
  return route.params.category === 'new' ? CatalogFolder : CatalogPage;
});
//TODO возможные урлы -> слаг марки/слаг подборки, подборка может быть только с 'used'

</script>