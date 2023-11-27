<template>
  <main class="page-main">
    <div class="grid grid--container">
      <h1 class="visually-hidden">pageTitle</h1>
      <div class="page-main__promo grid__col-8">
        <section class="page-main__slider-index slider-index grid__col-8">
          <SliderHome />
        </section>
        <section class="page-main__stories stories" :class="{'stories--desktop grid__col-8':!isMobileOrTablet}">
          <h2 class="visually-hidden">Акции и спецпредложения</h2>
          <Stories/>
        </section>
      </div>
      <div class="page-main__credit-index grid__col-4">
        <FormCredit has-chose/>
      </div>
      <!--      <LazyHydrate when-visible>-->
      <!--        <catalog-list-index />-->
      <!--      </LazyHydrate>-->
      <!--      <LazyHydrate when-visible>-->
      <!--        <featured />-->
      <!--      </LazyHydrate>-->
      <!--      <LazyHydrate when-visible-->
      <!--                   v-if="showBlog">-->
      <!--        <blog index />-->
      <!--      </LazyHydrate>-->
      <!--      <LazyHydrate when-visible>-->
      <!--        <video-about />-->
      <!--      </LazyHydrate>-->
      <!--      <LazyHydrate when-visible>-->
      <!--        <text-main />-->
      <!--      </LazyHydrate>-->
    </div>
  </main>
</template>
<script setup lang="ts">

import SliderHome from '~/components/Slider/Home.vue';
import Stories from '~/components/Stories';
import FormCredit from '~/components/Form/Credit.vue';

const {isMobileOrTablet} = useDevice();
</script>