<template>
  <label class="form__checkbox-wrap checkbox">
    <input class="form__checkbox visually-hidden"
           name="checkbox-agree"
           type="checkbox" :value="modelValue" @change="$emit('update:modelValue', !modelValue)" />
    <nuxt-icon name="icon-checkmark" :class="{'checkbox__icon--checked':modelValue}" class="checkbox__icon" />
    <span class="form__checkbox-text">
      <slot name="text"/>
			<a href="/privacy" class="form__checkbox-text-link" rel="nofollow" target="_blank">
        <slot name="link"/>
			</a>
		</span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean,
}>();
</script>