<template>
  <div class="text__wrap">
    <div class="text__figure figure" v-if="$slots.figure">
      <slot name="figure" />
    </div>
    <div class="text__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>