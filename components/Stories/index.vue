<template>
  <div class="skeleton skeleton--stories" :class="{'stories--desktop grid__col-8':!$device.isMobileOrTablet}">
    <ul class="skeleton__stories">
      <li class="skeleton__item"></li>
      <li class="skeleton__item"></li>
      <li class="skeleton__item"></li>
      <li class="skeleton__item"></li>
      <li class="skeleton__item"></li>
    </ul>
  </div>
  <div class="skeleton skeleton--stories" v-if="loading">
    <ul class="skeleton__stories">
      <li class="skeleton__item"></li>
      <li class="skeleton__item"></li>
      <li class="skeleton__item"></li>
      <li class="skeleton__item"></li>
      <li class="skeleton__item"></li>
    </ul>
  </div>
  <ul class="stories__list"
      v-if="$device.isMobileOrTablet">
    <stories-item :story="item"
                  @click="openStories(item)"
                  v-for="item in stories"
                  :key="item.id" />
  </ul>
  <div v-else
       class="swiper swiper--stories">
    <ul class="stories__list swiper-wrapper">
      <stories-item :story="item"
                    @click="openStories(item)"
                    v-for="item in stories"
                    :key="item.id" />
    </ul>
  </div>
  <button v-if="!$device.isMobileOrTablet"
          ref="prev"
          class="swiper-button swiper-button-prev">
    <svg-icon class="swiper-button__icon"
              name="icon-arrow" />
  </button>
  <button v-if="!$device.isMobileOrTablet"
          ref="next"
          class="swiper-button swiper-button-next">
    <svg-icon class="swiper-button__icon"
              name="icon-arrow" />
  </button>
</template>
<script setup lang="ts">
import {request} from '~/helpers/request';
import {stories as storiesQuery} from '~/apollo/queries/stories/stories';
import {StoriesQuery, StoriesQueryVariables} from '~/types/graphql';

const loading = ref(true);
const stories = ref([]);

onMounted(async () => {
  loading.value = true;
  let response = await request<StoriesQuery, StoriesQueryVariables>(storiesQuery, { site_id: 21 });
  this.stories = response.data.stories;
  this.loading = false;
});
</script>


