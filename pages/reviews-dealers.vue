<template>
  <main class="page-main">
    <div class="grid">
      <!--			<crumbs :crumbs="crumbs"/>-->
    </div>
    <div class="grid grid--container">
      <section class="page-main__featured featured featured--reviews grid">
        <div class="heading-group heading-group--h1">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1">{{ title }}</h1>
            <span class="heading-group__label">Покупатели о наших партнерах</span>
          </div>
        </div>
        <div class="grid__col-12">
          <div class="tabs">
            <ul v-if="dealers.length"
                class="tabs__list">
              <li v-for="(dealer, index) in dealers"
                  :key="dealer.id"
                  role="presentation"
                  :class="{'tabs__item--active':activeTab === index}"
                  class="tabs__item">
                <button @click="getReviews(dealer, index)"
                        class="tabs__link"
                        role="tab"
                        data-toggle="tab">
                  {{ dealer.title }}
                </button>
              </li>
            </ul>
            <ul v-else
                class="skeleton__tabs-list">
              <li class="skeleton__tabs-item"></li>
              <li class="skeleton__tabs-item"></li>
            </ul>
          </div>

          <ul v-if="reviews.length"
              class="featured__list grid grid--featured featured__reviews">
            <VideoReview v-for="video in reviews" @click="selectVideo(video.id)"
                         :video="video" :showing-video="showingVideo || ''" :key="video.id"/>
          </ul>

          <div v-else
               class="skeleton skeleton--reviews">
            <ul class="grid grid--featured skeleton__review-list">
              <li v-for="i in 9"
                  :key="i"
                  class="skeleton__content skeleton__content--review"></li>
            </ul>
          </div>

          <button v-if="showMore" @click="getMore" class="button button--link button--more">
            Показать больше
          </button>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Dealer } from '~/types/graphql';
import VideoReview, { Video, VideoItem } from '~/components/Reviews/VideoReview.vue';
import { useDealers } from '~/store/dealers';
import { storeToRefs } from 'pinia';

const activeTab = ref(0);
const dealersStore = useDealers();
dealersStore.fetchDealers();
const { dealers } = storeToRefs(dealersStore);
dealers.value = dealers.value.filter(item => item.youtube_playlist_review);
const reviews = ref<VideoItem[]>([]);
const showingVideo = ref<string | null>(null);
const nextPageToken = ref<string | null>(null);
const showMore = ref(true);
const activeToken = computed(() => dealers.value[activeTab.value].youtube_playlist_review);

onMounted(async () => {
  try {
    await getPlaylist(nextPageToken.value, dealers.value[0].youtube_playlist_review);
  } catch (error) {
    console.log(error);
  }
});

function getReviews(dealer: Dealer, index: number) {
  reviews.value = [];
  showMore.value = true;
  activeTab.value = index;
  getPlaylist(null, dealer.youtube_playlist_review);
}

async function getPlaylist(pageToken: string | null, playlistId: string) {
  const params = {
    'playlistId': playlistId,
    'orderby': 'date',
    'mine': true,
    'maxResults': 9,
    'key': 'AIzaSyBw7M2CPzyAtwX1ct9XQk5akiouCUQ9CJU',
    'part': 'snippet,status,contentDetails',
    'pageToken': pageToken
  };
  try {
    const url = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
    Object.entries(params).forEach(([k, v]) => v ? url.searchParams.append(k, v.toString()) : null);
    const response = await fetch(url.toString());
    const responseData: Video = await response.json();
    if (responseData.nextPageToken) {
      nextPageToken.value = responseData.nextPageToken;
    } else {
      showMore.value = false;
    }
    reviews.value.push(...responseData.items);
  } catch (error) {
    console.log(error);
  }
}

function selectVideo(id: string) {
  showingVideo.value = id;
}

function getMore() {
  getPlaylist(nextPageToken.value, activeToken.value!);
}
</script>
