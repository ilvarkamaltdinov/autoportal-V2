<template>
 <main class="page-main">
  <div class="grid grid--container">
    <section class="page-main__blog blog grid">
      <Suspense>
        <Blog :is-index="false"/>
        <template #fallback>
          is loading
        </template>
      </Suspense>
    </section>
  </div>
 </main>
</template>

<script setup lang="ts">

</script>