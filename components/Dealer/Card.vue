<template>
  <div class="dealers__item">
    <div class="dealers__features features">
      <div class="heading-group">
        <div class="heading-group__wrap">
          <h2 class="heading heading--h2">
            <slot name="header"/>
          </h2>
          <span class="heading-group__label">
            <slot name="short-description"/>
          </span>
        </div>
        <slot name="right-corner"/>
      </div>
      <slot name="content"/>
    </div>
    <slot name="image"/>
  </div>
</template>

<script setup lang="ts">
</script>