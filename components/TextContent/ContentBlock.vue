<template>
  <div class="text__wrap" :class="{ 'text__wrap--figure': $slots.figure }">
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