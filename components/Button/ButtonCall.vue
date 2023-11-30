<template>
  <a :href="`tel:${currentPhone.replace(/[^+\d]/g, '')}`"
     v-if="$device.isMobile && !isNight"
     class="button button--action button--call"
     title="Бесплатный звонок"
     aria-label="Бесплатный звонок">
    <nuxt-icon class="button__icon"
              name="icon-call"/>
  </a>
  <button v-else
          class="button button--action button--call"
          @click.prevent="$emit('click')">
    <nuxt-icon class="button__icon"
              name="icon-call"/>
  </button>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{
  phone: string
}>(), {
  phone: ''
});
const {$settings} = useNuxtApp();

const currentPhone = computed(() => {
  return props.phone === '' ? $settings!.phone : props.phone;
});
</script>
