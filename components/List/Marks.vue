<template>
  <div class="grid__col-12">
    <div class="catalog__makes makes">
      <ul class="makes__list makes__list--popular">
        <CarBrandLogo :car-brand="mark" v-for="mark in popularMarks" :key="mark.id"></CarBrandLogo>
      </ul>
      <ul class="makes__list makes__list--all makes__list--all-modal">
        <TwoSideBadge :to="`${catalogRoute}/${mark.slug}`" v-for="mark in marksList" :key="mark.id">
          <template #title>
            {{ markTitle(mark) }}
          </template>
          <template #right-content>
            {{ mark.offers_count }}
          </template>
        </TwoSideBadge>
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
import TwoSideBadge from '~/components/Inputs/TwoSideBadge.vue';
import CarBrandLogo from '~/components/Inputs/CarBrandLogo.vue';

const props = defineProps<{
  category?: string
}>();

const catalogRoute = computed(()=>{
  return props.category === 'new' ? 'new' : 'used';
});


const { isMobile } = useDevice();
const carBrandsStore = useMarks();
const { allMarks, popularMarks } = storeToRefs(carBrandsStore);

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