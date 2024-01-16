<template>
  <li class="makes__item">
    <nuxt-link :to="to" class="makes__link">
            <span class="makes__title">
              <slot name="title"/>
            </span>
      <span class="makes__qty">
        <slot name="right-content"/>
      </span>
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  to: string
}>();
</script>