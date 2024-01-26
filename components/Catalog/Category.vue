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
          <nuxt-link to="/used/mark/model/123" class="catalog__title-link">
            Б/У карточка
          </nuxt-link>
        </template>
      </CatalogItem>
      <CatalogItem view="short">
        <template #heading>
          <nuxt-link to="/new/mark/model/123" class="catalog__title-link">
            Карточка нового авто
          </nuxt-link>
        </template>
      </CatalogItem>
      <CatalogItem view="short">
        <template #heading>
          Дефолтная карточка
        </template>
      </CatalogItem>
      <CatalogItem view="short">
        <template #slider>
          <div class="catalog__img">
            <img src="~/assets/img/repair@1x.png" alt="">
          </div>
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
          <Button class="button button--action button--call">
            1
          </Button>
        </template>
        <template #actions-button-right>
          <Button class="button button--action button--call">
            2
          </Button>
        </template>
        <template #main-button>
          <Button class="button button--credit">
            main-button
          </Button>
        </template>
        <template #secondary-button>
          <Button class="button button--credit">
            secondary-button
          </Button>
        </template>
      </CatalogItem>
      <CatalogItem view="long">
        <template #heading>
          Длинная карточка
        </template>
      </CatalogItem>
      <div class="grid__col-8">
        <Button class="button button--link button--more"
                @click="paginationClick">
          Далее
        </Button>
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