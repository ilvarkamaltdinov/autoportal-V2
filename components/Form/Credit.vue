<template>
  <div class="heading-group heading-group--form">
    <div class="heading-group__wrap">
      <h2 class="heading heading--h2">
        Автокредит от
        <span class="heading__promo">
          {{ $settings.credit_percent }}
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
        <button class="form__field" @click.prevent="modalVisibility = true">
          {{ modalOfferSelection_offer ? modalOfferSelection_offer.name : 'Выбрать автомобиль' }}
          <span v-if="modalOfferSelection_offer">, {{ numberFormat(modalOfferSelection_offer.price) }}</span>
        </button>
        <nuxt-icon name="icon-form" class="form__car-icon"/>
      </label>
    </fieldset>
    <div class="catalog form__catalog" v-if="$device.isMobile && (offer || currentCar)">
      <!--          <catalog-item-large-mobile-form :is-form="true" :offer="offer || currentCar"/>-->
    </div>
    <FormCreditCalculator v-if="calculator"
                          :params="creditParams" :offer="offer || modalOfferSelection_offer"/>
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
  <Sidebar v-model:visible="modalVisibility" position="right" header="Выберите автомобиль" class="modal">
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
import { numberFormat } from '~/utils/filters';
import { useModals, ModalOfferSelection_offerType } from '~/store/modals';
import { OfferQuery } from '~/types/graphql';
import { computed, ref } from '#imports';
import FormCreditCalculator from '~/components/Form/form-components/FormCreditCalculator.vue';
import OfferSelection from '~/components/Modals/OfferSelection.vue';
import Sidebar from 'primevue/sidebar';

const props = defineProps<{
  calculator: boolean;
  hasChose?: boolean;
  offer: OfferQuery['offer'];
}>();

const currentCar = null;
const modalVisibility = ref(false);

const modalOfferSelection_offer = computed<ModalOfferSelection_offerType>(() => useModals().modalOfferSelection_offer);
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
}
);

const submitForm = () => {

};
</script>