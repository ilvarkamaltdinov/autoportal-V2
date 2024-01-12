<template>
  <label class="toggle">
    <input class="toggle__checkbox" type="checkbox" v-model="isDark" @input="themeStore.toggleTheme()">
    <div class="toggle__slot">
      <div class="toggle__sun">
        <nuxt-icon class="toggle__icon toggle__icon--sun" name="icon-sun"/>
      </div>
      <div class="toggle__button"></div>
      <div class="toggle__moon">
        <nuxt-icon class="toggle__icon toggle__icon--moon" name="icon-moon"/>
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
import { Themes, useThemeStore } from '~/store/theme';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);
const isDark = computed(() => theme.value == Themes.DARK);

watchEffect(() => {
  if (theme.value == null && process.client) {
    themeStore.matchWithMedia();
  }
  useHead({
    htmlAttrs() {
      return {
        'data-theme': theme.value,
      };
    },
  });
});

</script>