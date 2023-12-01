<template>
  <li class="faq__nav-item">
    <nuxt-link :to="`/knowledge#faq-${slug}`"
               class="link-ancor faq__ancor">
      <slot />
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  slug: string
}>();
</script>