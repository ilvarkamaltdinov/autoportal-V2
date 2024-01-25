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
          <form-credit />
          <button class="application__choose-car grid__col-8">
            <nuxt-icon class="application__choose-car-icon" name="icon-form"/>
            <span class="application__choose-car-text">Выберите автомобиль</span>
          </button>

          <ApplicationBankCard class="grid__col-5">
            <template #logo>
              <NuxtImg src="/banks/logo-tinkoff.svg" class="application__banks-img application__banks-img--sovcom"/>
            </template>
            <template #image>
              <NuxtImg src="/banks/tinkoff.webp"/>
            </template>
          </ApplicationBankCard>

          <div class="application__terms grid__col-3">
            <div class="application__terms-item">
              <div class="application__terms-number application__terms-number--stake">от {{ $settings.credit_percent }}</div>
              <div class="application__terms-text">Ставка по кредиту</div>
            </div>
            <div class="application__terms-item">
              <div class="application__terms-number application__terms-number--payment">-</div>
              <div class="application__terms-text">Срок автокредита</div>
            </div>
            <div class="application__terms-item">
              <div class="application__terms-number application__terms-number--payment">-</div>
              <div class="application__terms-text">Ежемесячный платеж</div>
            </div>
          </div>
        </div>
      </section>
      <div class="benefits grid__col-12">
        <Benefits type="credit"/>
      </div>
      <section class="page-main__text text grid__col-12">
        <h2 class="heading heading--h2">Об услуге</h2>
        <div class="grid">
          <ContentBlock class="grid__col-12">
            <template #content>
              <h2 class="heading heading--h2 visually-hidden">
<!--                todo TODO тут текущий город-->
                Оформите выгодный автокредит {{ 'TODO тут текущий город' }}
              </h2>
              <p class="text__p">
                {{ $settings.dealer_title }} дает возможность оформить автокредит без первоначального взноса и пользоваться автомобилем уже сегодня. Мы выступаем в качестве кредитного брокера и осуществляем подбор проверенных автосалонов, выбираем банковские предложения с наиболее выгодными для клиента условиями.
                Для того чтобы воспользоваться услугой, вам достаточно выбрать понравившийся автомобиль из предлагаемого нами ассортимента и оставить заявку на автокредит. Оформление документации и подбор программы мы полностью берем на себя. Оформите кредит на авто в Москве прямо в автосалоне без посещения офиса банка.
              </p>
              <p class="text__p">
                После звонка кредитного эксперта приезжайте в автоцентр, пробуйте
                понравившийся автомобиль в рамках бесплатного тест-драйва и
                оформляйте автокредит прямо в салоне без необходимости обращения в
                отделение банка-партнера.
              </p>
              <p class="text__p">
                Преимущества автокредита {{$settings.dealer_anchor}}:
              </p>
              <ul class="text__list">
                <li class="text__list-item">
                  Низкая ставка {{ $settings.credit_percent }}
                </li>
                <li class="text__list-item">
                  Сумма кредита от {{ $settings.min_sum_credit }} ₽ до
                  {{ $settings.max_sum_credit }} ₽
                </li>
                <li class="text__list-item">
                  Срок кредита от {{ $settings.min_period_credit }} до
                  {{ $settings.max_period_credit }}
                </li>
                <li class="text__list-item">
                  Досрочное погашение без штрафов и комиссий
                </li>
                <li class="text__list-item">Первоначальный взнос {{ $settings.first_credit }}</li>
                <li class="text__list-item">Trade-In как первый взнос</li>
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
</template>
<script setup lang="ts">
import ApplicationBankCard from '~/components/Application/ApplicationBankCard.vue';
import ContentBlock from '~/components/TextContent/ContentBlock.vue';
</script>
