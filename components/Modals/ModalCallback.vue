<template>
  <Sidebar v-model:visible="isVisible"
           @update:visible="(val: boolean) => $emit('update:modelValue', val)"
           position="right" class="modal">
    <template #header>
      <div class="heading-group heading-group--modal">
        <div class="heading-group__wrap">
          <h2 class="heading heading--h1">Остались вопросы? Перезвоним Вам!</h2>
        </div>
      </div>
    </template>
    <template #default>
      <div class="modal__wrap">
        <div class="benefits grid__col-12 benefits--modal">
          <ul class="benefits__list benefits__list--car">
            <li class="benefits__item" v-for="(benefit, index) in benefits" :key="index">
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
        </div>
      </div>
    </template>
  </Sidebar>
</template>

<script setup lang="ts">
import { useBenefitsStore } from '~/store/benefitsStore';
import TwoSideBadge from '~/components/Inputs/TwoSideBadge.vue';

const props = defineProps<{
  modelValue: boolean
}>();
const benefitsStore = useBenefitsStore();
const benefits = computed(() => benefitsStore.find('credit'));
const isVisible = ref(props.modelValue);

defineEmits(['update:modelValue']);
watch(() => props.modelValue, (val) => isVisible.value = val);
</script>