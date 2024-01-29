<template>
  <ul class="benefits__list benefits__list--car">
    <li class="benefits__item" v-for="(benefit) in benefits" :key="benefit.icon">
      <TwoSideBadge class="benefits__link popup--link" @click="isModalVisible = true">
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
<!--  TODO DIFFERENT STYLES OF BENEFITS-->
  <Dialog :showHeader="false" v-model:visible="isModalVisible" modal :unstyled="false">
    <template #default>
      <button class="stories__close" @click="isModalVisible = false">
        <nuxt-icon class="stories__close-icon" name="icon-close-s" />
      </button>
      <div class="stories__modal">
        <div class="stories__offer">
          <h2 class="heading heading--h2">Гарантия 2 года</h2>
          <p class="stories__modal-text">Автосалоны-партнеры CARRO предоставляют гарантию на техническое состояние автомобиля в течение двух лет с момента покупки.</p>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { BenefitType, useBenefitsStore } from '~/store/benefitsStore';
import TwoSideBadge from '~/components/Inputs/TwoSideBadge.vue';

const props = defineProps<{
  type: BenefitType
}>();
const benefitsStore = useBenefitsStore();
const benefits = benefitsStore.find(props.type);

const isModalVisible = ref(false);
</script>