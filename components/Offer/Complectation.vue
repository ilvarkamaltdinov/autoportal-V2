<template>
  <div class="car__info-group car__info-group--options">
    <div class="heading-group">
      <div class="heading-group__wrap">
        <h2 class="heading heading--h2">
          Комплектация
        </h2>
        <div class="heading-group__label" v-if="offer.complectation">
          {{ offer.complectation.name }}
        </div>
        <div class="heading-group__label" v-else>
          {{ offer.mark.title }}
          {{ offer.folder.title }},
          {{ engineVolume(offer.engine_volume) }} л,
          {{ offer.gearbox.title_short_rus }},
          {{ offer.year }}
          {{ offer.generation ? ', ' + offer.generation.name : '' }}
        </div>
      </div>
    </div>
    <div class="car__info-options features">
      <div v-show="index === 0"
           class="features__group"
           v-for="(group, index) in offer.equipment_groups"
           :key="group.title">
        <h3 class="heading heading--h3">{{ group.title }}</h3>
        <ul class="features__list">
          <li class="features__item"
              v-for="value in group.values"
              :key="value">
            {{ value }}
          </li>
        </ul>
      </div>
    </div>
    <button class="button button--show"
            @click="aboutComplectation">
      Показать больше
    </button>
  </div>
</template>

<script setup lang="ts">
const offer = inject('offer');

function aboutComplectation() {
  console.log('aboutComplectation');
}
</script>