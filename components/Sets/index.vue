<template>
  <h2 class="heading heading--h2">Подборки</h2>
  <ul class="featured__list grid grid--featured">
        <BankCard :slug="set.slug" class="" :class="set.class" v-for="set in sets" :key="set.slug">>
          <template #extra-picture v-if="set.extraImage">
            <nuxt-img loading="lazy" alt="carro-select" class="featured__label" :src="set.extraImage" />
          </template>
          <template #title>
            {{set.title}}
          </template>
          <template #text>
            {{ set.description }}
          </template>
          <template #image>
            <NuxtImg :src="`/img/featured/featured-${set.image}@2x.png`" class="featured__img lazyload" />
          </template>
        </BankCard>
  </ul>
  <nuxt-link to="/used" class="button button--link button--more">
    Все автомобили
  </nuxt-link>
</template>
<script setup lang="ts">
// type Set = {
//   title: string,
//   description: string,
//   slug: string,
//   class: string,
//   image: string,
// }
import BankCard from '~/components/Banks/BankCard.vue';
import Template from '~/components/Modals/Template.vue';

const sets = [
  {
    title: 'Седаны',
    description: 'Классический форм-фактор для тех, кто ценит комфорт и динамику',
    slug: 'sedan',
    class: 'featured__item--sedan',
    image: '1'
  },
  {
    title: 'Семейные',
    description: 'Вместительные модели для семейных поездок',
    slug: 'for-family',
    class: 'featured__item--family',
    image: '2'
  },
  {
    title: 'Для нее',
    description: 'Изящные модели для прекрасной половины',
    slug: 'for-woman',
    class: 'featured__item--women',
    image: '3'
  },
  {
    title: 'Бизнес-класс',
    description: 'Премиальные автомобили для самых взыскательных',
    slug: 'business-class',
    class: 'featured__item--business',
    extraImage: '/img/featured/featured-label.svg',
    image: '4'
  },
  {
    title: 'Внедорожники',
    description: 'Преодолевайте препятствия с внедорожниками 4WD',
    slug: 'allroad',
    class: 'featured__item--allroad',
    image: '5'
  },
  {
    title: 'Для такси',
    description: 'Самые надежные модели для такси',
    slug: 'for-taxi',
    class: 'featured__item--taxi',
    image: '6'
  },
];
</script>