<template>
  <main class="page-main">
    <div class="grid">
      <!--      <crumbs :crumbs="crumbs" />-->
    </div>
    <div class="grid grid--container">
      <section class="page-main__dealers dealers grid">
        <div class="heading-group heading-group--h1">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1">
              {{ title }}
              <span class="heading__promo"></span>
            </h1>
            <span class="heading-group__label">Партнеры {{ $settings.dealer_title }}</span>
          </div>
        </div>
        <Card v-for="dealer in dealers" :key="dealer.id" :dealer="dealer" class="grid__col-12">
          <template #header>
            {{ dealer.title }}
          </template>
          <template #short-description>
            {{ dealer.short_description }}
          </template>
          <template #right-corner>
            <Rating v-tippy="{
              content:`<div class='tippy__text'>Рейтинг дилера</div>`,
              animation:'scale',
              arrow: true,
              }"
                    :rating="dealer.rating"
                    :max="5"/>
          </template>
          <template #content>
            <div class="features__group" v-for="feature in contactItems(dealer)" :key="feature.title">
              <h3 class="heading heading--h3">{{ feature.title }}</h3>
              <ul class="features__list">
                <li class="features__item" v-for="item in feature.items" :key="item.content">
                  <template v-if="item.isLink">
                    <a :href="item!.href" target="_blank">{{ item.content }}</a>
                  </template>
                  {{ item.content }}
                </li>
              </ul>
            </div>
            <button v-if="dealer.slug === $route.params.dealer"
                    @click="showMore(dealer.slug)"
                    class="button--show">
              Подробнее о дилере
            </button>
            <nuxt-link v-else
                       :href="`/contact/${dealer.slug}`"
                       class="button--show">
              Подробнее о дилере
            </nuxt-link>
            <a v-if="dealer.site"
               class="button button--show button--show-link"
               :href="dealer.site"
               target="_blank">
              Сайт автоцентра
            </a>
          </template>
          <template #image>
            <div class="dealers__item-img-wrap">
              <NuxtImg
                  v-if="dealer.images[0]"
                  class="dealers__item-img lazyload"
                  :src="dealer.images[0].small"
                  format="webp"
                  densites="1x 2x"/>
            </div>
          </template>
        </Card>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useDealers } from '~/store/dealers';
import { storeToRefs } from 'pinia';
import Card from '~/components/Dealer/Card.vue';
import { Dealer } from '~/types/graphql';

const dealersStore = useDealers();
dealersStore.fetchDealers();
const { dealers } = storeToRefs(dealersStore);

//todo add modal to dealer
const contactItems = (dealer: Dealer) => [
  {
    title: 'Адрес',
    items: [
      {
        isLink: false,
        content: dealer.address
      },
      {
        isLink: false,
        content: `м. ${dealer.metro}`
      },
    ]
  },
  {
    title: 'Телефон',
    items: [
      {
        isLink: true,
        content: dealer.phone,
        href: dealer.phone.replace(/[^+\d]/g, '')
      }
    ]
  },
  {
    title: 'Режим работы',
    items: [
      {
        isLink: false,
        content: dealer.schedule
      }
    ]
  },
];
</script>
