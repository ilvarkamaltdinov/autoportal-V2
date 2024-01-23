<template>
  <div class="application__form grid__col-4">
    <div class="heading-group heading-group--form">
      <div class="heading-group__wrap">
        <h2 class="heading heading--h2">
          <slot name="name"/>
        </h2>
      </div>
    </div>
    <form class="form">
      <fieldset class="form__fieldset">
        <label class="form__field-wrap form__field-wrap--car">
          <slot name="car-choose"/>
        </label>
      </fieldset>
      <!--              <div class="catalog form__catalog" v-if="$device.isMobile && (offer || currentCar)">-->
      <!--                <catalog-item-large-mobile-form :is-form="true" :offer="offer || currentCar"/>-->
      <!--              </div>-->
      <!--              <form-credit-calculator installment @changePeriod="changePeriod" @changePayment="changePayment"-->
      <!--                                      :params="creditParams" :offer="offer || currentCar"/>-->
      <slot name="calculator"/>
      <fieldset class="form__fieldset">
        <div class="form__field-wrap" v-for="({ attrs, component }, index) in inputs" :key="index">
          <component :is="component" v-bind="attrs" :unstyled="true" />
        </div>
        <slot name="inputs" />
        <!--                <checkbox-form :error="error === 'agree'" @change="changeCheckbox($event, 'agree')" label="Согласен на"-->
        <!--                               link="обработку личных данных"/>-->
      </fieldset>
      <Button :unstyled="true" class="button button--credit button--form">
        Оставить заявку
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
type InputAttrs = {
  type: string
  placeholder: string
  class: string
  mask?: string
}
type Input = {
  attrs: InputAttrs,
  component: string,
}
defineProps<{
  inputs: Input[]
}>();
</script>