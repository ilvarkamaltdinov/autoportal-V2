<template>
  <Teleport to="body" v-if="isVisible">
    <slot name="default" :payload="payload" @close="isVisible = false"/>
  </Teleport>
</template>
<script setup lang="ts">
const isVisible = ref(false);
const payload = ref(null);

function open({payload: payloadContent}) {
  isVisible.value = true;
  payload.value = payloadContent;
}

defineExpose({
  open
});
provide('close', () => isVisible.value = false);
</script>
