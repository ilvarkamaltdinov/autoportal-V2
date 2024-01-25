<template>
  <div class="car__info-group">
    <div class="heading-group">
      <div class="heading-group__wrap">
        <h2 class="heading heading--h2">
          Информация о дилере
        </h2>
        <span class="heading-group__label">
					Автоцентр «test»
				</span>
      </div>
      <Rating :rating="4"
              :max="5"/>

    </div>
    <div class="car__info-options features">
      <div class="features__group">
        <h3 class="heading heading--h3">Адрес:</h3>
        <ul class="features__list">
          <li class="features__item">address</li>
          <li class="features__item">м. metro</li>
        </ul>
      </div>
      <div class="features__group">
        <h3 class="heading heading--h3">Телефон:</h3>
        <ul class="features__list">
          <li class="features__item">
            <a href="#">89999999999</a>
          </li>
        </ul>
      </div>
      <div class="features__group">
        <h3 class="heading heading--h3">Режим работы:</h3>
        <ul class="features__list">
          <li class="features__item">Режим работы:</li>
        </ul>
      </div>
      <button class="button button--show"
              @click="aboutDealer">
        Подробнее о дилере
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Rating from '~/components/Rating/Rating.vue';
function aboutDealer(){
  console.log('aboutDealer');
}
</script>