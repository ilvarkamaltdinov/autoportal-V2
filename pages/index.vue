<template>
  <main class="page-main">
    <div class="grid grid--container">
      <h1 class="visually-hidden">{{ title }}</h1>
      <div class="page-main__promo grid__col-8">
        <section class="page-main__slider-index slider-index grid__col-8">
          <SliderHome/>
        </section>
        <section class="page-main__stories stories" :class="{'stories--desktop grid__col-8': !$device.isMobileOrTablet}">
          <h2 class="visually-hidden">Акции и спецпредложения</h2>
          <Stories/>
        </section>
      </div>
      <div class="page-main__credit-index grid__col-4">
        <FormCredit has-chose :calculator="true" />
      </div>
      <section class="page-main__catalog catalog grid__col-12 catalog--slider">
        <CatalogHome/>
      </section>
      <section class="page-main__featured featured grid__col-12">
        <Sets/>
      </section>
      <section class="page-main__blog blog grid">
        <Blog is-index/>
      </section>
      <VideoAbout/>
      <!--            <LazyHydrate when-visible>-->
      <!--              <text-main />-->
      <!--            </LazyHydrate>-->
    </div>
  </main>
</template>
<script setup lang="ts">

import SliderHome from '~/components/Slider/Home.vue';
import Stories from '~/components/Stories/index.vue';
import FormCredit from '~/components/Form/Credit.vue';
import CatalogHome from '~/components/Catalog/Home.vue';
import Sets from '~/components/Sets/index.vue';
import Blog from '~/components/Blog/index.vue';
import VideoAbout from '~/components/Video/About.vue';

</script>