<template>
  <article class="catalog__item catalog__item--vertical" :class="{'grid__col-4':!slide, 'swiper-slide':slide}">
    <a @click.prevent="$emit('click')" class="catalog__img brazzers-daddy">
      <img :data-src="coverSrc"
           @load="onImgLoad"
           class="lazyload"
           :class="class_name"
           alt="" src=""/>
      <div class="tmb-wrap">
        <div class="tmb-wrap-table"
             @mouseleave="mouseLeave">
          <div v-for="(photo, index) in photos"
               v-show="index <= limit"
               :class="{'active':index === activeTmb}"
               @mouseover="mouseOver(photo!.small_webp!, index)">
          </div>
        </div>
      </div>
    </a>
    <!--    <catalog-item-hover-slider @click="linkClick"-->
    <!--                               :is-form="isForm"-->
    <!--                               :url="currentUrl"-->
    <!--                               :offer="offer"/>-->
    <div class="catalog__info">
      <div class="catalog__title-wrap">
        <h3 class="catalog__heading">
          <a @click.prevent="$emit('click')" class="catalog__title-link">
            <span class="catalog__title">
                <span> {{ offer!.mark!.title }} {{ offer!.folder!.title }}</span>,
                <span> {{ engineVolume(offer!.engine_volume!) }}</span>
            </span>
            <span class="catalog__year">
                {{ offer.year }}
            </span>
          </a>
        </h3>
      </div>
      <!--      <catalog-item-title @click="linkClick"-->
      <!--                          :is-form="isForm"-->
      <!--                          :url="currentUrl"-->
      <!--                          :offer="offer"/>-->
      <div class="catalog__price-wrap">
        <div class="catalog__price">{{ numberFormat(offer.price) }} ₽</div>
        <!--        <div class="catalog__price-old">{{ numberFormat(offer.price_old) }}</div>-->
        <div class="catalog__credit-price">{{ creditPrice(offer.price) }} ₽ / мес. без взноса</div>

        <div v-if="offer!.category_enum !== 'europe' && !hideStock">
          <div class="stock stock--false" v-if="offer.is_stock && !isNew" v-tippy="{
        content: `<div class='tippy__text'>Ввиду ограниченной площади автоцентра многие автомобили находятся на центральной стоянке. Доставка в автоцентр бесплатная в день обращения. Подробности уточняйте по телефону.</div>`,
        animation: 'scale',
        arrow: true,
      }">
            Центральная стоянка
          </div>
          <div class="stock stock--new" v-else-if="isNew" v-tippy="{
        content: `<div class='tippy__text'>Автомобиль новый, в наличии в автоцентре.</div>`,
        animation: 'scale',
        arrow: true,
      }">
            Новый
          </div>
          <div class="stock stock--true" v-else v-tippy="{
        content: `<div class='tippy__text'>В наличии в автоцентре.</div>`,
        animation: 'scale',
        arrow: true,
      }">
            В наличии
          </div>
        </div>
        <div v-else-if="offer!.category_enum === 'europe'">
          <div class="stock stock--true" v-tippy="{
        content: `<div class='tippy__text'>Доставим этот автомобиль из Европы за 14 дней.</div>`,
        animation: 'scale',
        arrow: true,
      }">
            Из Европы
          </div>
        </div>

      </div>
      <!--      <catalog-item-price :category-enum="offer.category_enum" :is-stock="offer.is_stock" :vin="offer.vin"-->
      <!--                          :price="offer.price" :isNew="isNew" :price-old="offer.price_old"/>-->
    </div>
        <div class="catalog__tech"
             :class="{'catalog__tech--no-buttons':!hasButtons}">
          <Rating v-tippy="{
    				animation:'scale',
    				arrow: true,
    			}"
                      @click="ratingClick"
                      :rating="offer.rating"/>
          <CatalogItemTechList :offer="offer"/>
        </div>
        <CatalogItemButtons
            :is-form="isForm"
            :choose="choose"
            v-if="hasButtons"
            :offer="offer"/>
  </article>
</template>
<script setup lang="ts">
import {creditPrice, engineVolume, numberFormat} from '~/helpers/filters';
import CatalogItemTechList from '~/components/Catalog/CatalogItem/CatalogItemComponents/CatalogItemTechList.vue';
import {Offer} from '~/types/graphql';
import CatalogItemButtons from '~/components/Catalog/CatalogItem/CatalogItemComponents/CatalogItemButtons.vue';

type DesktopSmallProps = {
    isForm?: boolean,
    choose?: boolean,
    hasButtons?: boolean,
    slide?: boolean,
    offer: Offer,
    hideStock?: boolean,
}

const props = withDefaults(defineProps<DesktopSmallProps>(), {
  hideStock: false,
  hasButtons: true,
  slide: false,
  choose: false,
  isForm: false
});

const activeTmb = ref<number>(0);
const class_name = ref('load');
const isLoaded = false;
const limit = ref(7);
const forceCoverPhoto = ref<string>('');

const placeholderUrl = computed(() => props.offer!.images![0]!.small_webp);
const photos = computed(() => props.offer.images);
const coverSrc = computed(() => {
  return forceCoverPhoto.value
    ? forceCoverPhoto.value
    : photos!.value!.length > 0
      ? photos!.value![0]!.small_webp
      : placeholderUrl.value;
});

const isNew = computed(() => {
  return props.offer!.run! <= 100 && props.offer!.owner!.number <= 1;
});

const onImgLoad = () => {
  class_name.value = 'loaded';
};
const mouseOver = (photo: string, index: number) => {
  activeTmb.value = index;
  if (forceCoverPhoto.value !== '') {
    class_name.value = 'load';
  }
  forceCoverPhoto.value = photo;
};
const mouseLeave = () => {
  activeTmb.value = 0;
  forceCoverPhoto.value = '';
  class_name.value = 'loaded';
};

function ratingClick() {
  console.log('click');
}

</script>
