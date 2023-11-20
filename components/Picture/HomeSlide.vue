<template>
  <picture>
    <source type="image/webp"
            :data-srcset="`${smallWebp} 1x, ${bigWebp} 2x`" srcset=""/>
    <source media="(min-width: 768px)"
            :data-srcset="`${small} 1x, ${big} 2x`" srcset=""/>
    <img :class="classes"
         :data-src="big"
         alt=""
         loading="lazy"
         :data-aos="aos"
         data-aos-duration=" 750"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true" src=""/>
  </picture>
</template>
<script setup lang="ts">
const props = defineProps<{
  classes: string
  small: string
  smallWebp: string
  big: string
  bigWebp: string
  aos: string
}>()
</script>
