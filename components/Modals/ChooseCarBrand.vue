<template>
  <div class="modal__wrap modal__wrap--modal">
    <div class="makes__letters">
      <ul class="makes__letters-list">
        <li v-for="item in getAlphabet(allMarks)" :key="item">
          <a href="#" class="makes__letters-link">
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
    <div class="makes">
      <div class="makes__wrap">
        <ul class="makes__list makes__list--popular">
          <li v-for="mark in popularMarks" class="makes__popular-item" :key="mark.id">
                    <span class="makes__popular-link ">
                      <nuxt-icon :name="'icon-' + mark.title.toLowerCase()"
                                 class="makes__popular-logo"/>
                    </span>
          </li>
        </ul>
        <div class="makes__group"
             v-for="letter in getAlphabet(allMarks)"
             :key="letter">
          <div class="makes__letter-item">
            <a class="makes__letters-link"
               :id="letter"
               href="">
              {{ letter }}
            </a>
          </div>
          <ul class="makes__list makes__list--modal">
            <li class="makes__item" @click="$emit('select', 'mark', mark)" v-for="mark in filterMarksByLetter(allMarks, letter)"
                :key="mark.id">
                      <span class="makes__link">
                        <span class="makes__title">
                          {{ mark.title }}
                        </span>
                        <span class="makes__qty">
                          {{ mark.offers_count }}
                        </span>
                      </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMarks } from '~/store/carbrandsStore';
import { storeToRefs } from 'pinia';

const carBrandsStore = useMarks();
const { popularMarks, allMarks } = storeToRefs(carBrandsStore);
carBrandsStore.getAllMarksFillPopular();
</script>