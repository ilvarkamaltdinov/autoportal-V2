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
  <div class="blog__wrap grid__col-12" >
    <h2 class="heading heading--h2" v-if="!isIndex">{{ title }}</h2>
    <ul class="blog__list">
      <BlogArticle v-for="(article, key) in (isIndex ? blogCategories[0] : blogCategories).articles"
                   :class="articleClasses[key]"
                   :article="article"
                   :is-index="isIndex"
                   :key="article.id"/>
    </ul>
    <nuxt-link :to="blogCategories[0].url" class="button button--link button--more">Показать больше</nuxt-link>
  </div>

</template>
<script setup lang="ts">
import BlogArticle from '~/components/Blog/Article.vue';
import {BlogCategoriesInputType, BlogCategoryType} from '~/app/types/blog';
import {requestBlogCategories} from '~/helpers/request';

const route = useRoute();
defineProps<{
  isIndex: boolean;
}>();

const blogCategories = ref<BlogCategoryType[]>();
let variables = computed<BlogCategoriesInputType>(() => {
  return {
    limit: 7
  };
});
let articleClasses = {
  '0': 'blog__item--vertical',
  '3': 'blog__item--horizontal',
};

async function getBlogCategories() {
  const {data} = await requestBlogCategories(variables.value);
  blogCategories.value = data.value?.articleCategory;
}

watch(route, async () => {
  await getBlogCategories();
}, {immediate: true});


</script>