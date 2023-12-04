<template>
  <div class="catalog__img">
    <a v-for="i in 3" :key="i" href="#" class="catalog__img-link" title="Подробнее об автомобиле"
       aria-label="Подробнее об автомобиле">
      <img
          data-src="/img/mock/offer-card-img-1.webp" alt="image"
          class=" lazyloaded"
          src="/img/mock/offer-card-img-1.webp"/>
    </a>
    
    <div>
      <div class="catalog__call-card">
        <div class="catalog__call">
          <nuxt-icon name="icon-call" class="catalog__call-icon icon sprite-icons"/>
          <span class="catalog__call-title">Бесплатный звонок</span>
          <span class="catalog__call-dealer">Автоцентр АвтоГрадъ</span>
        </div>
        <div class="catalog__call-img">
          <img data-src="https://riadvance.s3mts.ru/images/items/b61/61bf45a4b/22689c3c35f2.webp" class="lazyload">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>