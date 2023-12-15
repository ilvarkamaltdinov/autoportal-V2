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
                   v-html="domParse(article.body)">
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
import DOMParser from 'universal-dom-parser';

const article = ref<Article | null>(null);
article.value = (await request<{ article: Article }, ArticleQueryVariables>(articleQuery, {
  url: useRoute().path,
})).data.value.article;

function addClass(arr, className) {
  arr.forEach(value => {
    if (value.innerHTML === '&nbsp;') {
      value.remove();
    }
    value.classList.add(className);
  });
}

function domParse(str: string) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(`${str}`, 'text/html');

  let p_array = doc.documentElement.querySelectorAll('p');
  let h2_array = doc.documentElement.querySelectorAll('h2');
  let ul_array = doc.documentElement.querySelectorAll('ul');
  let ol_array = doc.documentElement.querySelectorAll('ol');
  let li_array = doc.documentElement.querySelectorAll('li');

  addClass(p_array, 'text__p');
  addClass(h2_array, 'heading--h2');
  addClass(h2_array, 'heading');
  addClass(ul_array, 'text__list');
  addClass(ol_array, 'text__list');
  addClass(li_array, 'text__list-item');

  return doc.documentElement.outerHTML;
}
</script>