<template>
  <h2 class="heading heading--h2">Подборки</h2>
  <ul class="featured__list grid grid--featured">
    <li class="featured__item" :class="set.class" v-for="set in sets" :key="set.slug">
      <nuxt-link :to="`/used/${set.slug}`" class="featured__link">
        <div class="featured__about">
          <h3 class="featured__title">{{ set.title }}</h3>
          <div class="featured__text">{{ set.description }}</div>
        </div>
        <div class="featured__picture">
          <div class="glass featured__glass featured__glass--small"></div>
          <div class="glass featured__glass featured__glass--big"></div>
          <NuxtImg class="featured__img" :src="`/img/featured/featured-${set.image}@2x.png`"/>
        </div>
      </nuxt-link>
    </li>
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