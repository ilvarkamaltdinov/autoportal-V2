<template>
  <div class="car__info-group car__info-group--options">
    <div class="heading-group">
      <div class="heading-group__wrap">
        <h2 class="heading heading--h2">
          Комплектация
        </h2>
        <!--        TODO offer.complectation-->
        <span class="heading-group__label" v-if="true">
<!--					{{ offer.complectation.name }}-->
          Комплектация
				</span>
        <span class="heading-group__label" v-else>
          mark
          folder
          engine_volume
          title_short_rus
          year
          generation.name
          <!--					{{ offer.mark.title }}-->
          <!--					{{ offer.folder.title }},-->
          <!--					{{ offer.engine_volume | engineVolume }},-->
          <!--					{{ offer.gearbox.title_short_rus }},-->
          <!--					{{ offer.year }}-->
          <!--					{{ offer.generation ? ', ' + offer.generation.name : '' }}-->
				</span>
      </div>
    </div>
    <div class="car__info-options features">
      <div v-show="index === 0"
           class="features__group"
           v-for="(group, index) in 3"
           :key="group">
        <h3 class="heading heading--h3">{{ group }}</h3>
        <ul class="features__list">
          <li class="features__item"
              v-for="value in 3"
              :key="value">
            test
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
function aboutComplectation() {
  console.log('aboutComplectation');
}
</script>