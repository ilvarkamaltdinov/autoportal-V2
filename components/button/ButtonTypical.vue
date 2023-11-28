<template>
  <!--TODO не делаю @click.prevent так как блокирует событие @submit на формах-->
  <nuxt-link :class="buttonClass"
             class="button"
             v-if="link !== ''"
             :to="link">{{ text }}
  </nuxt-link>
  <button v-else
          class="button"
          :disabled="loading"
          :class="buttonClass"
          @click="$emit('click')">
    {{ text }}
    <nuxt-icon v-if="icon !== ''"
              :name="icon" />
  </button>
</template>
<script setup lang="ts">

withDefaults(defineProps<{
  link: string,
  buttonClass: string,
  text: string,
  icon: string,
  loading: boolean,
}>(), {
  link: '',
  buttonClass: '',
  text: '',
  icon: '',
  loading: false
});
</script>
