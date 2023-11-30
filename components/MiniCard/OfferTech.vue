<template>
  <div class="catalog__tech">
    <div class="rating" style="--rating-number: 80; --rating-color: #0DC268;" data-tippy-directive="" tabindex="0">
      {{ engineVolume(2) }}
    </div>
    <ul class="catalog__tech-list"><!---->
      <li class="catalog__tech-item">
        {{ numberFormat(179205) }} км
      </li>
      <li class="catalog__tech-item">
        137 л.с.
      </li>
      <li class="catalog__tech-item">АКПП</li>
      <li class="catalog__tech-item">Бензин
      </li>
      <li class="catalog__tech-item">2 владельца
      </li>
      <li class="catalog__tech-item">Передний
      </li> <!----></ul>
  </div>
</template>
<script setup lang="ts">

import {engineVolume, numberFormat} from '../../helpers/filters';
</script>