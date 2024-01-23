<template>
  <select v-if="isMobile"
          class="form__field form__field--select"
          v-model="selectValue" options="" title="" type="" value="">
    <option :value="title">
      {{ title }}
    </option>
    <option :value="option"
            :key="key"
            v-for="(option, key) in options">
      {{ option.title || option.name || option }}
    </option>
  </select>
  <div v-else tabindex="1"
       @focusout="outsideClick"
       @click="selectClick"
       class="form__field form__field--select select">
    <span> {{ currentTitle }}</span>
    <nuxt-icon name="icon-arrow" class="form__field-arrow"/>
    <ul class="select__list" v-if="isOpen">
      <li @click.prevent="optionClick(option)"
          class="select__item"
          :key="key"
          v-for="(option, key) in options">
        {{ option.title }}
      </li>
    </ul>
  </div>

</template>

<script setup lang="ts">
import { ref } from '#imports';

const { isMobile } = useDevice();

const props = defineProps<{
  title: string
  options: any
  value: any
  type: string
  hasAlphabet?: boolean
  opacity?: boolean
  error?: boolean
}>();

let isOpen = ref<boolean>(false);
const selectValue = computed({
  get: () => props.value || props.title,
  set: (value) => emit('select', { option: value, type: props.type })
});
const selectClick = async () => {
  if (props.options?.length) {
    isOpen.value = !isOpen.value;
  }
};
const outsideClick = async () => {
  isOpen.value = false;
};
const emit = defineEmits(['select']);

const optionClick = (value: any) => {
  emit('select', { option: value, type: props.type });
};


const currentTitle = computed(() => {
  if (props.value) {
    return props.value?.title || props.value?.name || props.value?.value || props.value;
  } else {
    return props.title;
  }
});

</script>
