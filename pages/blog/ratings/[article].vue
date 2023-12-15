<template>
  <main class="page-main">
    <div class="grid grid--container">
      <section class="page-main__blog blog grid" v-if="article">
        <div class="heading-group heading-group--h1">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1">{{ article.page_title }}</h1>
            <span class="heading__promo"></span>
            <span class="heading-group__label heading-group__label--car">
					<span class="heading-group__year">{{ article.createdAt }}</span>
					{{ article.views }}
				</span>
          </div>
        </div>
        <div class="blog__text text grid__col-12">
          <div class="grid">
            <div class="text__wrap grid__col-12">
              <div class="text__content"
                   v-if="article.body"
                   v-html="domParser.parse(article.body)">
              </div>
              <div class="text__content"
                   v-if="article.image">
                <div class="text__img-wrap">
                  <NuxtImg :src="article.image.medium" class="text__img text__img--blog" format="webp"/>
                </div>
              </div>
<!--              <blog-video v-if="article.video_youtube"-->
<!--                          :id="article.video_youtube"/>-->

<!--              <blog-slider v-if="article.image_slide && article.image_slide.length"-->
<!--                           :images="article.image_slide"/>-->

            </div>
          </div>
        </div>
      </section>
    </div>
    >
  </main>
</template>
<script setup lang="ts">
import {Article, ArticleQueryVariables} from '~/types/graphql';
import {request} from '~/helpers/request';
import {article as articleQuery} from '~/apollo/queries/blog/article';
import domParser from '~/composables/domParser';

const article = ref<Article | null>(null);
article.value = (await request<{ article: Article }, ArticleQueryVariables>(articleQuery, {
  url: useRoute().path,
})).data.value.article;
</script>