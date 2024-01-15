<template>
  <Slider v-model="modelValue" @update:model-value="newvalue => $emit('update:modelValue', newvalue)"
          class="range-period"
          :text="installment ? 'Период рассрочки:' :'Срок кредитования, мес.:'"
          :options="options"
          :period="currentPeriod"
          @changePeriod="$emit('changePeriod', $event)"/>
  <div class="irs irs--flat irs-with-grid">
    <div class="irs-grid">
      <div :key="k" :class="`irs-grid-text-${parseInt(k) || k}`"
           v-for="([k,v]) in Object.entries(options.range)">
        {{ v }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from '@vueform/slider';

type FormCreditCalculatorProps = {
  options: object;
  installment: boolean;
  modelValue: number;
  currentPeriod: string;
}

defineEmits(['changePeriod', 'update:modelValue']);

const props = withDefaults(defineProps<FormCreditCalculatorProps>(), {
  installment: false,
});

const modelValue = ref(props.modelValue);
</script>