<template>
  <div class="tippy tippy--question"
       v-tippy="{
							content:`<div class='tippy__text'>${text}</div>`,
							animation:'scale',
							arrow: true,
					}">
    <nuxt-icon name="icon-question"
              class="tippy__icon" />
  </div>
</template>
<script setup lang="ts">
type TippyQuestionProps = {
  text: string;
}

defineProps<TippyQuestionProps>();
</script>