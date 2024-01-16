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
      <PictureComponent classes="stories__img lazyload"
                         lazy
                         :small="story.image?.xs?.toString() as string"
                         :small-webp="story?.image?.xs_webp?.toString() as string"
                         :big="story.image?.tiny?.toString() as string"
                         :big-webp="story.image?.tiny_webp?.toString() as string" />
    </div>
    <div class="stories__text">
      {{story.title}}
    </div>
  </li>
</template>

<style scoped>

</style>