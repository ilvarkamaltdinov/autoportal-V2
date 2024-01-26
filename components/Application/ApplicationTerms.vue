<template>
  <div class="application__terms grid__col-3">
    <div class="application__terms-item" v-for="term in terms" :key="term.title">
      <div class="application__terms-number application__terms-number--stake">{{ term.title }}</div>
      <div class="application__terms-text">{{ term.text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
export type Terms = {
  title: string
  text: string
}
defineProps<{
  terms: Terms[]
}>();
</script>