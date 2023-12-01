<template>
  <ul class="featured__list grid__col-12 grid grid--featured featured__banks">
    <BankCard v-for="(bank, key) in featuredBanks" :key="key" :class="bank!.class" :slug="bank.slug">
      <template #title>
        {{ bank.name }}
      </template>
      <template #text>
        от {{ bank.rate }} %
      </template>
      <template #image>
        <NuxtImg :src="`/img/featured/featured-${bank.image}@2x.png`" densities="1x 2x" format="webp"
                 class="featured__img lazyload" />
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
               :src="bank.image!"
               alt=""/>
          <Rating v-tippy="{
                    content:`<div class='tippy__text'>Рейтинг банка</div>`,
                    animation:'scale',
                    arrow: true,
                    }" bank :max="100" :rating="bank.rating!"/>
        </div>
        <ul class="banks__info">
          <li class="banks__info-item">Заявок в месяц
            <span class="banks__info-number">{{ bank.request }}</span>
          </li>
          <li class="banks__info-item">Одобрено автокредитов
            <span class="banks__info-number">{{ bank.approval }}</span>
          </li>
          <li class="banks__info-item">Процентная ставка
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
import BankCard from '~/components/Banks/BankCard.vue';
import {requestBanks} from '~/helpers/request';
import {Bank, featuredBank} from '~/app/types/banks';
import Template from '~/components/Modals/Template.vue';

const route = useRoute();
const banks = ref<Bank[]>();

async function getBanks() {
  const {data} = await requestBanks();
  banks.value = data.value.banks;
}


const featuredBanksLocal = [
  {
    slug: 'tinkoff-bank',
    class: 'featured__item--sedan featured__item--tinkoff',
    image: '7'
  },
  {
    slug: 'sovkombank',
    class: 'featured__item--family featured__item--sovcom',
    image: '8'
  },
  {
    slug: 'vtb',
    class: 'featured__item--women featured__item--vtb',
    image: '9'
  },
  {
    slug: 'sberbank',
    class: 'featured__item--business featured__item--sber',
    image: '10'
  },
  {
    slug: 'alfa-bank',
    class: 'featured__item--allroad featured__item--alfa',
    image: '11'
  },
  {
    slug: 'raiffeisen-bank',
    class: 'featured__item--taxi featured__item--reif',
    image: '12'
  }
];

const featuredBanks = computed(() => {
  return featuredBanksLocal.map((featuredBank: featuredBank) => {

    let bank = {...banks.value?.find(bank => bank.slug === featuredBank.slug)};
    if (bank) {
      return {...bank, ...featuredBank};
    }
  });
});

watch(route, async () => {
  await getBanks();
}, {immediate: true});

</script>
