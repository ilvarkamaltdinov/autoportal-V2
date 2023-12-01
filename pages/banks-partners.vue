<template>
  <main class="page-main">
    <div class="grid">
      <!--			<crumbs :crumbs="crumbs" />-->
    </div>
    <div class="grid grid--container">
      <section class="page-main__featured featured featured--banks grid">
        <div class="heading-group heading-group--h1">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1">{{ title }}</h1>
            <span class="heading-group__label">Подайте заявку на автокредит в любой банк</span>
          </div>
        </div>
        <Banks/>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import Banks from '~/components/Banks';
</script>
