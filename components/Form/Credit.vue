<template>
  <div class="heading-group heading-group--form">
    <div class="heading-group__wrap">
      <h2 class="heading heading--h2">
        Автокредит от {{ $settings.credit_percent }}
        <span class="heading__promo">
          </span>
      </h2>
      <!-- <span class="heading-group__label">Получите одобрение за 5 минут</span> -->
    </div>
  </div>
  <form class="form" @submit.prevent="submitForm()">
    <fieldset v-if="hasChose" class="form__fieldset">
      <!--      'form__field-wrap&#45;&#45;error': error === 'invalid_car'-->
      <label
          :class="{ 'form__field-wrap--car-active': modalOfferSelection_offer }"
          class="form__field-wrap form__field-wrap--car ">
        <button class="form__field" @click.prevent="useModals().setModal(modalPayloadCredit)">
          {{ modalOfferSelection_offer ? modalOfferSelection_offer.name : 'Выбрать автомобиль' }}
          <span v-if="modalOfferSelection_offer">, {{ numberFormat(modalOfferSelection_offer.price) }}</span>
        </button>
        <nuxt-icon name="icon-form" class="form__car-icon"/>
      </label>
    </fieldset>
    <div class="catalog form__catalog" v-if="$device.isMobile && (offer || currentCar)">
          <catalog-item-large-mobile-form :is-form="true" :offer="offer || currentCar"/>
        </div>
        <FormCreditCalculator v-if="calculator"
                                :params="creditParams" :offer="offer || currentCar"/>
<!--        <fieldset class="form__fieldset">-->
<!--          <label class="form__field-wrap" :class="nameClass">-->
<!--            <inputs-input placeholder="ФИО" @input="handlerInput('name')" v-model="form.name.value" @focus="onFocus"-->
<!--                          @focusout="onFocusOut" type="text"/>-->
<!--          </label>-->
<!--          <label class="form__field-wrap" :class="dateClass">-->
<!--            <inputs-input placeholder="Дата рождения" @input="handlerInput('date')"-->
<!--                          @dateMaskComplete="form.date.valid = true" @onincomplete="form.date.valid = null"-->
<!--                          v-model="form.date.value"-->
<!--                          @focus="onFocus" @focusout="onFocusOut" mask="date" type="tel"/>-->
<!--          </label>-->
<!--          <label class="form__field-wrap" :class="phoneClass">-->
<!--            <inputs-input placeholder="Телефон" @input="handlerInput('phone')" @phoneMaskComplete="form.phone.valid = true"-->
<!--                          @onincomplete="form.phone.valid = null" v-model="form.phone.value" @focus="onFocus"-->
<!--                          @focusout="onFocusOut"-->
<!--                          mask="phone" type="tel"/>-->
<!--          </label>-->
<!--          <checkbox-form :error="error === 'agreeRf'" @change="changeCheckbox($event, 'agreeRf')"-->
<!--                         label="Подтверждаю наличие гражданства РФ"/>-->
<!--          <checkbox-form :error="error === 'agree'" @change="changeCheckbox($event, 'agree')" label="Согласен на"-->
<!--                         link="обработку личных данных"/>-->
<!--        </fieldset>-->
<!--        <button-typical :loading="buttonDisabled" text="Оставить заявку" button-class="button&#45;&#45;credit button&#45;&#45;form"/>-->
  </form>
</template>
<script setup lang="ts">
import {numberFormat} from '~/helpers/filters';
import {useModals, ModalOfferSelection_offerType} from '~/store/modals';
import {OfferQuery} from '~/types/graphql';
import {computed, ref} from '#imports';
import FormCreditCalculator from '~/components/Form/form-components/FormCreditCalculator.vue';

const props = defineProps<{
  calculator: boolean;
  hasChose?: boolean;
  offer: OfferQuery['offer'];
}>();

const currentCar = null;

const modalPayloadCredit = {
  open: true,
  component: 'offerSelection',
  title: 'Выберите автомобиль',
  subtitle: ''
};

const modalOfferSelection_offer = computed<ModalOfferSelection_offerType>(() => useModals().modalOfferSelection_offer);
const creditParams = ref({
  rangePeriodValues: [
    '2',
    '6',
    '12',
    '24',
    '36',
    '48',
    '60',
    '72',
    '84'
  ],
  rangePaymentValues: [
    '0%',
    '10%',
    '20%',
    '30%',
    '40%',
    '50%',
    '60%',
    '70%',
    '80%'
  ],
  period: 84,
  payment: 0,
});

const submitForm = () => {

};
</script>