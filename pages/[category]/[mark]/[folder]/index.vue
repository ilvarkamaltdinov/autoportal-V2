<template>
  <component :is="currentComponent"/>
</template>

<script setup lang="ts">
import CatalogPage from '~/components/Catalog/Page.vue';
import Folder from '~/components/Folder/index.vue';

const route = useRoute();

const currentComponent = computed(() => {
  return route.params.category === 'new' ? Folder : CatalogPage;
});
//TODO возможные урлы -> слаг марки/слаг подборки, подборка может быть только с 'used'

</script>