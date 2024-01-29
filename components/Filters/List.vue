<template>
  <ul class="filter__menu-list">
    <li>
      <ControlsSelect @select="handlerSelect" :options="notEmptyMarks" title="Марка" type="mark" :value="mark"/>
    </li>
    <li>
      <ControlsSelect @select="handlerSelect" :options="folders" title="Модель" type="folder" :value="folder"/>
    </li>
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
            <ControlsSelect options="" title="Поколение" type="" value=""/>
          </li>
          <li>
            <ControlsSelect options="" title="Двигатель" type="" value=""/>
          </li>
          <li>
            <ControlsSelect options="" title="Кузов" type="" value=""/>
          </li>
          <li>
            <ControlsSelect options="" title="КПП" type="" value=""/>
          </li>
          <li>
            <ControlsSelect options="" title="Привод" type="" value=""/>
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
import ControlsSelect from '~/components/Controls/Select.vue';
import RangeFilterPrice from '~/components/Range/FilterPrice.vue';
import { useMarks } from '~/store/carbrandsStore';
import { Mark } from '~/app/types/marks';
import { Folder } from '~/app/types/folders';
import { storeToRefs } from 'pinia';


const allFilters = ref<boolean>(false);
const accordionIndex = computed(() => allFilters.value ? 0 : -1);
const router = useRouter();
const marksStore = useMarks();
marksStore.getAllMarksFillPopular();
const { allMarks } = storeToRefs(marksStore);
const mark = ref<Mark | null>();
const folder = ref<Folder | null>();

const notEmptyMarks = computed(() => {
  return allMarks.value.filter(item => item.offers_count > 0);
});

const folders = computed(() => {
  return mark.value?.folders.filter(item => item.offers_count > 0) || [];
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