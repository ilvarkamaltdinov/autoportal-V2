<template>
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
</template>

<script setup lang="ts">
import FiltersList from '~/components/Filters/List.vue';
</script>