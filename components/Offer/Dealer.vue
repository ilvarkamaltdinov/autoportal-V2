<template>
  <div class="car__info-group">
    <div class="heading-group">
      <div class="heading-group__wrap">
        <h2 class="heading heading--h2">
          Информация о дилере
        </h2>
        <span class="heading-group__label">
					Автоцентр «{{ offer.dealer.title }}»
				</span>
      </div>
      <Rating :rating="offer.dealer.rating"
              :max="5"/>

    </div>
    <div class="car__info-options features">
      <div class="features__group">
        <h3 class="heading heading--h3">Адрес:</h3>
        <ul class="features__list">
          <li class="features__item" v-if="offer.dealer.address">{{ offer.dealer.address }}</li>
          <li class="features__item" v-if="offer.dealer.metro">м. {{ offer.dealer.metro }}</li>
        </ul>
      </div>
      <div class="features__group" v-if="offer.dealer.phone">
        <h3 class="heading heading--h3">Телефон:</h3>
        <ul class="features__list">
          <li class="features__item">
            <a href="#">{{ offer.dealer.phone }}</a>
          </li>
        </ul>
      </div>
      <div class="features__group" v-if="offer.dealer.schedule">
        <h3 class="heading heading--h3">Режим работы:</h3>
        <ul class="features__list">
          <li class="features__item">{{ offer.dealer.schedule }}</li>
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

const offer = inject('offer');

function aboutDealer() {
  console.log('aboutDealer');
}
</script>