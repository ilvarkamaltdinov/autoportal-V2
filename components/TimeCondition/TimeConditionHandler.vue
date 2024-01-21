<template>
  <slot name="newyear" v-if="isNewYear" :exposeModal="exposeModal" :phone="$settings.phone" />
  <slot name="night" v-else-if="isNight" :exposeModal="exposeModal" :phone="$settings.phone"/>
  <slot name="day" v-else :href="`tel:${$settings.phone}`" :phone="$settings.phone"/>
  <!--todo add slot for newyear-->
  <slot name="modal" :toggle="() => isSidebarOpened = !isSidebarOpened" :isVisible="isSidebarOpened">
    <ModalCallback v-model="isSidebarOpened" />
  </slot>
</template>
<script setup lang="ts">
import ModalCallback from '~/components/Modals/ModalCallback.vue';

const isSidebarOpened = ref(false);
function exposeModal() {
  isSidebarOpened.value = true;
}
</script>