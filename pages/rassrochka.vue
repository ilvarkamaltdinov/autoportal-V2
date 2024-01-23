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
            <div class="heading-group heading-group--form">
              <div class="heading-group__wrap">
                <h2 class="heading heading--h2">
                  Рассрочка
                  <span class="heading__promo">0%</span>
                </h2>
              </div>
            </div>
            <form class="form">
              <fieldset class="form__fieldset">
                <label
                    class="form__field-wrap form__field-wrap--car ">
                  <Button class="form__field">
                    {{ 'Выбрать автомобиль' }}
<!--                    <span v-if="currentCar">-->
<!--                      {{ currentCar.price | toCurrency }}-->
<!--                    </span>-->
                  </Button>
                  <nuxt-icon name="icon-form" class="form__car-icon"/>
                </label>
              </fieldset>
<!--              <div class="catalog form__catalog" v-if="$device.isMobile && (offer || currentCar)">-->
<!--                <catalog-item-large-mobile-form :is-form="true" :offer="offer || currentCar"/>-->
<!--              </div>-->
<!--              <form-credit-calculator installment @changePeriod="changePeriod" @changePayment="changePayment"-->
<!--                                      :params="creditParams" :offer="offer || currentCar"/>-->
              <fieldset class="form__fieldset">
                <label class="form__field-wrap">
                  <InputText placeholder="ФИО" class="form__field" type="text" :unstyled="true" />
                </label>
                <label class="form__field-wrap">
                  <InputText placeholder="Телефон" class="form__field" mask="phone" type="tel"/>
                </label>
                <Checkbox label="Подтверждаю наличие гражданства РФ" inputId="grazdhanstvo" />
                <label for="grazdhanstvo" class="ml-2"> Onion </label>
                <!--                <checkbox-form :error="error === 'agree'" @change="changeCheckbox($event, 'agree')" label="Согласен на"-->
<!--                               link="обработку личных данных"/>-->
              </fieldset>
<!--              <button-typical :loading="buttonDisabled" text="Оставить заявку"-->
<!--                              button-class="button&#45;&#45;credit button&#45;&#45;form"/>-->
            </form>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup lang="ts">

</script>
