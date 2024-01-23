<template>
  <main class="page-main">
    <div class="grid">
      <!--			<crumbs :crumbs="crumbs" />-->
    </div>
    <div class="grid grid--container">
      <section class="page-main__application application grid">
        <div class="heading-group heading-group--h1">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1">{{ title }}</h1>
            <span class="heading-group__label">Банк перезвонит вам в течение 15 минут</span>
          </div>
        </div>
        <div class="grid__col-12 grid grid--application">
          <FormConstructor>
            <template #name>
              Рассрочка
              <span class="heading__promo">0%</span>
            </template>
            <template #car-choose>
              <Button class="form__field">
                {{ 'Выбрать автомобиль' }}
              </Button>
              <nuxt-icon name="icon-form" class="form__car-icon"/>
            </template>
          </FormConstructor>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup lang="ts">

</script>
