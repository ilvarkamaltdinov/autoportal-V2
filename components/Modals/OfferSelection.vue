<template>
  <div class="modal__options">
    <div class="tabs tabs--modal">
      <ul class="tabs__list" id="tabs" role="tablist">
        <TwoSideBadge class="tabs__link" v-for="(tab, index) in tabs" :key="tab.title"
                      :class="{
          'tabs__item--disabled': !componentProps[tab.name],
          'tabs__item--active': tab.name === currentTab.name
        }" @click="currentTab = tab">
          <template #title>
            {{ index + 1 }}. {{ tab.title }}
          </template>
        </TwoSideBadge>
      </ul>
    </div>
  </div>
  <component :is="currentTab.component" @select="setCarData"
             v-bind="componentProps"/>
</template>

<script setup lang="ts">
import TwoSideBadge from '~/components/Inputs/TwoSideBadge.vue';
import { UnwrapRef } from 'vue';

type Tab = {
  title: string
  name: keyof UnwrapRef<typeof componentProps>
  component: unknown
}

const tabs = computed<Tab[]>(() =>
  [
    {
      title: 'Марка',
      name: 'mark',
      component: defineAsyncComponent(() => import('~/components/Modals/ChooseCarBrand.vue')),
    },
    {
      title: 'Модель',
      name: 'folder',
      component: defineAsyncComponent(() => import('~/components/Modals/ChooseModel.vue')),
    },
    {
      title: 'Поколение',
      name: 'generation',
      component: defineAsyncComponent(() => import('~/components/Modals/ChooseGeneration.vue')),
    },
    {
      title: 'Автомобиль',
      name: 'car',
      component: defineAsyncComponent(() => import('~/components/Modals/ChooseCars.vue')),
    },
  ]
);
const currentTab = shallowRef(tabs.value[0]);

//optional, just for show
const componentProps = ref({
  mark: null,
  folder: null,
  generation: null,
  car: null,
});

function setCarData(name: Tab['name'], event: Tab['component']) {
  //@ts-expect-error lol
  componentProps.value[name] = event;
  nextTab();
}

function nextTab() {
  const index = tabs.value.findIndex((val) => val.title === currentTab.value.title) + 1;
  currentTab.value = tabs.value[index];
}
</script>