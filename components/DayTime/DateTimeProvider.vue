<template>
  <slot name="night" v-if="isNight" :exposeCallbackModal="exposeModalCallback" :phone="$settings.phone"/>
  <slot name="day" v-else :href="`tel:${$settings.phone}`" :phone="$settings.phone"/>
  <!--todo add slot for newyear-->
  <Sidebar v-model:visible="isSidebarOpened" position="right" class="modal">
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
import TwoSideBadge from '~/components/Inputs/TwoSideBadge.vue';
import { useBenefitsStore } from '~/store/benefitsStore';

const isSidebarOpened = ref();

function exposeModalCallback() {
  isSidebarOpened.value = true;
}

const benefitsStore = useBenefitsStore();
const benefits = computed(() => benefitsStore.find('credit'));
</script>