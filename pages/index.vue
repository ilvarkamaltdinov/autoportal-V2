<template>
  <main class="page-main">
    <div class="grid grid--container">
      <h1 class="visually-hidden">{{ title }}</h1>
      <div class="page-main__promo grid__col-8">
        <section class="page-main__slider-index slider-index grid__col-8">
          <SliderHome/>
        </section>
        <section class="page-main__stories stories"
                 :class="{'stories--desktop grid__col-8': !$device.isMobileOrTablet}">
          <h2 class="visually-hidden">Акции и спецпредложения</h2>
          <Stories/>
        </section>
      </div>
      <div class="page-main__credit-index grid__col-4">
        <FormCredit :offer="offer" @showModal="isModalVisible = true" />
      </div>
      <section class="page-main__catalog catalog grid__col-12 catalog--slider">
        <CatalogSlider has-tabs title="Автомобили в наличии" />
      </section>
      <section class="page-main__featured featured grid__col-12">
        <Sets/>
      </section>
      <section class="page-main__blog blog grid">
        <!--        <Blog is-index/>-->
      </section>
      <VideoAbout/>
      <!--            <LazyHydrate when-visible>-->
      <!--              <text-main />-->
      <!--            </LazyHydrate>-->

    </div>
  </main>
  <Sidebar v-model:visible="isModalVisible" position="right" header="Выберите автомобиль" class="modal">
    <template #header>
      <div class="heading-group heading-group--modal">
        <div class="heading-group__wrap">
          <h2 class="heading heading--h1">Выберите автомобиль</h2>
        </div>
      </div>
    </template>
    <OfferSelection @choose="offer = $event.car; isModalVisible = false"/>
  </Sidebar>
</template>
<script setup lang="ts">
import CatalogSlider from '~/components/Catalog/Slider.vue';
import OfferSelection from '~/components/Modals/OfferSelection.vue';
import { ref } from '#imports';
import { Offer } from '~/types/graphql';

const isModalVisible = ref(false);
const offer = ref<Offer | null>(null);
</script>