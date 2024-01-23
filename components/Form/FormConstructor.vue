<template>
  <div class="application__form grid__col-4">
    <div class="heading-group heading-group--form">
      <div class="heading-group__wrap">
        <h2 class="heading heading--h2">
          <slot name="name" />
        </h2>
      </div>
    </div>
    <form class="form">
      <fieldset class="form__fieldset">
        <label class="form__field-wrap form__field-wrap--car">
          <slot name="car-choose" />
        </label>
      </fieldset>
      <!--              <div class="catalog form__catalog" v-if="$device.isMobile && (offer || currentCar)">-->
      <!--                <catalog-item-large-mobile-form :is-form="true" :offer="offer || currentCar"/>-->
      <!--              </div>-->
      <!--              <form-credit-calculator installment @changePeriod="changePeriod" @changePayment="changePayment"-->
      <!--                                      :params="creditParams" :offer="offer || currentCar"/>-->
      <FormCreditCalculator :offer="null" :params="creditParams">
        <template #first-slider-name="{names}">
          {{names.installment}}
        </template>
      </FormCreditCalculator>
      <fieldset class="form__fieldset">
        <label class="form__field-wrap">
          <InputText placeholder="ФИО" class="form__field" type="text" :unstyled="true"/>
        </label>
        <label class="form__field-wrap">
          <InputText placeholder="Телефон" class="form__field" mask="phone" type="tel"/>
        </label>
        <label class="form__checkbox-wrap checkbox">
          <Checkbox class="form__checkbox visually-hidden"/>
          <nuxt-icon name="icon-checkmark"
                     class="checkbox__icon"/>
          <span class="form__checkbox-text">Подтверждаю наличие гражданства РФ</span>
        </label>
        <label class="form__checkbox-wrap checkbox">
          <Checkbox class="form__checkbox visually-hidden"/>
          <nuxt-icon name="icon-checkmark"
                     class="checkbox__icon"/>
          <span class="form__checkbox-text">Согласен на обработку
                    <a href="/privacy" class="form__checkbox-text-link" rel="nofollow" target="_blank">
                      персональных данных
                    </a>
                  </span>
        </label>
        <!--                <checkbox-form :error="error === 'agree'" @change="changeCheckbox($event, 'agree')" label="Согласен на"-->
        <!--                               link="обработку личных данных"/>-->
      </fieldset>
      <!--              <button-typical :loading="buttonDisabled" text="Оставить заявку"-->
      <!--                              button-class="button&#45;&#45;credit button&#45;&#45;form"/>-->
    </form>
  </div>
</template>

<script setup lang="ts">

import FormCreditCalculator from '~/components/Form/form-components/FormCreditCalculator.vue';
import { ref } from '#imports';

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