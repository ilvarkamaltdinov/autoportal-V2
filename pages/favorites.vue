<template>
  <main class="page-main">
    <div class="grid">
<!--      <crumbs :crumbs="crumbs"/>-->
    </div>
    <div class="grid grid--container">
      <catalog-favorites :page-title="pageTitle"/>
    </div>
  </main>
</template>
<script>

export default {
  mounted() {
    setTimeout(function () {window.scrollTo(0, -100);}, 1);
  },
};
</script>