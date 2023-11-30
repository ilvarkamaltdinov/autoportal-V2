<template>
  <section class="modal modal--makes">
    <h2 class="visually-hidden">Выберите марку автомобиля</h2>
    <div class="modal__wrap grid grid__container">
<!--      <div class="grid__col-12">-->
<!--        <div class="makes">-->
<!--          <div class="makes__wrap modal__makes">-->
<!--            <ul class="makes__list makes__list&#45;&#45;popular">-->
<!--              <template v-for="item in popularMarks">-->
<!--                <li v-if="false" :key="item.id"-->
<!--                    :class="false ? 'makes__popular-item makes__popular-item&#45;&#45;active' : 'makes__popular-item'">-->
<!--                  <span @click="$emit('chooseMark')" class="makes__popular-link ">-->
<!--                    <nuxt-icon :name="'icon-' + title.toLowerCase()" class="makes__popular-logo"/>-->
<!--                  </span>-->
<!--                </li>-->
<!--                <li v-else :key="item.title" :class="false ? 'makes__popular-item makes__popular-item&#45;&#45;active' : 'makes__popular-item'">-->
<!--                  <nuxt-link :to="'/used/'+ item.slug" @click="$emit('click')" class="makes__popular-link ">-->
<!--                    <nuxt-icon :name="'icon-' + item.title.toLowerCase()"-->
<!--                               class="makes__popular-logo"/>-->
<!--                  </nuxt-link>-->
<!--                </li>-->
<!--              </template>-->
<!--            </ul>-->
<!--              <ul class="makes__list makes__list&#45;&#45;all makes__list&#45;&#45;all-modal">-->
<!--                <MakesItem v-for="(item, index) in sortedMarks"-->
<!--                            :slug="item.slug"-->
<!--                            :active="item === false"-->
<!--                            :for-chose-modal="forChoseModal"-->
<!--                            @click="clickMarks"-->
<!--                            :key="index"-->
<!--                            :item="item"/>-->
<!--                <li v-if="showAllButton">-->
<!--                  <button-typical-->
<!--                      @click="clickAllMarks"-->
<!--                      :text="isAllMarksDisplaying ? 'Меньше марок' :'Больше марок'"-->
<!--                      :class="{'button&#45;&#45;show-active': isAllMarksDisplaying }"-->
<!--                      class="button&#45;&#45;show"/>-->
<!--                </li>-->
<!--              </ul>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </section>
</template>
<!--<script setup lang="ts">-->

<!--withDefaults(defineProps<{-->
<!--  forChoseModal: boolean,-->
<!--}>(), {-->
<!--  forChoseModal: false-->
<!--});-->
<!--import {useMarks} from '~/store/marks';-->
<!--import {storeToRefs} from 'pinia';-->

<!--const marksStore = useMarks();-->
<!--const {popularMarks, allMarks} = storeToRefs(marksStore);-->
<!--marksStore.getAllMarksFillPopular();-->
<!--const {isMobile} = useDevice();-->
<!--const isAllMarksDisplaying = ref(false);-->

<!--const marksList = computed(() => {-->
<!--  let marks = [...allMarks.value];-->
<!--  let marksShowNumber = 21;-->
<!--  if (isMobile) {-->
<!--    marksShowNumber = 16;-->
<!--    if (isAllMarksDisplaying.value) {-->
<!--      return marks;-->
<!--    } else {-->
<!--      marks = marks.sort((a, b) => parseFloat(b!.offers_count!) - parseFloat(a!.offers_count!));-->
<!--      marks = marks.slice(0, marksShowNumber);-->
<!--      marks = marks.sort((a, b) => a.slug.toLowerCase().localeCompare(b.slug.toLowerCase()));-->
<!--      return marks;-->
<!--    }-->
<!--  } else {-->
<!--    if (isAllMarksDisplaying.value) {-->
<!--      return marks;-->
<!--    } else {-->
<!--      marks = marks.sort((a, b) => parseFloat(b!.offers_count!) - parseFloat(a!.offers_count!));-->
<!--      marks = marks.slice(0, marksShowNumber);-->
<!--      marks = marks.sort((a, b) => a.slug.toLowerCase().localeCompare(b.slug.toLowerCase()));-->
<!--      return marks;-->
<!--    }-->
<!--  }-->
<!--});-->

<!--const sortedMarks = computed(() => {-->
<!--  return [...marksList.value].sort((a, b) => a.title.localeCompare(b.title));-->
<!--});-->
<!--const showAllButton = computed(() => {-->
<!--  if (isMobile && allMarks) {-->
<!--    return allMarks.value.length > 10;-->
<!--  } else if (allMarks.value) {-->
<!--    return allMarks.value.length > 21;-->
<!--  }-->
<!--});-->
<!--function clickAllMarks() {-->
<!--  isAllMarksDisplaying.value = !isAllMarksDisplaying.value;-->
<!--}-->
<!--function clickMarks() {-->
<!--}-->

<!--</script>-->