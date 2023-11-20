<template>
  <section class="modal modal--credit">
    <div class="heading-group heading-group--modal" :class="{ 'heading-group--modal-only-title': !modal.subtitle }">
      <div class="heading-group__wrap">
        <h2 class="heading heading--h1" v-html="modal.title"></h2>
        <span class="heading-group__label" v-if="modal.subtitle"> {{ modal.subtitle }}</span>
      </div>
      <button class="modal__close" @click="useModals().closeModal()">
        <nuxt-icon class="modal__close-icon" name="icon-close-s"/>
      </button>
    </div>
    <slot name="content">
      <!--      Контент модального окна-->
    </slot>
  </section>
</template>

<script setup lang="ts">
import {ModalType, useModals} from "~/store/modals";

const modal = computed<ModalType>(() => useModals().modal)
</script>
