<template>
  <div class="dealers__item grid__col-12">
    <div class="dealers__features features">
      <div class="heading-group">
        <div class="heading-group__wrap">
          <h2 class="heading heading--h2">{{ dealer.title }}</h2>
          <span class="heading-group__label">{{ dealer.short_description }}</span>
        </div>
        <rating v-tippy="{
                content:`<div class='tippy__text'>Рейтинг дилера</div>`,
                animation:'scale',
                arrow: true,
            }"
                :rating="dealer.rating"
                :max="5"/>
      </div>
      <div class="features__group">
        <h3 class="heading heading--h3">Адрес:</h3>
        <ul class="features__list">
          <li class="features__item">{{ dealer.address }}</li>
          <li v-if="dealer.metro"
              class="features__item">м. {{ dealer.metro }}
          </li>
        </ul>
      </div>
      <div class="features__group" v-if="dealer.phone">
        <h3 class="heading heading--h3">Телефон:</h3>
        <ul class="features__list">
          <li class="features__item">
            <a :href="`tel:${ dealer.phone.replace(/[^+\d]/g, '')}`"> {{ dealer.phone }}</a>
          </li>
        </ul>
      </div>
      <div class="features__group">
        <h3 class="heading heading--h3">Режим работы:</h3>
        <ul class="features__list">
          <li class="features__item">{{ dealer.schedule }}</li>
        </ul>
      </div>
      <button v-if="dealer.slug === $route.params.dealer"
                      @click="showMore(dealer.slug)"
                      class="button--show">
        Подробнее о дилере
      </button>
      <nuxt-link v-else
                      :href="`/contact/${dealer.slug}`"
                      class="button--show">
        Подробнее о дилере
      </nuxt-link>
      <a v-if="dealer.site"
         class="button button--show button--show-link"
         :href="`${dealer.site}`"
         target="_blank">Сайт автоцентра
      </a>
    </div>
    <div class="dealers__item-img-wrap">
      <NuxtImg
          v-if="dealer.images[0]"
          class="dealers__item-img lazyload"
          :src="dealer.images[0].small"
          format="webp"
          densites="1x 2x"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Dealer} from '~/types/graphql';

defineProps<{
  dealer: Dealer
}>();
</script>