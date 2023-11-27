<template>
  <div class="form__block form__block--range range">
    <label class="form__range-wrap">
      <span class="form__range-name">{{ text }}</span>
      <span class="form__range-value">{{ period }}</span>
    </label>
    <client-only>
      <range-slider
          range-class="range-period"
          :options="options"
          @input="changePeriod">
      </range-slider>
    </client-only>
  </div>
</template>

<script setup lang="ts">
type RangePeriodProps = {
  text: string;
  period: string;
  value: string;
  values: string[];
}
const props = defineProps<RangePeriodProps>();

const options = {
  grid: true,
  values: props.values.map((val) => {
    return val;
  }),
  from: props.values.indexOf(props.value),
};

const emit = defineEmits(['changePeriod']);

function changePeriod(value: RangePeriodProps['values'][number]) {
  emit('changePeriod', value);
}
</script>