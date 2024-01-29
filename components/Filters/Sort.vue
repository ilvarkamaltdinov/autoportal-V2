<template>
  <div class="catalog__filter filter">
    <div class="filter__catalog-wrap">
      <div class="filter__buttons-wrap"
           :class="{'filter__buttons-wrap--hidden':$route.params.mark === 'last-arrival'}">
        <div class="filter__buttons-filter">
          <button @click.prevent="onFilterButtonClick" class="button button--action button--filter filter__button"
                  type="button">
            <nuxt-icon class="button__icon"
                       name="icon-filter"/>
            <span class="button__text">Фильтр</span>
          </button>
        </div>
        <div tabindex="1"
             class="filter__buttons-sort select"
             @focusout="isActive = false">
          <div class="button button--action button--text filter__button" @click="isActive = !isActive">
            <nuxt-icon class="button__icon" :name="currentIcon"/>
            <span class="button__text">{{ sort.name }}</span>
            <transition name="select">
              <ul v-if="!isMobile"
                  v-show="isActive"
                  class="select__list">
                <li class="select__item"
                    v-for="(sort, key) in sortList"
                    :key="key"
                    @click="$emit('update:sort', sort)">
                  {{ sort.name }}
                </li>
              </ul>
            </transition>
            <!--            <select v-if="$device.isMobile"-->
            <!--                    class="filter__buttons-sort-select"-->
            <!--                    @change="sortChosen('mobile', $event.target.value)">-->
            <!--              <option v-for="(key, value) in sortList"-->
            <!--                      :selected="value === $route.query.sort ||value === sort"-->
            <!--                      :value="value">-->
            <!--                {{ key }}-->
            <!--              </option>-->
            <!--            </select>-->
          </div>
        </div>
      </div>
      <div class="filter__buttons-wrap filter__buttons-wrap--view">
        <button @click.prevent="$emit('update:view', 's')"
                :disabled="view === 's'"
                :class="{'filter__button--active':view === 's'}"
                class="button button--action button--view-s filter__button"
                type="button">
          <nuxt-icon class="button__icon icon"
                     name="icon-view-s"/>
        </button>
        <button @click.prevent="$emit('update:view', 'l')"
                :disabled="view === 'l'"
                :class="{'filter__button--active':view === 'l'}"
                class="button button--action button--view-l filter__button"
                type="button">
          <nuxt-icon class="button__icon"
                     name="icon-view-s"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// todo не называй типы как компонент!!!
export type SortOption = {
  slug: SortSlug,
  name: string
}

type SortSlug = 'price|asc' | 'price|desc' | 'year|desc' | 'run|asc';

const { isMobile } = useDevice();
const isActive = ref(false);
// const currentView = ref('s');
const props = defineProps<{
  view: string;
  sort: SortOption;
}>();

defineEmits(['update:view', 'update:sort']);
const sortList = [
  {
    slug: 'price|asc',
    name: 'Сначала дешевле'
  },
  {
    slug: 'price|desc',
    name: 'Сначала дороже'
  },
  {
    slug: 'year|desc',
    name: 'Сначала новее'
  },
  {
    slug: 'run|asc',
    name: 'Минимальный пробег'
  }
];
const currentIcon = computed(() => {
  if (props.sort.slug.split('|')[1] === 'asc') {
    return 'icon-sort';
  } else {
    return 'icon-sort-alt';
  }
});

function onFilterButtonClick() {
  console.log(123);
}

function changeSort(sort: SortOption) {
  // currentSort.value = sort;
  // let query = {sort: sort};
  // query.page = 1;
  // this.setSort(sort);
  // await this.$router.push({path: this.$route.fullPath, query: query});


  // this.setFilterClick(true)
  // if (sort === 'mobile') {
  //   if (this.modal) {
  //     this.setModalSort(value)
  //     await this.getOffers()
  //   } else {
  //     let query = {sort: value}
  //     if (Number(this.$route.query.page) > 1) {
  //       query.page = 1
  //     }
  //     this.setSort(value)
  //     await this.$router.push({path: this.$route.fullPath, query: query});
  //   }
  // }
  // if (this.modal) {
  //   this.setModalSort(sort)
  //   await this.getOffers()
  // }

}
</script>