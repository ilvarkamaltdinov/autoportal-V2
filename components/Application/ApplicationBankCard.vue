<template>
  <div class="application__banks">
    <div class="application__banks-form">
      <slot name="logo" />
      <nuxt-link to="/banks-partners" @click="$emit('click')" class="application__banks-text">
        и еще 25 банков
      </nuxt-link>
    </div>
    <div class="application__form-img-wrap">
      <slot name="image" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>