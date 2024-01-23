<template>
  <main class="page-main">
    <div class="grid ">
      <Crumbs/>
    </div>
    <div class="grid grid--container">
      <section class="page-main__catalog catalog grid catalog--used">
<!--        <Benefits :type="currentBenefitsType" class="benefits&#45;&#45;catalog"/>-->
        <div class="heading-group heading-group--catalog heading-group--h1 grid__col-12">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1">pageTitle</h1>
          </div>
        </div>
        <component :is="currentList"/>
        <div class="grid__col-4">
          <section class="catalog__filter catalog__filter--aside">
            <div class="heading-group heading-group--filter">
              <div class="heading-group__wrap">
                <h2 class="heading heading--h2">Фильтр</h2>
                <!--        <span class="heading-group__label">-->
                <!--					{{ filteredTotal | toCurrencyValue }}-->
                <!--					{{ declension({count: filteredTotal, one: 'автомобиль', few: 'автомобиля', many: 'автомобилей'}) }}-->
                <!--					в наличии-->
                <!--				</span>-->
              </div>
            </div>
            <div class="filter filter--aside">
              <FiltersList/>
            </div>
          </section>
        </div>
        <div class="grid__col-8" ref="catalog">
          <FiltersSort/>
          <CatalogCategory/>
        </div>
      </section>
    </div>
    <div class="grid grid--container">
      <!--      <text-used v-if="$route.params.category === 'used'"/>-->
    </div>
  </main>
</template>

<script setup lang="ts">

import Benefits from '~/components/Benefits/index.vue';
import FiltersSort from '~/components/Filters/Sort.vue';
import FiltersList from '~/components/Filters/List.vue';
import CatalogCategory from '~/components/Catalog/Category.vue';
import ListMarks from '~/components/List/Marks.vue';
import Crumbs from '~/components/Crumbs/index.vue';

const currentList = computed(() => {
  // TODO либо марки либо модели либо поколения
  return ListMarks;
});
const currentBenefitsType = computed(() => {
  return 'credit';
});

</script>