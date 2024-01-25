<template>
  <fieldset class="form__fieldset">
    <SliderOptions v-model="periodValue" class="range-period"
                   :options="params.rangePeriodValues"
                   @input="changePeriod">
      <template #option-label="{ option }">
        {{ option }}
      </template>
      <template #default>
        <slot name="first-slider-name" :names="{
          credit: 'Срок кредитования, мес.:',
          installment: 'Период рассрочки, мес.:',
        }">
          Срок кредитования, мес.:
        </slot>
      </template>
      <template #value="{ value }">
        {{ value }} мес.
      </template>
    </SliderOptions>
    <SliderOptions
        v-model="paymentValue"
        text="Первоначальный взнос:"
        class="range-payment"
        :options="params.rangePaymentValues"
        @input="changePayment">
      <template #option-label="{ option }">
        {{ option }} %
      </template>
      <template #default>
        Первоначальный взнос:
      </template>
      <template #value>
        {{ numberFormat(currentPaymentSum) || 0 }} ₽
      </template>
    </SliderOptions>
    <div class="form__total">
      <div class="form__total-label">Ваш платеж:</div>
      <div class="form__total-payment">
        {{ total || '-' }}
        <TippyQuestion text="Платеж является ориентировочным и зависит от конкретного банка и кредитной программы."/>
      </div>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { OfferQuery } from '~/types/graphql';
import { computed, useNuxtApp } from '#imports';
import SliderOptions from '~/components/Inputs/SliderOptions.vue';

//todo PEREPIWI ETO :D
export type FormCreditCalculatorProps = {
  offer: OfferQuery['offer'];
  params: {
    rangePeriodValues: {
      range: {
        [k: string]: number
      }
    },
    rangePaymentValues: {
      snap: boolean,
      range: {
        [k: string]: number
      }
    },
    period: number,
    payment: number,
  }
  installment: boolean;
}

const props = withDefaults(defineProps<FormCreditCalculatorProps>(), {
  installment: false,
});

const total = ref<string | null>(null);
const periodValue = ref(props.params.period);
const paymentValue = ref(props.params.payment);
const paymentPriceValue = ref<string | null>(null);
const emit = defineEmits(['changePeriod', 'changePayment']);

const { $settings } = useNuxtApp();
const percent = computed(() => {
  return Number($settings?.credit_percent.replace('%', ''));
});
const currentPaymentSum = computed(() => {
  if (props.offer) {
    return props.offer.price * paymentValue.value / 100;
  }
});

function calculate() {
  // todo from utils
  if (props.offer) {
    let creditProc: number = props.installment ? 0.001 : percent.value;
    let car_price = props.offer.price;
    let creditTime = periodValue.value;
    let firstPay = paymentValue.value;

    let A = 0;
    let i = creditProc / 12 / 100;
    let n = creditTime;
    let S;
    if (firstPay !== 0) {
      S = car_price - (car_price * firstPay) / 100;
    } else {
      S = car_price;
    }
    paymentPriceValue.value = ((car_price * firstPay) / 100).toString() + ` руб. (${firstPay}%)`;
    let K = 0;
    if (car_price) {
      K = (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
      A = Math.round(K * S);
      total.value = String(A).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' ₽';
      //для отображения в блоке рядом с выбранным банком
      // this.setPeriodValue(this.periodValue); todo from state
      // this.setMonthPaymentValue(A);
      //
    }
  }
  emit('changePeriod', periodValue);
  emit('changePayment', paymentPriceValue);
}

function changePeriod(value: string) {
  periodValue.value = +value;
  calculate();
}

function changePayment(value: string) {
  paymentValue.value = +value;
  calculate();
}

watch([() => props.offer, () => percent], () => {
  calculate();
});
</script>