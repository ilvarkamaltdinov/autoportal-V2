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
      <CatalogItem view="short">
        <template #heading>
          Дефолтная карточка
        </template>
      </CatalogItem>
      <CatalogItem view="short">
        <template #slider>
          <img src="~/assets/img/repair@1x.png" alt="">
        </template>
        <template #heading>
          Карточка со слотами
        </template>
        <template #price>
          test price
        </template>
        <template #price-old>
          test price old
        </template>
        <template #price-credit>
          test price-credit
        </template>
        <template #stock>
          <div class="stock stock--true" data-tippy-directive="" tabindex="0">
            stock
          </div>
        </template>
        <template #tech>
          <Rating :max="5" :rating="4"/>
          <ul class="catalog__tech-list">
            <li class="catalog__tech-item">
              test tech
            </li>
            <li class="catalog__tech-item">
              test tech
            </li>
            <li class="catalog__tech-item">
              test tech
            </li>
            <li class="catalog__tech-item">
              test tech
            </li>
          </ul>
        </template>
        <template #actions-button-left>
          <button class="button button--action button--call">
            1
          </button>
        </template>
        <template #actions-button-right>
          <button class="button button--action button--call">
            2
          </button>
        </template>
        <template #main-button-left>
          <button class="button button--credit">
            main-button-1
          </button>
        </template>
        <template #main-button-right>
          <button class="button button--credit">
            main-button-2
          </button>
        </template>
      </CatalogItem>
      <CatalogItem view="long">
        <template #heading>
          Длинная карточка
        </template>
      </CatalogItem>
      <div class="grid__col-8">
        <button class="button button--link button--more"
                @click="paginationClick">
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

function paginationClick() {
  console.log('paginationClick');
}
</script>