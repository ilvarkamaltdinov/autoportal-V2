<template>
  <ul class="featured__list grid__col-12 grid grid--featured featured__banks">
    <BankCard v-for="(bank, key) in featuredBanks" :key="key" :class="bank.extraClass" :slug="bank.bank!.slug">
      <template #title>
        {{ bank.bank!.name }}
      </template>
      <template #text>
        от {{ bank.bank!.rate }} %
      </template>
      <template #image>
        <NuxtImg :src="`/img/featured/featured-${bank.pictureNumber}@2x.png`" densities="1x 2x" format="webp"
                 class="featured__img lazyload"/>
      </template>
    </BankCard>
  </ul>
  <section class="banks grid__col-12">
    <h2 class="heading heading--h2">Рейтинг банков</h2>
    <ul class="banks__list grid">
      <li class="banks__item"
          v-for="bank in banks"
          :key="bank.id">
        <div class="banks__main">
          <img class="banks__img"
               :src="bank.image"
               alt=""/>
          <Rating v-tippy="{
                    content:`<div class='tippy__text'>Рейтинг банка</div>`,
                    animation:'scale',
                    arrow: true,
                    }" bank :max="100" :rating="bank.rating!"/>
        </div>
        <ul class="banks__info">
          <li class="banks__info-item">
            Заявок в месяц
            <span class="banks__info-number">{{ bank.request }}</span>
          </li>
          <li class="banks__info-item">
            Одобрено автокредитов
            <span class="banks__info-number">{{ bank.approval }}</span>
          </li>
          <li class="banks__info-item">
            Процентная ставка
            <span class="banks__info-number banks__info-number--stake">{{ bank.rate }}%</span>
          </li>
        </ul>
        <button
            class="button button--credit"
            @click="$router.push(`/credit/${bank.slug}`)">
          Оставить заявку
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useBanks } from '~/store/banksStore';
import { storeToRefs } from 'pinia';
import { UnwrapRef } from 'vue';
import BankCard from '~/components/Banks/BankCard.vue';

const banksStore = useBanks();
banksStore.fetchBanks();
const { banks } = storeToRefs(banksStore);

const featuredBanksNames = computed(() => ['tinkoff-bank', 'sberbank', 'raiffeisen-bank', 'alfa-bank', 'sovkombank', 'vtb'] as const);
type Bank = {
  [key in UnwrapRef<typeof featuredBanksNames>[number]]: { class: string, numberOfPicture: number }
}
const featuredBanksExtraData = computed((): Bank => ({
  'tinkoff-bank': {
    class: 'featured__item--sedan featured__item--tinkoff',
    numberOfPicture: 7
  },
  'sovkombank': {
    class: 'featured__item--family featured__item--sovcom',
    numberOfPicture: 8,
  },
  'vtb': {
    class: 'featured__item--women featured__item--vtb',
    numberOfPicture: 9,
  },
  'sberbank': {
    class: 'featured__item--business featured__item--sber',
    numberOfPicture: 10,
  },
  'alfa-bank': {
    class: 'featured__item--allroad featured__item--alfa',
    numberOfPicture: 11,
  },
  'raiffeisen-bank': {
    class: 'featured__item--taxi featured__item--reif',
    numberOfPicture: 12,
  },
}));
const featuredBanks = computed(() => featuredBanksNames.value.map((slug) => {
  const bankBySlug = banksStore.getBySlug(slug);
  return {
    bank: bankBySlug,
    extraClass: featuredBanksExtraData.value[slug].class,
    pictureNumber: featuredBanksExtraData.value[slug].numberOfPicture
  };
}));
</script>
