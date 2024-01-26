<template>
  <div ref="catalog">
    <div class="catalog__list grid grid--catalog" v-if="pending">
      <CatalogItem v-for="i in 8" :key="i">
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
    <div v-else class="">
      <!--      todo fix total records and empty class-->
      <DataView :first="currentPage * 8" dataKey="external_id" :paginator="true" :value="offers" :rows="8" :totalRecords="99999" lazy
                @page="paginatorClick" :pageLinkSize="7" paginatorTemplate="PrevPageLink PageLinks NextPageLink">
        <template #header>
          <Sort v-model:view="currentView" />
        </template>
        <template #list="{items: offers}">
          <div class="catalog__list grid grid--catalog">
            <CatalogItem :view="currentView === 's' ? 'short' : 'long'" v-for="offer in offers" :key="offer.external_id" :offer="offer"/>
          </div>
          <div class="grid__col-8">
            <Button class="button button--link button--more"
                    @click="paginatorClick({ page: currentPage + 1 })">
              Далее
            </Button>
          </div>
        </template>
      </DataView>
      <!--      <CatalogItem view="short" v-for="offer in offers" :key="offer.external_id" :offer="offer"/>-->
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
  </div>
</template>

<script setup lang="ts">
import CatalogItem from '~/components/Catalog/Item/index.vue';
import { useOffers } from '~/store/offersStore';
import { Offer, OffersQueryVariables } from '~/types/graphql';
import type { DataViewPageEvent } from 'primevue/dataview';
import Sort from '~/components/Filters/Sort.vue';
import { useRoute } from '#imports';

//todo add parse from query
const offersStore = useOffers();
const currentPage = ref(1);
const lastPage = ref(1);
const offers = ref<Offer[]>([]);

const { query } = useRoute();
currentPage.value = Number(query.page || 1);

const currentView = ref('s');

const variables = computed<OffersQueryVariables>(() => {
  return {
    category: 'cars',
    mark_slug_array: [],
    folder_slug_array: [],
    generation_slug_array: [],
    limit: 8,
    page: currentPage.value,
    dateFormat: 'j F Y года.',
  };
});

async function paginatorClick({ page }: DataViewPageEvent) {
  currentPage.value = ++page;
  useRouter().push({ query: { page: page } });
  await refresh();
  // await getOffers();
}

async function getOffers() {
  console.log(currentPage.value);
  const fetchedOffers = await offersStore.fetchOffers(variables.value);
  offers.value = fetchedOffers.data;
  lastPage.value = fetchedOffers.last_page;
}

const { pending, refresh } = useAsyncData('offerCategory', () => getOffers());
</script>