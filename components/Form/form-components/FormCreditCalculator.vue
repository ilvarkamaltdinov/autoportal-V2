<script setup lang="ts">
import {OfferQuery} from '~/types/graphql';
import {computed, useNuxtApp} from '#imports';

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
    let creditTime = periodValue;
    let firstPay = paymentValue;

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
    <Slider v-model="periodValue"
                  :text="installment ? 'Период рассрочки:' :'Срок кредитования, мес.:'"
                  :values="params.rangePeriodValues"
                  :period="currentPeriod"
                  @changePeriod="changePeriod"/>
    <range-payment :sum="currentPaymentSum"
                   :value="String(paymentValue) + '%'"
                   :values="params.rangePaymentValues"
                   @changePayment="changePayment"/>
    <div class="form__total">
      <div class="form__total-label">Ваш платеж:</div>
      <div class="form__total-payment">
        {{ total || '-' }}
        <tippy-question text="Платеж является ориентировочным и зависит от конкретного банка и кредитной программы."/>
      </div>
    </div>
  </fieldset>
</template>

<style scoped>

</style>