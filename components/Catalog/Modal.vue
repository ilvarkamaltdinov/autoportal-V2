<template>
  <div class="catalog__list grid grid--catalog">
    <VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" lazy @lazy-load="onLazyLoad" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
      <template v-slot:item="{ item, options }">
        <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
      </template>
    </VirtualScroller>
    <!--    <component :is="component"-->
    <!--               v-for="offer in offersList"-->
    <!--               :offer="offer"-->
    <!--               @choseClick="choseClick(offer)"-->
    <!--               :choose="true"-->
    <!--               :is-form="true"-->
    <!--               :key="offer.id"/>-->
  </div>
  <!--              <client-only>-->
  <!--                <infinite-loading :identifier="infiniteId" @infinite="getOffers"-->
  <!--                                  :throttle-limit="2500">-->
  <!--                  <div slot="spinner">-->
  <!--                    <div class="catalog__list grid grid&#45;&#45;catalog">-->
  <!--                      <component :is="skeleton"-->
  <!--                                 v-for="i in 4"-->
  <!--                                 :key="i" />-->
  <!--                    </div>-->
  <!--                  </div>-->
  <!--                  <div slot="no-more"></div>-->
  <!--                  <div slot="no-results"></div>-->
  <!--                </infinite-loading>-->
  <!--              </client-only>-->
</template>
<script setup lang="ts">
import CatalogItem from '~/components/Catalog/Item/index.vue';
import { VueEternalLoading, LoadAction } from '@ts-pro/vue-eternal-loading';
import { Offer, OffersQueryVariables } from '~/types/graphql';
import { useOffers } from '~/store/offersStore';

const offersStore = useOffers();
const currentPage = ref(1);
const lastPage = ref(1);
const offers = ref<Offer[]>([]);
const isLoading = ref(true);

const componentProps = inject('componentProps');
const select = inject('select');

const variables = computed<OffersQueryVariables>(() => {
  return {
    category: 'cars',
    mark_slug_array: [componentProps.value.mark.slug],
    folder_slug_array: [componentProps.value.folder.slug],
    generation_slug_array: [componentProps.value.generation.slug],
    limit: 4,
    page: currentPage.value,
    dateFormat: 'j F Y года.',
  };
});

const getOffers = async () => {
  const fetchedOffers = await offersStore.fetchOffers(variables.value);
  offers.value.push(...fetchedOffers.data);
  isLoading.value = false;
  lastPage.value = fetchedOffers.last_page;
};

async function load() {
  console.log('load');
  await getOffers();
  currentPage.value += 1;
}

// await load();

const lazyItems = ref(Array.from({ length: 10000 }));
const lazyLoading = ref(false);
const loadLazyTimeout = ref();
const onLazyLoad = (event) => {
  lazyLoading.value = true;

  if (loadLazyTimeout.value) {
    clearTimeout(loadLazyTimeout.value);
  }

  //imitate delay of a backend call
  loadLazyTimeout.value = setTimeout(() => {
    const { first, last } = event;
    const _lazyItems = [...lazyItems.value];

    for (let i = first; i < last; i++) {
      _lazyItems[i] = `Item #${i}`;
    }

    lazyItems.value = _lazyItems;
    lazyLoading.value = false;

  }, Math.random() * 1000 + 250);
};
</script>