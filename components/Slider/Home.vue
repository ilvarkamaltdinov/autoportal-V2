<template>
  <swiper class="swiper swiper--progress swiper--index"
          :slides-per-view="1"
          slide-active-class="swiper-slide-visible"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :modules="[Autoplay, Pagination, Navigation]"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false
          }"
          :pagination="{
            clickable: true,
            // renderBullet: renderBullet
          }"
          :space-between="50">
    <swiper-slide v-for="slide in slides" :key="slide.id">
      <a v-if="slide.telegram"
         :href="'TODO'"
         class="slider-index__item">
        <div class="slider-index__media-wrap">
          <div class="slider-index__media">
            <PictureHomeSlide classes="slider-index__media slider-index__media--element lazyload"
                              aos="fade-up"
                              :small="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@1x.png`)}`"
                              :small-webp="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@1x.webp`)}`"
                              :big="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.png`)}`"
                              :big-webp="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.webp`)}`"/>
            <PictureHomeSlide classes="slider-index__media slider-index__media--car lazyload"
                              aos="fade-right"
                              :small="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@1x.png`)}`"
                              :small-webp="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@1x.webp`)}`"
                              :big="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.png`)}`"
                              :big-webp="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.webp`)}`"/>
          </div>
        </div>
        <div class="slider-index__text-wrap">
          <div class="slider-index__circle"
               data-aos="fade-up-left"
               data-aos-duration="750"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"></div>
          <div class="slider-index__text">
            <div class="slider-index__heading">{{ slide.heading }}</div>
            <div class="slider-index__content">{{ slide.content }}</div>
          </div>
        </div>
      </a>
      <nuxt-link v-else
                 :to="slide.link"
                 :class="{'slider-index__item--black': slide.id === 10}"
                 class="slider-index__item">
        <div class="slider-index__media-wrap">
          <div class="slider-index__media">
            <PictureHomeSlide classes="slider-index__media slider-index__media--element lazyload"
                              aos="fade-up"
                              :small="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@1x.png`)}`"
                              :small-webp="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@1x.webp`)}`"
                              :big="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.png`)}`"
                              :big-webp="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.webp`)}`"/>

            <PictureHomeSlide classes="slider-index__media slider-index__media--car lazyload"
                              aos="fade-right"
                              :small="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@1x.png`)}`"
                              :small-webp="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@1x.webp`)}`"
                              :big="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.png`)}`"
                              :big-webp="`${(`/img/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.webp`)}`"/>
          </div>
        </div>
        <div class="slider-index__text-wrap">
          <div class="slider-index__circle"
               data-aos="fade-up-left"
               data-aos-duration="750"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"></div>
          <div class="slider-index__text">
            <div class="slider-index__heading">{{ slide.heading }}</div>
            <div class="slider-index__content">{{ slide.content }}</div>
          </div>
        </div>
      </nuxt-link>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import PictureHomeSlide from '~/components/Picture/HomeSlide.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

type SlideType = {
  id: number
  heading: string
  content: string
  link?: string
  telegram?: boolean
}

const { $settings } = useNuxtApp();
const slides = computed<SlideType[]>(() => {
  return [
    {
      id: 6,
      heading: 'Супер-автокредит от TODO годовых',
      content: 'Скидка TODO ₽, одобрение по паспорту и В/У, взнос от 0%',
      link: '/',
    },
    {
      id: 7,
      heading: ' Читайте наш Telegram-канал',
      content: 'Последние поступления, акции, новости',
      telegram: true,
    },
    {
      id: 8,
      heading: 'Обменяй авто по Trade-In',
      content: 'Выгода TODO ₽, рыночная цена, оформление 30 мин.',
      link: '/',
    },
    {
      id: 1,
      heading: 'Рассрочка 0% от Совкомбанка',
      content: 'Успей купить авто на выгодных условиях',
      link: '/',
    },
    {
      id: 2,
      heading: 'Автокредит ВТБ',
      content: `Лучшие условия для клиентов ${$settings!.dealer_anchor}`,
      link: '/',
    },
    {
      id: 3,
      heading: 'Рассрочка от Сбера и Сетелем',
      content: `Лучшие условия для клиентов ${$settings!.dealer_anchor}`,
      link: '/',
    },
    {
      id: 4,
      heading: 'Заморозили цены и ставки',
      content: 'Успей купить автомобиль по старой цене',
      link: '/',
    },
    {
      id: 5,
      heading: '2-й комплект резины в подарок',
      content: 'При покупке автомобиля в кредит',
      link: '/',
    }
  ];
});
const onSwiper = (swiper: any) => {
  AOS.init();
};
const renderBullet = (index: any, className: any) => {
  return (
    '<span class="' + className + '">' +
      '<span class="swiper-pagination-bar"></span>' +
      '<span class="swiper-pagination-progress"></span>' +
      '</span>'
  );
};
const onSlideChange = () => {
  document.querySelectorAll('.swiper-slide-next .slider-index__circle')
    .forEach((val: any) => {
      val.style.display = 'none';
      val.classList.remove('aos-init', 'aos-animate');
      val.style.display = 'block';
      val.classList.add('aos-init', 'aos-animate');
    });
  AOS.init();
};

</script>

