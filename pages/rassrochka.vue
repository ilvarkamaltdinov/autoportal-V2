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
          <FormConstructor :inputs="inputs">
            <template #name>
              Рассрочка
              <span class="heading__promo">0%</span>
            </template>
            <template #car-choose>
              <Button class="form__field">
                {{ 'Выбрать автомобиль' }}
              </Button>
              <nuxt-icon name="icon-form" class="form__car-icon"/>
            </template>
            <template #calculator>
              <FormCreditCalculator :offer="null" :params="creditParams">
                <template #first-slider-name="{names}">
                  {{ names.installment }}
                </template>
              </FormCreditCalculator>
            </template>
          </FormConstructor>

          <button class="application__choose-car grid__col-8">
            <nuxt-icon class="application__choose-car-icon" name="icon-form" />
            <span class="application__choose-car-text">Выберите автомобиль</span>
          </button>

          <ContentBlock class="application__terms grid__col-3">
            <template #content>
              <div class="application__terms-item">
                <div class="application__terms-item">
                  <div class="application__terms-number application__terms-number--stake"> 0% </div>
                  <div class="application__terms-text">Ставка по рассрочке</div>
                </div>
              </div>
            </template>
          </ContentBlock>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup lang="ts">
import FormCreditCalculator from '~/components/Form/form-components/FormCreditCalculator.vue';
import { ref } from '#imports';
import { Input } from '~/components/Form/FormConstructor.vue';
import validation from '~/composables/validation';
import ContentBlock from '~/components/TextContent/ContentBlock.vue';

const inputs = ref<Input[]>([
  {
    name: 'fullName',
    component: 'InputText',
    attrs: {
      type: 'text',
      placeholder: 'ФИО',
      class: 'form__field',
    },
    validationRule: validation.value.fullName.rule,
  },
  {
    name: 'phone',
    component: 'InputMask',
    attrs: {
      type: 'tel',
      placeholder: 'Телефон',
      mask: validation.value.phone.mask,
      class: 'form__field',
      autoClear: false
    },
    validationRule: validation.value.phone.rule,
  },
]);

const creditParams = ref({
  rangePeriodValues: {
    snap: true,
    //todo move in settings
    range: {
      'min': 2,
      '12': 6,
      '24': 12,
      '36': 24,
      '48': 36,
      '60': 48,
      '72': 60,
      '84': 72,
      'max': 84,
    }
  },
  rangePaymentValues: {
    snap: true,
    range: {
      'min': 0,
      '12': 10,
      '24': 20,
      '36': 30,
      '48': 40,
      '60': 50,
      '72': 60,
      '84': 70,
      'max': 80,
    }
  },
  period: 84,
  payment: 0,
});
</script>
