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
<!--    <div class="car__info-options features">-->
<!--      <div v-if="index === 0"-->
<!--           class="features__group"-->
<!--           v-for="(group, index) in offer.equipment_groups"-->
<!--           :key="group.title">-->
<!--        <h3 class="heading heading&#45;&#45;h3">{{ group.title }}</h3>-->
<!--        <ul class="features__list">-->
<!--          <li class="features__item"-->
<!--              v-for="value in group.values"-->
<!--              :key="value">-->
<!--            {{ value }}-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
<!--    <button-typical @click="moreInfoComplectation(offer)"-->
<!--                    text="Показать больше"-->
<!--                    class="button&#45;&#45;show" />-->
  </div>
</template>

<script setup lang="ts">

</script>