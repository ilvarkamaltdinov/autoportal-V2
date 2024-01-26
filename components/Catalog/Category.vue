<template>
  <div ref="catalog">
    <div class="catalog__list grid grid--catalog" v-if="true">
      <CatalogItem v-for="i in 6" :key="i">
        <template #slider>
          <div class="catalog__img">
            <Skeleton height="100%" width="100%"/>
          </div>
        </template>
        <template #heading>
          <Skeleton height="24px" width="100%"/>
        </template>
        <template #price>
          <Skeleton height="24px" width="80px"/>
        </template>
        <template #price-credit>
          <Skeleton height="24px" width="180px"/>
        </template>
        <template #tech>
          <Skeleton height="48px" width="100%"/>
        </template>
        <template #actions-button-secondary>
          <Skeleton height="48px" width="48px"/>
          <Skeleton height="48px" width="48px"/>
        </template>
        <template #main-button>
          <Skeleton height="48px" width="193px"/>
        </template>
        <template #stock>
          <div></div>
        </template>
      </CatalogItem>
    </div>
    <div v-else class="catalog__list grid grid--catalog">
      <CatalogItem view="short" v-for="offer in offers" :key="offer.external_id" :offer="offer"/>
      <div class="grid__col-8">
        <Button class="button button--link button--more"
                @click="paginationClick">
          Далее
        </Button>
      </div>
      <div v-if="offers.length === 0" class="grid__col-8">
        <div class="catalog__no-cars">
          <h2 class="heading heading--h2">Автомобили не найдены</h2>
          <div class="catalog__no-cars-text">
            Попробуйте изменить параметры поиска или обратите внимание на похожие
            модели:
          </div>
        </div>
      </div>
    </div>
    <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
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

import { useOffers } from '~/store/offersStore';
import { Offer, OffersQueryVariables } from '~/types/graphql';
import CatalogItemImage from '~/components/Catalog/Item/Image.vue';

const offersStore = useOffers();
const currentPage = ref(1);
const lastPage = ref(1);
const offers = ref<Offer[]>([]);

const variables = computed<OffersQueryVariables>(() => {
  return {
    category: 'cars',
    mark_slug_array: [],
    folder_slug_array: [],
    generation_slug_array: [],
    limit: 3,
    page: currentPage.value,
    dateFormat: 'j F Y года.',
  };
});

async function getOffers() {
  const fetchedOffers = await offersStore.fetchOffers(variables.value);
  offers.value = fetchedOffers.data;
  lastPage.value = fetchedOffers.last_page;
}

const { pending } = useAsyncData('offerCategory', () => getOffers());

function paginationClick() {
  console.log('paginationClick');
}
</script>