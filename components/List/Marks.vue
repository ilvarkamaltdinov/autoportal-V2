<template>
  <div class="grid__col-12">
    <div class="catalog__makes makes">
      <ul class="makes__list makes__list--all makes__list--all-modal">
        <li class="makes__item" :key="mark.id" v-for="mark in marksList">
          <nuxt-link :to="`used/${mark.slug}`" class="makes__link">
            <span class="makes__title">
              {{ markTitle(mark) }}
            </span>
            <span class="makes__qty">
              {{ mark.offers_count }}
            </span>
          </nuxt-link>
        </li>
        <li v-if="showAllButton">
          <button
              @click="toggleShow"
              :class="{'button--show-active': showAll }"
              class="button--show">
            {{ showAll ? 'Меньше марок' : 'Больше марок' }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { markTitle, sortMarksCatalog } from '~/utils/filterMarks';
import { useMarks } from '~/store/carbrandsStore';
import { storeToRefs } from 'pinia';

const { isMobile } = useDevice();
const carBrandsStore = useMarks();
const { allMarks } = storeToRefs(carBrandsStore);

const showAll = ref(false);
const marksList = computed(() => {
  return sortMarksCatalog(allMarks.value, isMobile ? 10 : 21, showAll.value);
});
const showAllButton = computed(() => {
  if (isMobile && allMarks) {
    return allMarks.value.length > 10;
  } else if (allMarks) {
    return allMarks.value.length > 21;
  }
});

function toggleShow() {
  showAll.value = !showAll.value;
}
</script>