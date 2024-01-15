<template>
  <div class="form__block form__block--range range">
    <label class="form__range-wrap">
      <span class="form__range-name">
        <slot name="default" />
      </span>
      <!--TODO в будущем переписать toCurrency и исправить этот костыль -->
      <span class="form__range-value" v-if="currentPaymentSum"> {{ currentPaymentSum }}</span>
      <span class="form__range-value" v-else> 0 ₽</span>
    </label>
    <Slider v-model="modelValue" @update:model-value="newvalue => $emit('update:modelValue', newvalue)"
            class="range-period"
            :text="text"
            :options="options"
            @input="$emit('input', $event)"/>
    <div class="irs irs--flat irs-with-grid">
      <div class="irs-grid">
        <div :key="k" :class="`irs-grid-text-${parseInt(k) || k}`"
             v-for="([k,v]) in Object.entries(options.range)">
          <slot name="option-label" :option="v" :key="k"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from '@vueform/slider';
import type { FormCreditCalculatorProps } from '~/components/Form/form-components/FormCreditCalculator.vue';

type SliderOptionProps = {
  options: FormCreditCalculatorProps['params']['rangePeriodValues'];
  modelValue: number;
  text: string;
}

defineEmits(['input', 'update:modelValue']);

const props = defineProps<SliderOptionProps>();

const modelValue = ref(props.modelValue);
</script>