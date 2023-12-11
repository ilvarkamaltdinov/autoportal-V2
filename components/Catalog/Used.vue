<template>
  <div ref="catalog">
    <div class="catalog__list grid grid--catalog">
      <div class="grid__col-8">
        <div class="catalog__no-cars">
          <h2 class="heading heading--h2">Автомобили не найдены</h2>
          <div class="catalog__no-cars-text">
            Попробуйте изменить параметры поиска или обратите внимание на похожие
            модели:
          </div>
        </div>
      </div>
      <CatalogItem grid v-for="i in 6" :key="i"/>
<!--      <div class="grid__col-8">-->
<!--        <button-typical @click="paginationClick('button')"-->
<!--                        v-if="offers.has_more_pages"-->
<!--                        text="Далее"-->
<!--                        class="button&#45;&#45;link button&#45;&#45;more"/>-->
<!--      </div>-->
    </div>
    <!--    <client-only>-->
    <!--      <pagination @click="paginationClick('pagination')" :active-button="Number(offers.current_page)"-->
    <!--                  v-if="offers"-->
    <!--                  :offers="offers" />-->
    <!--    </client-only>-->
  </div>
</template>

<script setup lang="ts">
import CatalogItem from '~/components/Catalog/Item/index.vue';
</script>