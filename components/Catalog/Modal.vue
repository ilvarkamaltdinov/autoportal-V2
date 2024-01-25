<template>
  <div class="catalog__list grid grid--catalog">
    <CatalogItem v-for="offer in offers" :key="offer.id" :offer="offer">
      <template #main-button>
        <Button class="button button--credit" @click="$emit('select', 'car', offer)">Выбрать</Button>
      </template>
    </CatalogItem>
    <VueEternalLoading v-if="currentPage <= lastPage" :load="load">
      <template #loading>
        <div class="my-loading">
          Trying to load content...
        </div>
      </template>
    </VueEternalLoading>
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
  lastPage.value = fetchedOffers.last_page;
};

async function load({ loaded }: LoadAction) {
  await getOffers();
  currentPage.value += 1;
  loaded();
}

</script>