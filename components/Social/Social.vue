<template>
  <ul class="social">
    <li class="social__item"
        v-for="item in socials"
        :key="item">
      <template v-if="$settings['soc_' + item]">
        <a class="social__link"
           target="_blank"
           rel="nofollow"
           :href="$settings['soc_' + item]"
           :title="item"
           :aria-label="item">
          <nuxt-icon class="social__icon"
                    :name="`icon-${item}`" />
        </a>
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
const socials = computed( () => ['telegram', 'zen', 'instagram', 'vk', 'ok', 'tiktok'] );
</script>
