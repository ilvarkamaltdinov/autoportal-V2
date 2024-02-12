<template>
  <div class="specifications">
    <div class="heading-group">
      <div class="heading-group__wrap">
        <h2 class="heading heading--h2">
          Технические характеристики
        </h2>
        <span class="heading-group__label">
          <slot name="title"></slot>
        </span>
      </div>
    </div>
    <div class="specifications__group">
      <slot name="specifications"></slot>
    </div>
    <slot name="more"></slot>
  </div>
</template>

<script setup lang="ts">

</script>