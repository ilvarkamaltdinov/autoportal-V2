<template>
  <div class="heading-group heading-group--h1">
    <div class="heading-group__wrap" v-if="isIndex">
      <h2 class="heading heading--h2-blog heading--h2">Свежее в блоге</h2>
    </div>
    <div class="heading-group__wrap" v-else>
      <h1 class="heading heading--h1"> Блог <span class="heading__promo"></span></h1>
      <span class="heading-group__label">Лучшее из мира автомобилей</span>
    </div>
  </div>
  <div class="blog__wrap grid__col-12">
    <template v-for="(article) in (isIndex ? blogCategories![0] : blogCategories) as ArticleCategory[]" :key="article.id">
      <h2 class="heading heading--h2" v-if="!isIndex">{{ article.page_title }}</h2>
      <ul class="blog__list">
        <BlogArticle v-for="(item, index) in article.articles" :key="item!.id" :to="item!.url!" :class="getArticleClass(index)">
          <template #title>
            {{ item!.page_title }}
          </template>
          <template #image>
            <NuxtImg class="blog__img lazyload" :src="item!.image_preview!.small_webp!"/>
          </template>
        </BlogArticle>
      </ul>
      <nuxt-link :to="article.url!" class="button button--link button--more">Показать больше</nuxt-link>
    </template>
  </div>

</template>
<script setup lang="ts">
import BlogArticle from '~/components/Blog/Article.vue';
import {BlogCategoriesInputType} from '~/app/types/blog';
import {requestBlogCategories} from '~/helpers/request';
import {ArticleCategory} from '~/types/graphql';

const route = useRoute();
defineProps<{
  isIndex: boolean;
}>();

const blogCategories = ref<ArticleCategory[]>();
let variables = computed<BlogCategoriesInputType>(() => {
  return {
    limit: 7
  };
});
function getArticleClass (index: number) {
  return {
    '0': 'blog__item--vertical',
    '3': 'blog__item--horizontal',
  }[index];
}

async function getBlogCategories() {
  const {data} = await requestBlogCategories(variables.value);
  blogCategories.value = data.value?.articleCategory;
}

watch(route, async () => {
  await getBlogCategories();
}, {immediate: true});


</script>