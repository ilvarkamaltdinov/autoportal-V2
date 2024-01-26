<template>
  <div class="car__buy car__buy--new">
    <div class="car__price-block">
      <div class="car__price">
        1 000 000 ₽  <!--offer.price-->
      </div>
      <div class="car__price-payment">
        12 000 ₽ / мес. без взноса
      </div>
    </div>
    <!--      TODO offer.is_active-->
    <div v-if="true" class="car__buy-block">
      <button @click.prevent="$emit('onCredit')"
              class="button button--credit button--credit-europe">
        Купить в кредит
      </button>
      <button @click.prevent="$emit('onExchange')" class="button button--trade-in button--link">
        Trade-In
      </button>
      <button v-if="!isMobile" @click.prevent="$emit('onInstallment')"
              class="button button--credit-pay button--link">
        Рассрочка
      </button>
    </div>
    <div class="car__actions-block car__actions-block--new">
      <CheckBoxForm v-model="hasCredit">
        <template #text>
          Кредит
        </template>
      </CheckBoxForm>
      <CheckBoxForm v-model="hasExchange">
        <template #text>
          Выгодный Trade-In
        </template>
      </CheckBoxForm>
      <CheckBoxForm v-model="hasGosProgram">
        <template #text>
          Госпрограмма 2023
        </template>
      </CheckBoxForm>
    </div>
  </div>
</template>

<script setup lang="ts">

const hasCredit = ref(true);
const hasExchange = ref(true);
const hasGosProgram = ref(true);


import CheckBoxForm from '~/components/Form/form-components/CheckBoxForm.vue';

const { isMobile } = useDevice();


</script>