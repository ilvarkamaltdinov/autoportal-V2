<template>
  <div class="application__form grid__col-4">
    <FormConstructor :inputs="inputs">
      <template #car-choose>
        <Button class="form__field" @click="$emit('showModal')">
          {{ (offer && `${offer.name}, ${numberFormat(offer.price)} ₽`) || 'Выбрать автомобиль' }}
        </Button>
        <nuxt-icon name="icon-form" class="form__car-icon"/>
      </template>
      <template #calculator>
        <div class="catalog form__catalog">
          <slot name="offer"/>
        </div>
        <CheckBoxForm v-model="isAccordionExpanded">
          <template #text>
            Купить авто в кредит
          </template>
        </CheckBoxForm>
        <Accordion v-model:activeIndex="accordionIndex" :unstyled="true">
          <template #collapseicon>
            {{ null }}
          </template>
          <template #expandicon>
            {{ null }}
          </template>
          <AccordionTab :unstyled="true">
            <FormCreditCalculator :offer="offer" :params="creditParams"
                                  @changePeriod= "$emit('changePeriod', $event)"
                                  @changePayment="$emit('changePayment', $event)">
              <template #first-slider-name="{names}">
                {{ names.credit }}
              </template>
            </FormCreditCalculator>
          </AccordionTab>
        </Accordion>
      </template>
    </FormConstructor>
  </div>
</template>

<script setup lang="ts">
import CheckBoxForm from '~/components/Form/form-components/CheckBoxForm.vue';
import FormCreditCalculator from '~/components/Form/form-components/FormCreditCalculator.vue';
import { ref } from '#imports';
import validation from '~/composables/validation';
import { Input } from '~/components/Form/FormConstructor.vue';
import { Offer } from '~/types/graphql';

const isAccordionExpanded = ref(true);
const accordionIndex = computed(() => isAccordionExpanded.value ? 0 : -1);

defineProps<{
  offer: Offer
}>();

defineEmits(['changePeriod', 'changePayment', 'showModal']);
const inputs = ref<Input[]>([
  {
    name: 'car',
    component: 'InputText',
    attrs: {
      type: 'text',
      placeholder: 'Ваш автомобиль',
      class: 'form__field',
    },
    validationRule: validation.value.car.rule,
  },
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