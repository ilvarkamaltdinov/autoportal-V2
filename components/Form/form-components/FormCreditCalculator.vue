<script setup lang="ts">
import { OfferQuery } from '~/types/graphql';
import { computed, useNuxtApp } from '#imports';
import Slider from '@vueform/slider';

type FormCreditCalculatorProps = {
  offer: OfferQuery['offer'];
  params: object;
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

const percent = computed(() => {
  const { $settings } = useNuxtApp();
  return Number($settings?.credit_percent.replace('%', ''));
});
const currentPeriod = computed(() => {
  return String(periodValue.value) + ' мес.';
});
const currentPaymentSum = computed(() => {
  if (props.offer) {
    return props.offer.price * paymentValue.value / 100;
  }
});

function calculate() {
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
  //для ЦРМКИ
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

<template>
  <fieldset class="form__fieldset">
    <div class="form__block form__block--range range">
      <label class="form__range-wrap">
        <span class="form__range-name">Срок кредитования, мес.:</span>
        <span class="form__range-value">{{ periodValue }}</span>
      </label>
      <Slider v-model="periodValue" class="range-period"
              :text="installment ? 'Период рассрочки:' :'Срок кредитования, мес.:'"
              :options="params.rangePeriodValues"
              :period="currentPeriod"
              @changePeriod="changePeriod"/>
      <div class="irs-grid">
        <div :class="`irs-grid-text-${parseInt(k) || k}`" v-for="([k,v], index) in Object.entries(params.rangePeriodValues.range)">
          {{ v }}
        </div>
      </div>
    </div>
    <div class="form__block form__block--range range">
      <label class="form__range-wrap">
        <span class="form__range-name">Первоначальный взнос:</span>
        <!--TODO в будущем переписать toCurrency и исправить этот костыль -->
        <span class="form__range-value" v-if="currentPaymentSum"> {{ currentPaymentSum }}</span>
        <span class="form__range-value" v-else> 0 ₽</span>
      </label>
      <Slider
          class="range-payment"
          :options="params.rangePaymentValues"
          @input="changePayment">
      </Slider>
    </div>
    <div class="form__total">
      <div class="form__total-label">Ваш платеж:</div>
      <div class="form__total-payment">
        {{ total || '-' }}
        <TippyQuestion text="Платеж является ориентировочным и зависит от конкретного банка и кредитной программы."/>
      </div>
    </div>
  </fieldset>
</template>

<style scoped>

</style>