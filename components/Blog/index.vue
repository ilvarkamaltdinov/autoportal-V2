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
  <BlogCategory v-for="category in (index ? blogCategories[0] : blogCategories)"
                :category="category"
                :index="index"
                :key="category.id"/>
</template>
<script setup lang="ts">
import BlogCategory from '~/components/Blog/Category.vue';
import {BlogCategoriesInputType, BlogCategoryType} from '~/app/types/blog';
import {requestBlogCategories} from '~/helpers/request';

defineProps<{
  index: boolean;
}>();

const blogCategories = ref<BlogCategoryType[]>();
let variables = computed<BlogCategoriesInputType>(() => {
  return {
    limit: 10
  };
});

async function getBlogCategories() {
  const {data} = await requestBlogCategories(variables.value);
  blogCategories.value = data.value?.articleCategory;
}

getBlogCategories();

</script>