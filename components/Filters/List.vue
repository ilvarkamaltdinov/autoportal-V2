<template>
  <ul class="filter__menu-list">
    <li>
      <Dropdown optionLabel="title" v-model="mark" :options="notEmptyMarks" placeholder="Марка"/>
    </li>
    <li>
      <Dropdown optionLabel="title" v-model="folder" :options="folders" placeholder="Модель"/>
    </li>
    <!--    <li>-->
    <!--      <ControlsSelect @select="handlerSelect" :options="folders" title="Модель" type="folder" :value="folder"/>-->
    <!--    </li>-->
    <Accordion v-model:active-index="accordionIndex" :unstyled="true">
      <template #collapseicon>
        {{ null }}
      </template>
      <template #expandicon>
        {{ null }}
      </template>
      <AccordionTab :unstyled="true">
        <ul class="filter__menu-list filter__menu-list--more">
          <li>
            <Dropdown optionLabel="name" v-model="generation" :options="generations" placeholder="Поколение"/>
          </li>
          <li>
            <Dropdown optionLabel="title" v-model="engineType" :options="engineTypes" placeholder="Двигатель"/>
          </li>
          <li>
            <Dropdown optionLabel="title" v-model="bodyType" :options="bodyTypes" placeholder="Кузов"/>
          </li>
          <li>
            <Dropdown optionLabel="title" v-model="gearbox" :options="gearboxes" placeholder="КПП"/>
          </li>
          <li>
            <Dropdown optionLabel="title" v-model="driveType" :options="driveTypes" placeholder="Привод"/>
          </li>
        </ul>
      </AccordionTab>
    </Accordion>
  </ul>
  <div class="filter__more">
    <button class="button button--show" @click="allFilters = !allFilters" :class="{'button--show-active': allFilters}">
      {{ allFilters ? 'Меньше фильтров' : 'Больше фильтров' }}
    </button>
  </div>
  <ul class="filter__menu-list filter__menu-list--more">
    <li class="filter__menu-group">
      <h2 class="heading heading--h3">Цена</h2>
      <RangeFilterPrice/>
    </li>
    <li class="filter__menu-group">
      <h2 class="heading heading--h3">Год</h2>
      <RangeFilterPrice/>
    </li>
  </ul>
</template>

<script setup lang="ts">
import RangeFilterPrice from '~/components/Range/FilterPrice.vue';
import { useMarks } from '~/store/carbrandsStore';
import { Mark } from '~/app/types/marks';
import { Folder } from '~/app/types/folders';
import { storeToRefs } from 'pinia';
import { Generation } from '~/types/graphql';

const allFilters = ref<boolean>(false);
const accordionIndex = computed(() => allFilters.value ? 0 : -1);
const router = useRouter();
const marksStore = useMarks();
marksStore.getAllMarksFillPopular();
const { allMarks } = storeToRefs(marksStore);

const mark = ref<Mark | null>();
const folder = ref<Folder | null>();
const generation = ref<Generation | null>();
const engineType = ref();
const bodyType = ref();
const driveType = ref();
const gearbox = ref();

const notEmptyMarks = computed(() => {
  return allMarks.value.filter(item => item.offers_count > 0);
});

const folders = computed(() => {
  return mark.value?.folders.filter(item => item.offers_count > 0) || [];
});

const generations = computed(() => {
  return folder.value?.generations || [];
});

const engineTypes = computed(() => {
  return [];
});

const bodyTypes = computed(() => {
  return [];
});

const driveTypes = computed(() => {
  return [];
});

const gearboxes = computed(() => {
  return [];
});

async function handlerSelect(data: { option: object, type: string }) {
  await router.replace({ 'query': undefined });
  if (data.type === 'mark') {
    console.log(data.option);
    mark.value = data.option;
    folder.value = null;
    // bodyType.value = null
    // gearbox.value = null
    // driveType.value = null
    // engineType.value = null
  }
  if (data.type === 'folder') {
    folder.value = data.option;
    // bodyType.value = null
    // gearbox.value = null
    // driveType.value = null
    // engineType.value = null
  }
}
</script>