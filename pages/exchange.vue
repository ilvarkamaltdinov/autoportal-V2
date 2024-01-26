<template>
  <main class="page-main">
    <div class="grid">
      <!--			<crumbs :crumbs="crumbs" />-->
    </div>
    <div class="grid grid--container">
      <section class="page-main__application application grid">
        <div class="heading-group heading-group--h1">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1">{{ title }}</h1>
            <span class="heading-group__label">Автоцентр перезвонит вам в течение 15 минут</span>
          </div>
        </div>
        <div class="grid__col-12 grid grid--application">
          <form-tradein :offer="offer" @showModal="isModalVisible = true"
                        @changePeriod="installmentPeriod = $event" @changePayment="installmentPayment = $event">
            <template #offer>
              <CatalogItem :offer="offer" view="long" v-if="offer && $device!.isMobile" class="catalog__item--form">
                <!--            todo fix-->
                <template #actions-button-left>{{ null }}</template>
                <template #actions-button-long>{{ null }}</template>
                <template #actions-button-right>{{ null }}</template>
                <template #main-button>{{ null }}</template>
                <template #secondary-button>{{ null }}</template>
              </CatalogItem>
            </template>
          </form-tradein>
          <CatalogItem :offer="offer" view="long" v-if="offer && !$device!.isMobile">
            <!--            todo fix-->
            <template #actions-button-left>{{ null }}</template>
            <template #actions-button-long>{{ null }}</template>
            <template #actions-button-right>{{ null }}</template>
            <template #main-button>{{ null }}</template>
            <template #secondary-button>{{ null }}</template>
          </CatalogItem>
          <button v-else class="application__choose-car grid__col-8" @click="isModalVisible = true">
            <nuxt-icon class="application__choose-car-icon" name="icon-form"/>
            <span class="application__choose-car-text">Выберите автомобиль</span>
          </button>

          <ApplicationBankCard class="grid__col-5">
            <template #logo>
              <NuxtImg src="/banks/logo-tinkoff.svg" class="application__banks-img"/>
            </template>
            <template #image>
              <NuxtImg src="/banks/tinkoff.webp"/>
            </template>
          </ApplicationBankCard>

          <ApplicationTerms :terms="terms"/>
        </div>
      </section>
      <div class="benefits grid__col-12">
        <Benefits type="tradeIn"/>
      </div>
      <section class="page-main__text text grid__col-12">
        <h2 class="heading heading--h2">Об услуге</h2>
        <div class="grid">
          <ContentBlock class="grid__col-12">
            <template #content>
              <p class="text__p">
                Условия современной программы Trade-In авто подойдут для тех, кто хочет выгодно продать старый
                автомобиль и получить взамен новый, с доплатой. Авто-портал {{ $settings.dealer_title }} предоставляет
                возможность сотрудничества с множеством проверенных, надежных автосалонов Москвы. У нас вы найдете
                широкий ассортимент легковых автомобилей самых популярных марок и коммерческий транспорт
                Посетив наш портал, вы сможете подобрать транспортное средство, отвечающее вашим требованиям,
                ознакомиться с его техническим состоянием и совершить обмен авто с пробегом по системе Trade-In в Москве
                на выгодных условиях
              </p>
              <p class="text__p">
                Услуга Trade-In предполагает обмен Вашего старого автомобиля на более новый. Обмен
                позволяет
                сэкономить время на время затратной продаже своего авто, и обновить автомобиль за пару
                часов.
              </p>
              <p class="text__p">
                По приезду в автоцентр Ваш автомобиль проверят, оценят и предложат сумму к доплате в обе
                стороны. А выбрать автомобиль по вкусу из более чем 4000 проверенных авто, представленных
                на
                {{ $settings.dealer_title }}, будет совсем просто.
              </p>
              <p class="text__p">
                После выбора понравившейся модели оформляйте заявку на обмен и дождитесь звонка менеджера.
                Вам
                будет предложено подъехать в автоцентр для бесплатной технической диагностики, оценки и
                тест-драйва.
              </p>
            </template>
            <template #figure>
              <NuxtImg class="text__figure-img" src="figures/figure-2@2x.webp"/>
            </template>
          </ContentBlock>
        </div>
      </section>
    </div>
  </main>
  <Sidebar v-model:visible="isModalVisible" position="right" header="Выберите автомобиль" class="modal">
    <template #header>
      <div class="heading-group heading-group--modal">
        <div class="heading-group__wrap">
          <h2 class="heading heading--h1">Выберите автомобиль</h2>
        </div>
      </div>
    </template>
    <OfferSelection @choose="offer = $event.car; isModalVisible = false"/>
  </Sidebar>
</template>

<script setup lang="ts">
import ApplicationBankCard from '~/components/Application/ApplicationBankCard.vue';
import ContentBlock from '~/components/TextContent/ContentBlock.vue';
import { calculatorPayment, ref } from '#imports';
import { Offer } from '~/types/graphql';
import { useNuxtApp } from '#app';
import { Terms } from '~/components/Application/ApplicationTerms.vue';
import OfferSelection from '~/components/Modals/OfferSelection.vue';

const isModalVisible = ref(false);
const offer = ref<Offer | null>(null);

const installmentPeriod = ref('-');
const installmentPayment = ref('-');

const { $settings } = useNuxtApp();
const terms = computed<Terms[]>(() => [
  {
    text: 'Ставка по кредиту',
    title: $settings.credit_percent
  },
  {
    text: 'Срок рассрочки',
    title: installmentPeriod.value
  },
  {
    text: 'Ежемесячный платеж',
    title: installmentPayment.value === '-' ? '-' : `${calculatorPayment(installmentPayment.value)} ₽`
  }
]);
</script>
