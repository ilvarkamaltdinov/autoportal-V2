<template>
  <div class="catalog__filter filter">
    <div class="filter__catalog-wrap">
      <div class="filter__buttons-wrap">
        <!--        <div class="filter__buttons-filter"-->
        <!--             v-if="!modal">-->
        <!--          <button-filter @click="openFilter()" />-->
        <!--        </div>-->
        <div tabindex="1"
             class="filter__buttons-sort select"
             @focusout="isOpen = false">
          <div class="button button--action button--text filter__button"
               @click="isOpen = !isOpen">
            <nuxt-icon class="button__icon"
                       :name="currentIcon"/>
            <span class="button__text">{{ sort.title }}</span>
            <transition name="select">
              <ul v-if="isDesktop"
                  v-show="isOpen"
                  class="select__list">
                <li class="select__item"
                    @click="selectSort(sort)"
                    v-for="sort in sortList">
                  {{ sort.title }}
                </li>
              </ul>
            </transition>
            <!--            <select v-if="isMobile"-->
            <!--                    class="filter__buttons-sort-select">-->
            <!--              &lt;!&ndash;                          <option v-for="(key, value) in sortList"&ndash;&gt;-->
            <!--              &lt;!&ndash;                                  :selected="value === $route.query.sort ||value === sort"&ndash;&gt;-->
            <!--              &lt;!&ndash;                                  :value="value">&ndash;&gt;-->
            <!--              &lt;!&ndash;                            {{ key }}&ndash;&gt;-->
            <!--              &lt;!&ndash;                          </option>&ndash;&gt;-->
            <!--            </select>-->
          </div>
        </div>
      </div>
      <div class="filter__buttons-wrap filter__buttons-wrap--view">
        <button v-for="item in viewList"
                :disabled="view === item"
                @click="view = item"
                :class="[`button--view-${item}`, {'filter__button--active':view === item}]"
                class="button button--action filter__button"
                type="button">
          <nuxt-icon class="button__icon icon"
                     :name="`icon-view-${item}`"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {SortType} from '~/app/types/sort';

const {isMobile, isDesktop} = useDevice();

const viewList = [
  's',
  'l'
];
const view = ref<string>('s');
const sortList: SortType[] = [
  {
    title: 'Сначала дешевле',
    value: 'price|asc'
  },
  {
    title: 'Сначала дороже',
    value: 'price|asc'
  },
  {
    title: 'Сначала новее',
    value: 'price|asc'
  },
  {
    title: 'Минимальный пробег',
    value: 'price|asc'
  }
];

const sort = ref<SortType>(sortList[0]);

const selectSort = (selectedSort: SortType) => {
  sort.value = selectedSort;
};
const isOpen = ref<boolean>(false);
const currentIcon = computed(() => {
  if (sort.value.value.split('|')[1] === 'asc') {
    return 'icon-sort';
  } else {
    return 'icon-sort-alt';
  }
  //TODO одинаковые иконки, на основном каро так же
});

</script>
