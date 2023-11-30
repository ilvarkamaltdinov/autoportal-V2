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
  <ul class="stories__list"
      v-if="$device.isMobileOrTablet">
    <StoriesItem :story="item"
                  @click="openStories(item)"
                  v-for="item in stories"
                  :key="item.id" />
  </ul>
<!--  todo add skeleton-->
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
  <button v-if="!$device.isMobileOrTablet"
          ref="prev"
          class="swiper-button swiper-button-prev">
    <nuxt-icon class="swiper-button__icon"
              name="icon-arrow" />
  </button>
  <button v-if="!$device.isMobileOrTablet"
          ref="next"
          class="swiper-button swiper-button-next">
    <nuxt-icon class="swiper-button__icon"
              name="icon-arrow" />
  </button>
  <ModalV2 v-if="storyClick">
      <div class="stories__modal-wrap">
        <!--TODO кнопка закрытия сториз нужна ли? и если нужна сделать больше z-index-->
        <button class="stories__close"
                @click="closeStories()">
          <svg-icon class="stories__close-icon"
                    name="icon-close-s" />
        </button>
        <Swiper :modules="[Navigation, Pagination, Autoplay]"
                :space-between="16"
                :autoplay="true"
                :watch-slides-progress="true"
                :slides-per-view="1"
                :pagination="{
                }"
                :navigation="{
                  nextEl: '.swiper--stories-modal .swiper-button-next',
                  prevEl: '.swiper--stories-modal .swiper-button-prev'
                }"
        >
          <div class="swiper swiper--progress swiper--stories-modal">
            <div class="swiper-pagination"></div>
            <div class="swiper-wrapper">
              <SwiperSlide class="swiper-slide"
                   v-for="story in stories[0].stories"
                   :key="story.id">
                <div class="stories__modal">
                  <div class="stories__offer">
                    <h2 class="heading heading--h2">{{ story.title }}</h2>
                    <p class="stories__modal-text"> {{ story.body }}</p>
                  </div>
                  <div class="stories__modal-img-wrap">
                    <picture-component
                        classes="stories__modal-img lazyload"
                        :small="story.image.small"
                        :small-webp="story.image.small_webp"
                        :big="story.image.medium"
                        :big-webp="story.image.medium_webp" />
                  </div>
                  <nuxt-link @click.native="buttonClick"
                             :to="story.button_link"
                             class="button button--credit">
                    {{ story.button_title }}
                  </nuxt-link>
                </div>
              </SwiperSlide>
            </div>
            <button class="swiper-button swiper-button-prev">
              <nuxt-icon class="swiper-button__icon"
                         name="icon-arrow"></nuxt-icon>
            </button>
            <button class="swiper-button swiper-button-next">
              <nuxt-icon class="swiper-button__icon"
                         name="icon-arrow"></nuxt-icon>
            </button>
          </div>
        </Swiper>
<!--        <div class="swiper swiper&#45;&#45;progress swiper&#45;&#45;stories-modal">-->
<!--          <div class="swiper-pagination"></div>-->
<!--          <div class="swiper-wrapper">-->
<!--            <div class="swiper-slide"-->
<!--                 v-for="story in stories"-->
<!--                 :key="story.id">-->
<!--              <div class="stories__modal">-->
<!--                <div class="stories__offer">-->
<!--                  <h2 class="heading heading&#45;&#45;h2">{{ story.title }}</h2>-->
<!--                  <p class="stories__modal-text"> {{ story.body }}</p>-->
<!--                </div>-->
<!--                <div class="stories__modal-img-wrap">-->
<!--                  <picture-component-->
<!--                      classes="stories__modal-img lazyload"-->
<!--                      :small="story.image.small"-->
<!--                      :small-webp="story.image.small_webp"-->
<!--                      :big="story.image.medium"-->
<!--                      :big-webp="story.image.medium_webp" />-->
<!--                </div>-->
<!--                <nuxt-link @click.native="buttonClick"-->
<!--                           :to="story.button_link"-->
<!--                           class="button button&#45;&#45;credit">-->
<!--                  {{ story.button_title }}-->
<!--                </nuxt-link>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <button class="swiper-button swiper-button-prev">-->
<!--            <nuxt-icon class="swiper-button__icon"-->
<!--                      name="icon-arrow"></nuxt-icon>-->
<!--          </button>-->
<!--          <button class="swiper-button swiper-button-next">-->
<!--            <nuxt-icon class="swiper-button__icon"-->
<!--                      name="icon-arrow"></nuxt-icon>-->
<!--          </button>-->
<!--        </div>-->
      </div>
  </ModalV2>
</template>
<script setup lang="ts">
import {request} from '~/helpers/request';
import {stories as storiesQuery} from '~/apollo/queries/stories/stories';
import {Story, StoriesQueryVariables} from '~/types/graphql';
import StoriesItem from '~/components/Stories/StoriesItem.vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import ModalV2 from '~/components/ModalsV2/ModalV2.vue';

const stories = ref<Story[]>([]);

let {pending: loading, data: response} = await request<{stories: Story[]}, StoriesQueryVariables>(storiesQuery);
stories.value = response.value.stories;
const storyClick = ref(false);
function openStories() {
  console.log('open');
  storyClick.value = true;
}
</script>


