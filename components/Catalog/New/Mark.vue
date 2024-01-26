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
            <CatalogItem view="short" v-for="item in 4" :key="item">
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
                  <li class="catalog__tech-item">
                    2.5 л
                  </li>
                  <li class="catalog__tech-item">
                    449 л.с.
                  </li>
                  <li class="catalog__tech-item">
                    5.3 с
                  </li>
                </ul>
              </template>
              <template #main-button>
                <Button class="button button--credit">
                  Купить в кредит
                </Button>
              </template>
            </CatalogItem>

          </div>
        </div>
      </section>
    </div>
    <div class="grid grid--container">
      <!--      <text-used v-if="$route.params.category === 'used'"/>-->
    </div>
  </main>
</template>

<script setup lang="ts">
import Crumbs from '~/components/Crumbs/index.vue';
import CatalogItem from '~/components/Catalog/Item/index.vue';
import { engineVolume } from '~/utils/filters';
</script>