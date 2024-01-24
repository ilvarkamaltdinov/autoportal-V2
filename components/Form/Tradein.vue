<template>
  <div class="application__form grid__col-4">
    <FormConstructor :inputs="inputs">
      <template #car-choose>
        <Button class="form__field" @click="isModalVisible = true">
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
  </div>
  <Sidebar v-model:visible="isModalVisible" position="right" header="Выберите автомобиль" class="modal">
    <template #header>
      <div class="heading-group heading-group--modal">
        <div class="heading-group__wrap">
          <h2 class="heading heading--h1">Выберите автомобиль</h2>
        </div>
      </div>
    </template>
    <OfferSelection/>
  </Sidebar>
</template>

<script setup lang="ts">
import FormCreditCalculator from '~/components/Form/form-components/FormCreditCalculator.vue';
import { ref } from '#imports';
import validation from '~/composables/validation';
import { Input } from '~/components/Form/FormConstructor.vue';
import OfferSelection from '~/components/Modals/OfferSelection.vue';

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

const isModalVisible = ref(false);

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