<template>
  <li class="blog__item">
    <nuxt-link :to="to"
               class="blog__link">
      <div class="blog__item-info">
        <div class="blog__date">
          <slot name="date" />
        </div>
        <div class="blog__views">
          <slot name="views" />
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
        <h3 class="blog__item-title">
          <slot name="title" />
        </h3>
      </div>
      <slot name="image" />
    </nuxt-link>
  </li>


</template>

<script setup lang="ts">

withDefaults(defineProps<{
  to: string
}>(), {
  to: ''
});
</script>