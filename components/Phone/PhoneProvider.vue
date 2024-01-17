<template>
  <slot name="night" v-if="isNight" :exposeCallbackModal="exposeModalCallback" :phone="$settings.phone" />
  <slot name="day" v-else :href="`tel:${$settings.phone}`" :phone="$settings.phone" />

  <Sidebar v-model:visible="isSidebarOpened" position="right" header="Выберите автомобиль" class="modal">
    <template #header>
      <div class="heading-group heading-group--modal">
        <div class="heading-group__wrap">
          <h2 class="heading heading--h1">Остались вопросы? Перезвоним Вам!</h2>
        </div>
      </div>
    </template>
    <template #default>
      aaa
    </template>
  </Sidebar>
</template>
<script setup lang="ts">
const isSidebarOpened = ref();
function exposeModalCallback(){
  isSidebarOpened.value = true;
}
</script>