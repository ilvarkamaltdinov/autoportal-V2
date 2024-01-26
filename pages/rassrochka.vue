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
            <span class="heading-group__label">Банк перезвонит вам в течение 15 минут</span>
          </div>
        </div>
        <div class="grid__col-12 grid grid--application">
          <form-installment :offer="offer" @showModal="isModalVisible = true"
                            @changePeriod="installmentPeriod = $event" @changePayment="installmentPayment = $event">
            <template #offer>
              <CatalogItem :offer="offer" view="long" v-if="offer && $device!.isMobile" class="catalog__item--form">
                <!--            todo fix-->
                <template #actions-button-left>{{null}}</template>
                <template #actions-button-long>{{null}}</template>
                <template #actions-button-right>{{null}}</template>
                <template #main-button>{{null}}</template>
                <template #secondary-button>{{null}}</template>
              </CatalogItem>
            </template>
          </form-installment>
          <CatalogItem :offer="offer" view="long" v-if="offer && !$device!.isMobile">
<!--            todo fix-->
            <template #actions-button-left>{{null}}</template>
            <template #actions-button-long>{{null}}</template>
            <template #actions-button-right>{{null}}</template>
            <template #main-button>{{null}}</template>
            <template #secondary-button>{{null}}</template>
          </CatalogItem>
          <button v-else class="application__choose-car grid__col-8" @click="isModalVisible = true">
            <nuxt-icon class="application__choose-car-icon" name="icon-form"/>
            <span class="application__choose-car-text">Выберите автомобиль</span>
          </button>

          <ApplicationBankCard class="grid__col-5">
            <template #logo>
              <NuxtImg src="/banks/logo-sovcom.svg" class="application__banks-img"/>
            </template>
            <template #image>
              <NuxtImg src="/banks/image-sovcom.webp"/>
            </template>
          </ApplicationBankCard>

          <ApplicationTerms :terms="terms"/>
        </div>
      </section>
      <div class="benefits grid__col-12">
        <Benefits type="installment"/>
      </div>
      <section class="page-main__text text grid__col-12">
        <h2 class="heading heading--h2">Об услуге</h2>
        <div class="grid">
          <ContentBlock class="grid__col-12">
            <template #content>
              <p class="text__p">
                На {{ $settings.dealer_title }} вы можете приобрести автомобиль в рассрочку без любых переплат и процентов.
              </p>
              <p class="text__p">
                Рассрочка является удобным способом покупки транспортного средства с пробегом, учитывая,
                что процентная ставка не начисляется. Рассрочка станет идеальным решением в случае
                погашения стоимости автомобиля за срок до 3 лет. Если же выплата всей суммы за 3 года
                обременительна для семейного бюджета, оптимальным решением станет
                <nuxt-link to="/credit">автокредит</nuxt-link>
                {{ $settings.credit_percent }} со скидкой {{ $settings.sale_credit }}.
              </p>
              <p class="text__p">
                Окончательное решение о предоставлении рассрочки принимается банками-партнерами {{ $settings.dealer_title }}.
              </p>
              <p class="text__p">
                Преимущества рассрочки {{ $settings.dealer_anchor }}
              </p>
              <ul class="text__list">
                <li class="text__list-item">Ставка {{ $settings.first_installment }}</li>
                <li class="text__list-item">Без первоначального взноса</li>
                <li class="text__list-item">Комплект резины в подарок</li>
              </ul>
            </template>
            <template #figure>
              <NuxtImg class="text__figure-img" src="figures/figure-2@2x.webp" />
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
import OfferSelection from '~/components/Modals/OfferSelection.vue';
import { Offer } from '~/types/graphql';
import { ref } from '#imports';
import { Terms } from '~/components/Application/ApplicationTerms.vue';
import { useNuxtApp } from '#app';
import { calculatorPayment } from '~/utils/filters';

const isModalVisible = ref(false);
const offer = ref<Offer | null>(null);

const installmentPeriod = ref('-');
const installmentPayment = ref('-');

const { $settings } = useNuxtApp();
const terms = computed<Terms[]>(() => [
  {
    text: 'Ставка по рассрочке',
    title: $settings.first_installment
  },
  {
    text: 'Срок рассрочки',
    title: installmentPeriod.value
  },
  {
    text: 'Ежемесячный платеж',
    title: installmentPayment.value === '-' ? '-': `${calculatorPayment(installmentPayment.value)} ₽`
  }
]);
</script>
