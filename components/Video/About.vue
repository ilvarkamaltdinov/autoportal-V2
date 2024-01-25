<template>
  <section class="page-main__video video grid__col-12">
    <h2 class="visually-hidden">Видео о портале {{ $settings.dealer_anchor }}</h2>
    <div class="video__block"
         id="about-video">
      <button v-if="!isVideo" class="video__play"
              @click="isVideo = true"
              title="Воспроизвести видео"
              aria-label="Воспроизвести видео о портале">
        <nuxt-icon class="video__play-icon"
                   name="icon-play"/>
      </button>
      <div v-if="isVideo"
           class="youtube"
           id="pf0hQmzZ6sE"
           style="width:100%; height:100%;">
        <iframe id="yt-iframe"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/67RlWpltRSY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </div>
      <div v-else
           class="video__img-wrap">
        <NuxtImg class="video__img"
                 src="/video/iphone@1x.png"
                 alt=""/>
      </div>
      <p class="video__text">Узнай, почему на {{ $settings.dealer_anchor }} лучшие цены в России!</p>
    </div>
  </section>
</template>
<script setup lang="ts">
const isVideo = ref(false);
</script>
