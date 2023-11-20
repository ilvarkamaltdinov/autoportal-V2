<template>
  <div class="default__wrapper" tabindex="0">
    <Header/>
    <slot>
    </slot>
    <Modals/>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header'
import Modals from '~/components/Modals'
</script>