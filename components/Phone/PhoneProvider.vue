<template>
  <slot name="night" v-if="isNight" :exposeCallbackModal="exposeModalCallback" :phone="$settings.phone" />
  <slot name="day" :href="`tel:${$settings.phone}`" :phone="$settings.phone" v-else />
</template>
<script setup lang="ts">
function exposeModalCallback(){
  console.log('here is night modalopen');
}
</script>