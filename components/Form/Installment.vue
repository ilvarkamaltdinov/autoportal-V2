<template>
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
</template>

<script setup lang="ts">
import FormCreditCalculator from '~/components/Form/form-components/FormCreditCalculator.vue';
import { ref } from '#imports';
import validation from '~/composables/validation';
import { Input } from '~/components/Form/FormConstructor.vue';

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