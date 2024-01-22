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
          <div class="application__form grid__col-4">
<!--            <form-installment :bank-rate="bank.rate" />-->
          </div>
<!--          <div v-if="currentCar && !$device.isMobile"-->
<!--               class="application__catalog catalog grid__col-8">-->
<!--            <component :choose="true" :is="component"-->
<!--                       :has-fancy="true"-->
<!--                       :key="currentCar.id"-->
<!--                       :is-form="true"-->
<!--                       :has-buttons="false"-->
<!--                       :offer="currentCar" />-->
<!--          </div>-->
<!--          <button v-else-->
<!--                  class="application__choose-car grid__col-8"-->
<!--                  @click="chooseCar">-->
<!--            <nuxt-icon class="application__choose-car-icon"-->
<!--                      name="icon-form" />-->
<!--            <span class="application__choose-car-text">Выберите автомобиль</span>-->
<!--          </button>-->
<!--          <application-banks default-bank="sovcom"-->
<!--                             class="grid__col-5" />-->
<!--          <application-terms installment class="grid__col-3" />-->
        </div>
      </section>
		</div>
	</main>
</template>
<script setup lang="ts">

</script>
