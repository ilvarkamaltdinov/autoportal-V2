<template>
  <section class="modal modal--makes">
    <h2 class="visually-hidden">Выберите марку автомобиля</h2>
    <div class="modal__wrap grid grid__container">
      <ListMarks/>
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
      <!--                            :for-chose-modal="forChoseModal"-->
      <!--                            @click="clickMarks"-->
      <!--                            :key="index"-->
      <!--                            :item="item"/>-->
      <!--                <li v-if="showAllButton">-->
      <!--                  <button-->
      <!--                      @click="clickAllMarks"-->
      <!--                      :class="{'button&#45;&#45;show-active': isAllMarksDisplaying }"-->
      <!--                      class="button&#45;&#45;show">-->
      <!--                    {{ isAllMarksDisplaying ? 'Меньше марок' :'Больше марок' }}-->
      <!--                  </button>-->
      <!--                </li>-->
      <!--              </ul>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </section>
</template>
<script setup lang="ts">
import ListMarks from '~/components/List/Marks.vue';
</script>