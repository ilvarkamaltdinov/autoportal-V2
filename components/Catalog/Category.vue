<template>
  <div ref="catalog">
    <div class="catalog__list grid grid--catalog" v-if="pending">
      <CatalogItemSkeletonUsed v-for="i in 8" :key="i"/>
    </div>
    <div v-else class="">
      <!--      todo fix total records and empty class-->
      <DataView :first="currentPage * 8" dataKey="external_id" :paginator="true" :value="offers" :rows="8" :totalRecords="99999" lazy
                @page="paginatorClick" :pageLinkSize="7" paginatorTemplate="PrevPageLink PageLinks NextPageLink">
        <template #header>
          <Sort v-model:view="currentView" v-model:sort="currentSort" @update:sort="changeSort" />
        </template>
        <template #list="{items: offers}">
          <div class="catalog__list grid grid--catalog">
            <CatalogItem :view="currentView === 's' ? 'short' : 'long'" v-for="offer in offers" :key="offer.external_id" :offer="offer"/>
          </div>
          <div class="grid__col-8">
            <Button class="button button--link button--more"
                    @click="paginatorClick({ page: currentPage })">
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
import { useOffers } from '~/store/offersStore';
import { Offer, OffersQueryVariables } from '~/types/graphql';
import type { DataViewPageEvent } from 'primevue/dataview';
import Sort from '~/components/Filters/Sort.vue';
import { useRoute } from '#imports';
import type { SortOption } from '~/components/Filters/Sort.vue';

//todo add parse from query upd: (че написал?)
const router = useRouter();
const offersStore = useOffers();
const { query: { page: pageQuery, sort: sortQuery } } = useRoute();
const currentPage = ref(1);
const lastPage = ref(1);
const offers = ref<Offer[]>([]);

currentPage.value = Number(pageQuery || 1);

const currentView = ref('s');
const currentSort = ref<SortOption['slug']>('price|asc');
currentSort.value = (sortQuery && decodeURI(sortQuery)) || 'price|asc';

const variables = computed<Partial<OffersQueryVariables>>(() => {
  return {
    category: 'cars',
    mark_slug_array: [],
    folder_slug_array: [],
    generation_slug_array: [],
    limit: 8,
    page: currentPage.value,
    dateFormat: 'j F Y года.',
    sort: currentSort.value,
  };
});

function changeSort(){
  const query = useRoute().query;
  const queryReplaced = { ...query, sort: encodeURI(currentSort.value) };
  router.replace({ query: queryReplaced });
  refresh();
}

async function paginatorClick({ page }: Pick<DataViewPageEvent, 'page'>) {
  currentPage.value = ++page;
  const query = useRoute().query;
  const queryReplaced = { ...query, page };
  router.replace({ query: queryReplaced });
  await refresh();
  // await getOffers();
}

async function getOffers() {
  const fetchedOffers = await offersStore.fetchOffers(variables.value);
  offers.value = fetchedOffers.data;
  lastPage.value = fetchedOffers.last_page;
}

const { pending, refresh } = useAsyncData('offerCategory', () => getOffers());
</script>