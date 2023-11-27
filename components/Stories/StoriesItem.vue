<script setup lang="ts">
import {Story} from '~/types/graphql';

type StoriesItemProps = {
  story: Story;
}
defineProps<StoriesItemProps>();
</script>

<template>
  <li class="stories__item"
      :class="{'swiper-slide': !$device.isMobile}"
      @click="$emit('click')">
    <div class="stories__figure">
      <PictureComponent classes="stories__img lazyload"
                         lazy
                         :small="story.image?.xs.toString()"
                         :small-webp="story.image?.xs_webp.toString()"
                         :big="story.image?.tiny.toString()"
                         :big-webp="story.image?.tiny_webp.toString()" />
    </div>
    <div class="stories__text">
      {{story.title}}
    </div>
  </li>
</template>

<style scoped>

</style>