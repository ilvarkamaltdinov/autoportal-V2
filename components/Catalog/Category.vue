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
      <div class="grid__col-8">
        <button class="button button--link button--more"
                @click="paginationClick('button')">
          Далее
        </button>
      </div>
    </div>
    <!--    TODO новый paginate-->
    <!--    <client-only>-->
    <!--      <Paginate-->
    <!--          v-if="last_page > 1"-->
    <!--          :value="currentPagination"-->
    <!--          prev-class="prev"-->
    <!--          next-class="next"-->
    <!--          :page-count="last_page"-->
    <!--          :click-handler="paginateClick"-->
    <!--          :prev-text="'Назад'"-->
    <!--          :next-text="'Вперед'"-->
    <!--          :container-class="'pagination'">-->
    <!--      </Paginate>-->
    <!--    </client-only>-->
    <!--    TODO старый paginate-->
    <!--    <client-only>-->
    <!--      -->
    <!--      <pagination @click="paginationClick('pagination')" :active-button="Number(offers.current_page)"-->
    <!--                  v-if="offers"-->
    <!--                  :offers="offers"/>-->
    <!--    </client-only>-->
  </div>
</template>

<script setup lang="ts">

import CatalogItem from '~/components/Catalog/Item/index.vue';
</script>