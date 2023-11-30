<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {Story} from '~/types/graphql';

const modules = ref([Navigation, Pagination, Autoplay]);
const pagination = ref({
  el: '.swiper--stories-modal .swiper-pagination',
  clickable: true,
  type: 'bullets',
  renderBullet: function (index: any, className: any) {
    return '<span class="' + className + '">' + '<span class="swiper-pagination-bar"></span>' + '<span class="swiper-pagination-progress"></span>' + '</span>';
  },
});

defineProps<{
  stories: Story['stories']
}>();
const close = inject('close');
</script>

<template>
  <div class="stories__modal_wrapper-wrap">
    <div class="overlay"></div>
    <div class="stories stories--modal">
      <div class="stories__modal-wrap">
        <!--TODO кнопка закрытия сториз нужна ли? и если нужна сделать больше z-index-->
        <button class="stories__close"
                @click="close()">
          <nuxt-icon class="stories__close-icon"
                    name="icon-close-s" />
        </button>
        <Swiper :modules="[Navigation, Pagination, Autoplay]"
                :space-between="16"
                :autoplay="true"
                :watch-slides-progress="true"
                :slides-per-view="1"
                :pagination="pagination"
                :navigation="{
                  nextEl: '.swiper--stories-modal .swiper-button-next',
                  prevEl: '.swiper--stories-modal .swiper-button-prev'
                }" class="swiper--stories-modal swiper--progress"
        >
          <SwiperSlide class="swiper-slide" v-for="story in stories" :key="story.id">
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
          <template #container-start>
            <div class="swiper-pagination"></div>
          </template>
          <template #container-end>
            <button class="swiper-button swiper-button-prev">
              <nuxt-icon class="swiper-button__icon"
                         name="icon-arrow"></nuxt-icon>
            </button>
            <button class="swiper-button swiper-button-next">
              <nuxt-icon class="swiper-button__icon"
                         name="icon-arrow"></nuxt-icon>
            </button>
          </template>
        </Swiper>
      </div>
    </div>
  </div>
</template>