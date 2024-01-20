<template>
  <li>
    <nuxt-link :to="'/used/'+ carBrand.slug" class="makes__popular-link">
      <nuxt-icon :name="'icon-' + carBrand.title.toLowerCase()" class="makes__popular-logo" />
    </nuxt-link>
  </li>
<!--  todo mb add slots-->
</template>

<script setup lang="ts">
import type { Mark } from '~/types/graphql';

defineProps<{
  carBrand: Mark
}>();
</script>