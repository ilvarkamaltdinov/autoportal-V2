<template>
  <div class="complectations">
    <div class="heading-group">
      <div class="heading-group__wrap">
        <h2 class="heading heading--h2">
          Комплектации
        </h2>
        <span class="heading-group__label">
          <slot name="title"></slot>
        </span>
      </div>
    </div>
    <div class="complectations__filter">
      <slot name="controls"></slot>
    </div>
    <div class="complectations__group">
      <slot name="complectations"></slot>
    </div>

    <slot name="more"></slot>
  </div>
</template>