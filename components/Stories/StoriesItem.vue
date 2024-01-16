<script setup lang="ts">
import { Story } from '~/types/graphql';

type StoriesItemProps = {
  story: Story;
}
defineProps<StoriesItemProps>();
</script>

<template>
  <li class="stories__item"
      @click="$emit('click')">
    <div class="stories__figure">
      <NuxtImg class="stories__img lazyload" :src="story.image?.tiny_webp"/>
    </div>
    <div class="stories__text">
      {{story.title}}
    </div>
  </li>
</template>

<style scoped>

</style>