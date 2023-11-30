<template>
  <button class="button button--action button--favorite"
          :class="{'button--favorite-active' : active}"
          @click.prevent="$emit('clickclack')"
          type="button"
          title="Добавить в избранное"
          aria-label="Добавить в избранное">
    <nuxt-icon class="button__icon"
              :name="active?'icon-heart-active':'icon-heart'" />
  </button>
</template>

<script setup lang="ts">

withDefaults(defineProps<{active: boolean}>(), {
  active: false
});
</script>
