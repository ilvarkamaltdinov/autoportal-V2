<template>
  <ul class="tech">
    <li class="tech__item" v-for="(tech, key) in techs" :key="key">
      <span class="tech__item-icon-wrap">
         <nuxt-icon class="tech__item-icon"
                    :name="tech.icon"/>
      </span>
      <span class="tech__item-value">{{ tech.value }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { TechType } from '~/app/types/tech';

defineProps<{
  techs: TechType[]
}>();
</script>