<template>
  <div class="form__block form__block--range range">
    <div class="form__range-wrap">
      <label class="form__field-wrap form__field-wrap--range">
        <input class="form__field"
               placeholder="Цена от"
               type="tel"
               name="date"
               inputmode="numeric"/>
      </label>
      <label class="form__field-wrap form__field-wrap--range">
        <input class="form__field"
               placeholder="Цена до"
               type="tel"
               name="date"/>
      </label>
    </div>
    <div class="range">
      <client-only>
        <Slider :lazy="false" v-model="periodValue"/>
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from '@vueform/slider';

const periodValue = ref(0);
// const periodValue = computed({
//   get: () => props.period,
//   set: (value) => emit('changePeriod', value)
// });
</script>