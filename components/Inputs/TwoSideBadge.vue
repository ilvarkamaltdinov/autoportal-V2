<template>
  <div class="makes__item">
    <nuxt-link :to="to" class="makes__link">
            <span class="makes__title">
              <slot name="title"/>
            </span>
      <span class="makes__qty">
        <slot name="right-content"/>
      </span>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  to?: string
}>(), {
  to: ''
});
</script>