<template>
  <section class="modal modal--makes">
    <h2 class="visually-hidden">Выберите марку автомобиля</h2>
    <div class="modal__wrap grid grid__container">
      <div class="grid__col-12">
        <div class="makes">
          <div class="makes__wrap modal__makes">
            <ul class="makes__list makes__list--popular">
              <template v-for="item in popularMarks">
              <li v-if="false"
                  :class="false ? 'makes__popular-item makes__popular-item--active' : 'makes__popular-item'">
		<span @click="$emit('chooseMark')" class="makes__popular-link ">
			<nuxt-icon :name="'icon-' + title.toLowerCase()"
                class="makes__popular-logo"/>
		</span>
              </li>
              <li v-else
                  :class="false ? 'makes__popular-item makes__popular-item--active' : 'makes__popular-item'">
                <nuxt-link :to="'/used/'+ item.slug" @click="$emit('click')" class="makes__popular-link ">
                  <nuxt-icon :name="'icon-' + item.title.toLowerCase()"
                            class="makes__popular-logo"/>
                </nuxt-link>
              </li>
              </template>
            </ul>
<!--            <ul class="makes__list makes__list&#45;&#45;all makes__list&#45;&#45;all-modal">-->
<!--              <makes-item v-for="(item, index) in sortedMarks"-->
<!--                          :slug="item.slug"-->
<!--                          :active="item === currentMark"-->
<!--                          :for-chose-modal="forChoseModal"-->
<!--                          @click="clickMarks"-->
<!--                          @choose="chooseMark(item)"-->
<!--                          :key="index"-->
<!--                          :item="item"/>-->
<!--              <li v-if="showAllButton">-->
<!--                <button-typical-->
<!--                    @click="clickAllMarks"-->
<!--                    :text="allMarks ? 'Меньше марок' :'Больше марок'"-->
<!--                    :class="{'button&#45;&#45;show-active': allMarks }"-->
<!--                    class="button&#45;&#45;show"/>-->
<!--              </li>-->
<!--            </ul>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

import {useMarks} from '~/store/marks';
import {storeToRefs} from 'pinia';
import Template from '~/components/Modals/Template.vue';

const marksStore = useMarks();
const {popularMarks} = storeToRefs(marksStore);
marksStore.getAllMarks();
</script>