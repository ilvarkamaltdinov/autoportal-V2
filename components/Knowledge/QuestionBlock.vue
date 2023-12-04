<template>
  <div class="faq__questions-group"
       v-for="item in items"
       :key="item.slug"
       :id="`faq-${item.slug}`">
    <h2 class="faq__heading heading heading--h2">
      <slot name="title" :item="item as T"/>
    </h2>
    <slot name="items" :items="item" />
  </div>
</template>

<script setup lang="ts" generic="T extends { slug: string; }[]">
defineProps<{
  items: T
}>();
</script>