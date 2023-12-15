<template>
  <!--  TODO MAYBE ADD TRANSITION-->
  <NuxtLayout name="default">
    <main class="page-main">
      <div class="grid grid--container">
        <section class="page-main__blog blog grid">
          <div class="heading-group heading-group--h1">
            <div class="heading-group__wrap">
              <h1 class="heading heading--h1">
                {{ title }}
                <span class="heading__promo"></span>
              </h1>
              <span v-if="!isIndex" class="heading-group__label">Лучшее из мира автомобилей</span>
            </div>
          </div>
          <div v-if="isIndex" class="blog__wrap grid__col-12">
            <ul class="blog__list">
              <li class="blog__item"
                  v-for="item in list"
                  :key="item.id">
                <nuxt-link :to="item.url"
                           class="blog__link">
                  <div class="blog__item-info">
                    <div class="blog__date">{{ item.createdAt }}</div>
                    <div class="blog__views">
                      {{ item.views }}
                      <!--                    {{-->
                      <!--                      // declension({-->
                      <!--                      //   count: Number(item.views),-->
                      <!--                      //   one: "просмотр",-->
                      <!--                      //   few: "просмотра",-->
                      <!--                      //   many: "просмотров",-->
                      <!--                      // })-->
                      <!--                    }}-->
                    </div>
                  </div>
                  <div class="blog__item-text">
                    <h3 class="blog__item-title">{{ item.page_title }}</h3>
                  </div>
                  <NuxtImg v-if="item.image_preview" class="blog__img" :src="item.image_preview.small" format="webp"/>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div v-else class="blog__wrap grid__col-12">
            <ul class="blog__list">
              <Article v-for="item in list"
                       :key="item.id"
                       class="blog__item">
                <template #views>
                  {{ item.views }}
                </template>
                <template #date>
                  {{ item.createdAt }}
                </template>
                <template #image>
                  <NuxtImg :src="item.image_preview?.small" format="webp" class="blog__img"/>
                </template>
                <template #title>
                  {{ item.page_title }}
                </template>
              </Article>
            </ul>
            <InfiniteLoading @infinite="getArticles"/>
          </div>
        </section>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import Article from '~/components/Blog/Article.vue';
import { articlesPaginate } from '~/apollo/queries/blog/articlesPaginate';
import { request } from '~/helpers/request';
import { Article as TArticle, ArticlesPaginateQueryVariables } from '~/types/graphql';
import { useRoute } from '#imports';

withDefaults(defineProps<{
  isIndex: boolean
}>(), {
  isIndex: false,
});

const page = ref(1);
const limit = ref(20);
const list = ref<TArticle[]>([]);

const { path } = useRoute();

async function getArticles() {
  const response = await request<{
    articlesPaginate: { data: TArticle[] }
  }, ArticlesPaginateQueryVariables>(articlesPaginate, {
    category_url: path,
    limit: limit.value,
    page: page.value,
  });
  if (response.data.value.articlesPaginate.data.length) {
    page.value += 1;
    list.value.push(...response.data.value.articlesPaginate.data);
  }
}
</script>
