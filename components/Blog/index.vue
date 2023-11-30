<template>
  <div class="heading-group heading-group--h1">
    <div class="heading-group__wrap" v-if="index">
      <h2 class="heading heading--h2-blog heading--h2">Свежее в блоге</h2>
    </div>
    <div class="heading-group__wrap" v-else>
      <h1 class="heading heading--h1"> Блог <span class="heading__promo"></span></h1>
      <span class="heading-group__label">Лучшее из мира автомобилей</span>
    </div>
  </div>
  <!--  <blog-category :list="category.articles"-->
  <!--                 :index="index"-->
  <!--                 :title="category.page_title"-->
  <!--                 :url="category.url"-->
  <!--                 v-for="category in categories"-->
  <!--                 :key="category.id"/>-->
</template>
<script setup lang="ts">
import {ArticleCategoryType, ArticleCategoryInputType} from '~/app/types/blog';
import {request, requestArticleCategories} from '~/helpers/request';

withDefaults(defineProps<{ index: boolean }>(), {
  index: false
});

let variables = computed<ArticleCategoryInputType>(() => {
  return {
    limit: 10
  };
});

async function getArticleCategory() {
  const {data} = await requestArticleCategories(variables.value);
  console.log(123, data);
}

//
// const categories = ref<ArticleCategoryType[]>();

getArticleCategory();

</script>