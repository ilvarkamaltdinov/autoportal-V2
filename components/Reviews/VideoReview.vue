<template>
  <li class="featured__item featured__item--review "
      :class="{'featured__item--review-active': showingVideo === video.id}"
      v-if="video.status.privacyStatus !== 'private'"
      :key="video.id">
    <iframe v-if="showingVideo === video.id"
            class="featured__review-player"
            width="100%"
            height="100%"
            :src="`https://www.youtube.com/embed/${video.contentDetails.videoId}?autoplay=1`"
            frameborder="0"
            allow="encrypted-media"
            allowfullscreen />
    <div v-else
         class="featured__link">
      <div class="featured__about">
        <h3 class="featured__title">{{ video.snippet.title }}</h3>
      </div>
      <div class="featured__review-picture">
        <NuxtImg v-if="video.snippet.thumbnails.high" class="featured__review-img lazyload"
                 :src="video.snippet.thumbnails.high.url"
                 :alt="video.snippet.title" />
      </div>
    </div>
    <nuxt-icon v-if="showingVideo !== video.id"
               class="featured__play-icon"
               name="icon-play" />
  </li>
</template>

<script setup lang="ts">
export type Video = {
  nextPageToken: string,
  items: VideoItem[],
};

export type VideoItem = {
  status: {
    privacyStatus: string
  },
  id: string,
  contentDetails: {
    videoId: number;
  }
  snippet: {
    title: string
    thumbnails: {
      high: {
        url: string
      }
    }
  }
}
defineProps<{
  video: VideoItem;
  showingVideo: string;
}>();
</script>