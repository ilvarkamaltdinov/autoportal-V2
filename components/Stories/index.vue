<template>
  <div class="skeleton skeleton--stories" v-if="loading">
    <ul class="skeleton__stories">
      <li class="skeleton__item"></li>
      <li class="skeleton__item"></li>
      <li class="skeleton__item"></li>
      <li class="skeleton__item"></li>
      <li class="skeleton__item"></li>
    </ul>
  </div>
  <!--  todo add skeleton-->
  <ul class="stories__list"
      v-if="$device.isMobileOrTablet">
    <StoriesItem :story="item" @click="openStories(item)" v-for="item in stories" :key="item.id"/>
  </ul>
  <div v-else
       class="swiper swiper--stories">
    <ul class="stories__list swiper-wrapper">
      <swiper class="swiper"
              :slides-per-view="5"
              :watch-slides-progress="true"
              :modules="[Autoplay, Navigation]"
              :autoplay="false"
              :navigation="{prevEl: '.stories--desktop .swiper-button-prev', nextEl: '.stories--desktop .swiper-button-next'}"
              :space-between="16">

        <swiper-slide v-for="item in stories" :key="item.id" #default="{ isVisible }">
          <StoriesItem :story="item" :class="{'swiper-slide-visible': isVisible}" @click="openStories(item)"/>
        </swiper-slide>
      </swiper>
    </ul>
  </div>
  <template v-if="!$device.isMobileOrTablet">
    <button class="swiper-button swiper-button-prev">
      <nuxt-icon class="swiper-button__icon" name="icon-arrow"/>
    </button>
    <button class="swiper-button swiper-button-next">
      <nuxt-icon class="swiper-button__icon" name="icon-arrow"/>
    </button>
  </template>
  <Dialog v-model:visible="isStorySelected" modal :draggable="false" :closable="true">
    <template #container>
      <StoriesModal @close="isStorySelected = false" :stories="selectedStory"/>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { request } from '~/utils/request';
import { stories as storiesQuery } from '~/apollo/queries/stories/stories';
import { Story, StoriesQueryVariables, StoryContent } from '~/types/graphql';
import StoriesItem from '~/components/Stories/StoriesItem.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';

const stories = ref<Story[]>([]);

let { pending: loading, data: response } = await request<{ stories: Story[] }, StoriesQueryVariables>(storiesQuery);
stories.value = response.value.stories;

const selectedStory = ref<StoryContent[] | null>(null);
const isStorySelected = ref(false);

function openStories(story: Story) {
  selectedStory.value = story.stories;
  isStorySelected.value = true;
}
</script>


