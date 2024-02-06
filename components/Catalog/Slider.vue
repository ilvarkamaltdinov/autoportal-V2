<template>
  <h2 class="heading heading--h2">{{ title }}</h2>
  <div class="tabs" v-if="hasTabs">
    <ul class="tabs__list"
        role="tablist">
      <li role="presentation"
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{'tabs__item--active':tab.slug === set}"
          class="tabs__item">
        <button @click="onTabClick(tab)"
                class="tabs__link"
                role="tab"
                data-toggle="tab">
          {{ tab.title }}
        </button>
      </li>
    </ul>
  </div>
  <div class="catalog__list grid" v-if="pending">
    <CatalogItemSkeletonUsed v-for="i in 3" :key="i"/>
  </div>
  <div class="catalog__list" v-else>
    <Swiper
        :loop="false"
        :slides-per-view="3"
        :space-between="24"
        class="swiper swiper--catalog">
      <SwiperSlide class="slider-car__item" v-for="offer in offers" :key="offer.external_id">
        <CatalogItem slide :offer="offer"/>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup lang="ts">
import CatalogItem from '~/components/Catalog/Item/index.vue';
import CatalogItemSkeletonUsed from '~/components/Catalog/Item/SkeletonUsed.vue';
import { useOffers } from '~/store/offersStore';
import { Offer, OffersQueryVariables } from '~/types/graphql';
import { UnwrapRef } from 'vue';
import { Swiper } from 'swiper/vue';

defineProps<{
  hasTabs?: boolean;
  title: string
}>();


const tabs = [
  {
    title: 'Последние поступления',
    slug: 'last-arrival'
  },
  {
    title: 'Свежие',
    slug: 'fresh'
  },
  {
    title: 'До 500 000 ₽',
    slug: 'before-500'
  },
  // {
  // 	title: "Топ-выгода",
  // 	slug: 'test',
  // },
  {
    title: '7-местные',
    slug: 'seats-7'
  },
  {
    title: 'До 2 владельцев',
    slug: 'owners-2'
  },
  {
    title: 'До 5 лет',
    slug: 'young'
  },
  {
    title: 'Седаны',
    slug: 'sedan'
  },
  {
    title: 'Премиум',
    slug: 'premium'
  }
  // {
  // 	title: "Внедорожники",
  // 	slug: 'allroad'
  // }
];

const set = ref('last-arrival');

async function onTabClick(tab: UnwrapRef<typeof tabs[number]>) {
  set.value = tab.slug;
  await getOffers();
}

const offersStore = useOffers();
const offers = ref<Offer[]>([]);

const variables = computed<OffersQueryVariables>(() => {
  return {
    limit: 10,
    page: 0,
    set: set.value,
    dateFormat: 'j F Y года.',
    sort: set.value === 'best' ? 'communications_count|desc' : 'price|asc'
  };
});

async function getOffers() {
  const fetchedOffers = await offersStore.fetchOffers(variables.value);
  offers.value = fetchedOffers.data;
}

const { pending } = useAsyncData('offerCategory', () => getOffers());


</script>