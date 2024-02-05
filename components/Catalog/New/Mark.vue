<template>
  <main class="page-main">
    <div class="grid ">
      <Crumbs/>
    </div>
    <div class="grid grid--container">
      <section class="page-main__catalog catalog grid catalog--used">
        <div class="heading-group heading-group--catalog heading-group--h1 grid__col-12">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1">Новые Lixiang в наличии</h1>
          </div>
        </div>
        <div class="grid__col-12">
          <div class="grid catalog__list">
            <CatalogItem view="short" v-for="item in 3" :key="item">
              <template #slider>
                <img src="/img/mock/model-new.png" alt="">
              </template>
              <template #heading>
                <nuxt-link to="/new/mark/model/123" class="catalog__title-link">
                  <span class="catalog__title">   Lixiang L8 </span>
                </nuxt-link>
              </template>
              <template #stock>
                <div></div>
              </template>
              <template #tech>
                <ul class="catalog__tech-list">
                  <li class="car__tech-item">
                    <div class="car__tech-icon-wrap">
                      <nuxt-icon class="car__tech-icon"
                                 name="icon-volume"/>
                    </div>
                    <div class="car__tech-content">
                      2.5 л
                    </div>
                  </li>
                  <li class="car__tech-item">
                    <div class="car__tech-icon-wrap">
                      <nuxt-icon class="car__tech-icon"
                                 name="icon-engine"/>
                    </div>
                    <div class="car__tech-content">
                      449 л.с.
                    </div>
                  </li>
                  <li class="car__tech-item">
                    <div class="car__tech-icon-wrap">
                      <nuxt-icon class="car__tech-icon"
                                 name="icon-mileage"/>
                    </div>
                    <div class="car__tech-content">
                      5.3 с
                    </div>
                  </li>
                </ul>
              </template>
              <template #main-button>
                <Button class="button button--credit">
                  В наличии
                </Button>

              </template>
              <template #actions-button-secondary>
                <Button class="button button--link">
                  Подробнее
                </Button>
              </template>
            </CatalogItem>
          </div>
        </div>
      </section>
      <section class="page-main__catalog catalog grid__col-12 catalog--slider">
        <CatalogSlider title="Автомобили Lixiang в наличии"/>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import Crumbs from '~/components/Crumbs/index.vue';
import CatalogItem from '~/components/Catalog/Item/index.vue';
import CatalogSlider from '~/components/Catalog/Slider.vue';
</script>