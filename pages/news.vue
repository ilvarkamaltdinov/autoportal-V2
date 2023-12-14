<template>
  <main class="page-main">
    <div class="grid grid--container">
      <section class="page-main__blog blog grid">
        <div class="heading-group heading-group--h1">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1">
              {{ title }}
              <span class="heading__promo"></span>
            </h1>
            <span v-if="!index" class="heading-group__label">Лучшее из мира автомобилей</span>
          </div>
        </div>
        <div v-if="index" class="blog__wrap grid__col-12">
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
                <picture-component v-if="item.image_preview"
                                   classes="blog__img lazyload"
                                   :small="item.image_preview.thumb"
                                   :small-webp="item.image_preview.thumb_webp"
                                   :big="item.image_preview.small"
                                   :big-webp="item.image_preview.small_webp"/>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div v-else class="blog__wrap grid__col-12">
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
                <NuxtImg class="blog__img" :src="item.image_preview?.small"/>
              </nuxt-link>
            </li>
          </ul>
          <InfiniteLoading @infinite="getArticles" />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import {articlesPaginate} from '~/apollo/queries/blog/articlesPaginate';
import {request} from '~/helpers/request';
import {Article, ArticlesPaginateQueryVariables} from '~/types/graphql';
import {useRoute} from '#imports';

const page = ref(1);
const limit = ref(20);
const list = ref<Article[]>([]);

const {path} = useRoute();

async function getArticles() {
  const response = await request<{ articlesPaginate: { data: Article[] } }, ArticlesPaginateQueryVariables>(articlesPaginate, {
    category_url: path,
    limit: limit.value,
    page: page.value,
  });
  if (response.data.value.articlesPaginate.data.length) {
    page.value += 1;
    list.value.push(...response.data.value.articlesPaginate.data);
  }
}

await getArticles();

withDefaults(defineProps<{
  isIndex: boolean
}>(), {
  isIndex: false,
});

</script>