<template>
  <article class="catalog__item" :class="classes">
    <div class="catalog__img">
      <slot name="slider">
        <CatalogItemImage :images="offer.images" :view="view"/>
      </slot>
    </div>
    <!--    TODO подумать как сделать лучше стилями этот блок-->
    <div class="catalog__info-wrap" v-if="!isMobile">
      <div class="catalog__info">
        <div class="catalog__title-wrap">
          <h3 class="catalog__heading">
            <slot name="heading">
              <nuxt-link to="/used/mark/model/123" class="catalog__title-link">
                <span class="catalog__title">
                  {{ offer.mark.title }} {{ offer.folder.title }}
                  <span>, {{ engineVolume(offer.engine_volume) }} </span>
                </span>
                <span class="catalog__year">{{ offer.year }}</span>
              </nuxt-link>
            </slot>
          </h3>
        </div>
        <div class="catalog__price-wrap">
          <div class="catalog__price">
            <slot name="price" :format="numberFormat" :postfix="'₽'">
              {{ numberFormat(offer.price) }} ₽
            </slot>
          </div>
          <div class="catalog__price-old">
            <slot name="price-old">
              {{ numberFormat(offer.price_old) }} ₽
            </slot>
          </div>
          <div class="catalog__credit-price">
            <slot name="price-credit">
<!--              todo fix me wrong price-->
              {{ creditPrice(offer.price) }} ₽ / мес. без взноса
            </slot>
          </div>
          <slot name="stock">
            <div class="stock stock--true" data-tippy-directive="" tabindex="0">
              В наличии
            </div>
          </slot>
        </div>
      </div>
      <div class="catalog__tech">
        <slot name="tech">
          <Rating :rating="offer.rating.rating_total" :max="10" />
          <ul class="catalog__tech-list">
            <li class="catalog__tech-item">
              {{ numberFormat(offer.run) }} км
            </li>
            <li class="catalog__tech-item">
              <!--              todo fixme предусмотреть электрички-->
              {{ offer.engine_power }} л.с.
            </li>
            <li class="catalog__tech-item">
              {{ offer.gearbox.title_short_rus }}
            </li>
            <li class="catalog__tech-item">
              {{ offer.engineType.title }}
            </li>
            <li class="catalog__tech-item">
              {{ offer.owner.title }}
            </li>
            <li class="catalog__tech-item">
              {{ offer.driveType.title }}
            </li>
          </ul>
        </slot>
      </div>
    </div>

    <div v-if="isMobile" class="catalog__title-wrap">
      <h3 class="catalog__heading">
        <slot name="heading">
          <nuxt-link to="/used/mark/model/123" class="catalog__title-link">
            <span class="catalog__title"> Hyundai Sonata <span>, {{ engineVolume(2) }} </span></span> <span
              class="catalog__year">2007</span>
          </nuxt-link>

        </slot>
      </h3>
    </div>
    <div v-if="isMobile" class="catalog__price-wrap">
      <div class="catalog__price">
        <slot name="price">
          {{ numberFormat(300000) }} ₽
        </slot>
      </div>
      <div class="catalog__price-old">
        <slot name="price-old">
          {{ numberFormat(400000) }} ₽
        </slot>
      </div>
      <div class="catalog__credit-price">
        <slot name="price-credit">
          {{ creditPrice(300000) }}₽ / мес. без взноса
        </slot>
      </div>
      <slot name="stock">
        <div class="stock stock--true" data-tippy-directive="" tabindex="0">
          В наличии
        </div>
      </slot>
    </div>
    <div v-if="isMobile" class="catalog__tech">
      <slot name="tech">
        <div class="rating" style="--rating-number: 80; --rating-color: #0DC268;" data-tippy-directive=""
             tabindex="0">
          {{ engineVolume(2) }}
        </div>
        <ul class="catalog__tech-list">
          <li class="catalog__tech-item">
            {{ numberFormat(179205) }} км
          </li>
          <li class="catalog__tech-item">
            137 л.с.
          </li>
          <li class="catalog__tech-item">АКПП</li>
          <li class="catalog__tech-item">Бензин
          </li>
          <li class="catalog__tech-item">2 владельца
          </li>
          <li class="catalog__tech-item">Передний
          </li>
        </ul>
      </slot>
    </div>
    <!--    TODO -->

    <div class="catalog__buttons">
      <div class="catalog__actions">
        <slot name="actions-button-long" v-if="view === 'long' && !isMobile">
          <ButtonAutoteka @click="onAutoteka"/>
        </slot>
        <slot name="actions-button-left">
          <ButtonFavorite @click="onFavoriteClick" :active="isFavorite"/>
        </slot>
        <slot name="actions-button-right">
          <Button class="button button--action button--call">
            <nuxt-icon class="button__icon" name="icon-call"/>
          </Button>
        </slot>
      </div>
      <div class="catalog__actions-main">
        <slot name="main-button">
          <Button class="button button--credit" @click="onCredit">
            Купить в кредит
          </Button>
        </slot>
        <slot name="secondary-button" v-if="view === 'long' && !isMobile">
          <Button class="button button--trade-in button--link" @click="onExchange">
            Trade-In
          </Button>
        </slot>
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
import CatalogItemImage from '~/components/Catalog/Item/Image.vue';
import { creditPrice, engineVolume, numberFormat } from '~/utils/filters';
import ButtonFavorite from '~/components/Button/ButtonFavorite.vue';
import { Offer } from '~/types/graphql';

const props = defineProps<{
  // todo fixme добавть тип вот ТАК
  view?: 'long' | 'short' ,
  offer?: Offer
}>();

const isFavorite = ref<boolean>(false);
const { isMobile } = useDevice();

function onFavoriteClick() {
  isFavorite.value = !isFavorite.value;
}

function onAutoteka() {
  console.log('onAutoteka');
}

function onExchange() {
  console.log('onExchange');
}

function onCredit() {
  console.log('onCredit');
}


const classes = computed(() => {
  let shortClasses = ['grid__col-4', 'catalog__item--vertical'];
  let longClasses = ['grid__col-8', 'catalog__item--desktop-l'];
  return props.view === 'long' && !isMobile ? longClasses : shortClasses;
});
</script>
