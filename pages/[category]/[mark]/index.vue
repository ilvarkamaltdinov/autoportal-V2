<template>
  <main class="page-main">
    <div class="grid ">
      <Crumbs/>
    </div>
    <div class="grid grid--container">
      <section class="page-main__catalog catalog grid catalog--used">
        <Benefits type="credit" class="benefits--catalog"/>
        <div class="heading-group heading-group--catalog heading-group--h1 grid__col-12">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1">pageTitle</h1>
          </div>
        </div>
        <ListFolders/>
        <div class="grid__col-4">
          <FiltersFilter/>
        </div>
        <div class="grid__col-8" ref="catalog">
          <FiltersSort/>
          <CatalogUsed/>
        </div>
      </section>
    </div>
    <div class="grid grid--container">
      <!--      <text-used v-if="$route.params.category === 'used'"/>-->
    </div>
  </main>
</template>

<script setup lang="ts">
import Crumbs from '~/components/Crumbs/index.vue';
import CatalogUsed from '~/components/Catalog/Used.vue';
import ListFolders from '~/components/List/Folders.vue';
import Benefits from '~/components/Benefits/index.vue';
import FiltersFilter from '~/components/Filters/Filter.vue';
import FiltersSort from '~/components/Filters/Sort.vue';
</script>