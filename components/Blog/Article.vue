<template>
  <li class="blog__item">
    <nuxt-link :to="article.url"
               class="blog__link">
      <div class="blog__item-info">
        <div class="blog__date">{{ article.createdAt }}</div>
        <div class="blog__views">
          {{ article.views }}
          <!--          {{-->
          <!--            declension({-->
          <!--              count: Number(item.views),-->
          <!--              one: 'просмотр',-->
          <!--              few: 'просмотра',-->
          <!--              many: 'просмотров'-->
          <!--            })-->
          <!--          }}-->
        </div>
      </div>
      <div class="blog__item-text">
        <h3 class="blog__item-title">{{ article.page_title }}</h3>
      </div>
      <!--          <picture-component v-if="item.image_preview" classes="blog__img lazyload"-->
      <!--                             :small="item.image_preview.thumb"-->
      <!--                             :small-webp="item.image_preview.thumb_webp"-->
      <!--                             :big="item.image_preview.small"-->
      <!--                             :big-webp="item.image_preview.small_webp"/>-->
    </nuxt-link>
  </li>


</template>

<script setup lang="ts">
import {Article} from '~/app/types/blog';

withDefaults(defineProps<{
  index: boolean,
  article: Article
}>(), {
  index: false
});
</script>