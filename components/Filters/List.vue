<template>
  <ul class="filter__menu-list">
    <li class="filter__menu-item">
      <div class="filter__menu-text">
        Марка
      </div>
      <nuxt-icon class="filter__arrow"
                 name="icon-arrow"/>
    </li>
    <li class="filter__menu-item">
      <div class="filter__menu-text">
        Модель
      </div>
      <nuxt-icon class="filter__arrow"
                 name="icon-arrow"/>
    </li>
    <li class="filter__menu-item">
      <div class="filter__menu-text">
        Поколение
      </div>
      <nuxt-icon class="filter__arrow"
                 name="icon-arrow"/>
    </li>
    <li class="filter__menu-item">
      <div class="filter__menu-text">
        Двигатель
      </div>
      <nuxt-icon class="filter__arrow"
                 name="icon-arrow"/>
    </li>
    <li class="filter__menu-item">
      <div class="filter__menu-text">
        Кузов
      </div>
      <nuxt-icon class="filter__arrow"
                 name="icon-arrow"/>
    </li>
    <li class="filter__menu-item">
      <div class="filter__menu-text">
        КПП
      </div>
      <nuxt-icon class="filter__arrow"
                 name="icon-arrow"/>
    </li>
    <li class="filter__menu-item">
      <div class="filter__menu-text">
        Привод
      </div>
      <nuxt-icon class="filter__arrow"
                 name="icon-arrow"/>
    </li>
  </ul>
  <div class="filter__more">
    <button class="button button--show">
      Больше фильтров
    </button>
  </div>
  <ul class="filter__menu-list filter__menu-list--more">
    <li class="filter__menu-group">
      <h2 class="heading heading--h3">Цена</h2>
      <RangeFilterPrice/>
    </li>
    <li class="filter__menu-group">
      <h2 class="heading heading--h3">Год</h2>
      <RangeFilterPrice/>
    </li>
  </ul>
</template>

<script setup lang="ts">
import RangeFilterPrice from '~/components/Range/FilterPrice.vue';
</script>