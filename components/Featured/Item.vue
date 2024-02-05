<template>
  <li class="featured__item">
    <nuxt-link :to="`/${link}`" class="featured__link">
      <div class="featured__about">
        <slot name="extra-picture"/>
        <h3 class="featured__title">
          <slot name="title"/>
        </h3>
        <div class="featured__text">
          <slot name="text"/>
        </div>
      </div>
      <div class="featured__picture">
        <div class="glass featured__glass featured__glass--small"></div>
        <div class="glass featured__glass featured__glass--big"></div>
        <slot name="image"/>
      </div>
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
defineProps<{ link: string }>();
</script>