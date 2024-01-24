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
          <form-installment />
          <button class="application__choose-car grid__col-8">
            <nuxt-icon class="application__choose-car-icon" name="icon-form" />
            <span class="application__choose-car-text">Выберите автомобиль</span>
          </button>

<!--          todo mb ne content block idk-->
          <ContentBlock class="application__terms grid__col-3">
            <template #content>
              <div class="application__terms-item">
                <div class="application__terms-number application__terms-number--stake"> это </div>
                <div class="application__terms-text">моковые данные</div>
              </div>
              <div class="application__terms-item">
                <div class="application__terms-number application__terms-number--stake"> их </div>
                <div class="application__terms-text">нужно сделать вместе с выбором оффера</div>
              </div>
                <div class="application__terms-item">
                  <div class="application__terms-number application__terms-number--stake"> и найти </div>
                  <div class="application__terms-text">замену для библиотеки</div>
                </div>
            </template>
          </ContentBlock>

          <ApplicationBankCard>
            <template #logo>
              <NuxtImg src="/banks/logo-tinkoff.svg" class="application__banks-img application__banks-img--sovcom" />
            </template>
            <template #image>

            </template>
          </ApplicationBankCard>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup lang="ts">
import ContentBlock from '~/components/TextContent/ContentBlock.vue';
import ApplicationBankCard from '~/components/Application/ApplicationBankCard.vue';
</script>
