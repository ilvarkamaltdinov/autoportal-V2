<template>
  <slot name="night" v-if="isNight" :exposeCallbackModal="exposeModalCallback" :phone="$settings.phone"/>
  <slot name="day" v-else :href="`tel:${$settings.phone}`" :phone="$settings.phone"/>
  <!--todo add slot for newyear-->
  <ModalCallback v-model="isSidebarOpened" />
</template>
<script setup lang="ts">
import ModalCallback from '~/components/Modals/ModalCallback.vue';

const isSidebarOpened = ref(false);
function exposeModalCallback() {
  isSidebarOpened.value = true;
}
</script>