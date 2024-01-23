<template>
  <ul class="benefits__list benefits__list--car">
    <li class="benefits__item" v-for="(benefit) in benefits" :key="benefit.icon">
      <TwoSideBadge class="benefits__link popup--link">
        <template #title>
          <nuxt-icon class="benefits__icon" :name="`icon-${benefit.icon}`"/>
        </template>
        <template #right-content>
          <div class="benefits__text">
            {{ benefit.text }}
            <div class="benefits__text-strong">
              {{ benefit.text_strong }}
            </div>
          </div>
        </template>
      </TwoSideBadge>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { BenefitType, useBenefitsStore } from '~/store/benefitsStore';
import TwoSideBadge from '~/components/Inputs/TwoSideBadge.vue';

const props = defineProps<{
  type: BenefitType
}>();
const benefitsStore = useBenefitsStore();
const benefits = benefitsStore.find(props.type);
</script>