<template>
  <main class="page-main">
    <div class="grid__col-12 grid dealers dealers--catalog">
      <div class="heading-group heading-group--catalog heading-group--h1 grid__col-12">
        <div class="heading-group__wrap">
          <h1 class="heading heading--h1">{{ title }}</h1>
        </div>
      </div>
      <Card v-for="{title, short_description, id, rating, images, slug, site} in currentDealers"
            :key="id" class="grid__col-6 dealers__item--catalog">
        <template #header>
          {{ title }}
        </template>
        <template #short-description>
          {{ short_description }}
        </template>
        <template #right-corner>
          <Rating v-tippy="{
            content:`<div class='tippy__text'>Рейтинг дилера</div>`,
            animation:'scale',
            arrow: true,
            }" :max="5" :rating="rating"/>
        </template>
        <template #image>
          <div class="dealers__item-img-wrap">
            <NuxtImg class="dealers__item-img" :src="filter.replaceApiUrl(images[0].medium)"/>
            <button @click="showMore(slug)"
                    class="button--show">
              Подробнее о дилере
            </button>
            <a class="button button--show button--show-link"
               v-if="site"
               :href="`${site}`"
               rel="nofollow"
               target="_blank">Сайт автоцентра </a>
          </div>
        </template>
      </Card>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useDealers } from '~/store/dealers';
import { storeToRefs } from 'pinia';
import Card from '~/components/Dealer/Card.vue';

const dealersStore = useDealers();
dealersStore.fetchDealers();
const { dealers } = storeToRefs(dealersStore);
const currentDealers = computed(() => {
  return dealers.value.filter(dealer => dealer.slug !== 'komm-auto');
});
</script>
