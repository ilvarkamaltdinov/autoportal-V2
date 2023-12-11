<template>
  <div class="grid__col-12">
    <div class="catalog__makes makes">
      <ul class="makes__list makes__list--all makes__list--all-catalog">
        <li class="makes__item" :key="mark.id" v-for="mark in marksList">
          <nuxt-link :to="`${$route.params.category}/${mark.slug}`" class="makes__link">
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
import {useSiteConfig} from '~/store/siteConfig';
import {markTitle, sortMarksCatalog} from '~/helpers/filterMarks';

const {isMobile} = useDevice();

const showAll = ref(false);
const allMarks = useSiteConfig().marks;
const marksList = computed(() => {
  return sortMarksCatalog([...allMarks], isMobile ? 10 : 21, showAll.value);
});
const showAllButton = computed(() => {
  if (isMobile && allMarks) {
    return allMarks.length > 10;
  } else if (allMarks) {
    return allMarks.length > 21;
  }
});

function toggleShow() {
  showAll.value = !showAll.value;
}
</script>