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
          <FormConstructor :inputs="inputs">
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
            <template #calculator>
              <FormCreditCalculator :offer="null" :params="creditParams">
                <template #first-slider-name="{names}">
                  {{ names.installment }}
                </template>
              </FormCreditCalculator>
            </template>
            <template #inputs>
              <!--              <label class="form__field-wrap">-->
              <!--                <InputText placeholder="ФИО" class="form__field" type="text" :unstyled="true"/>-->
              <!--              </label>-->

              <!--              <label class="form__checkbox-wrap checkbox">-->
              <!--                <Checkbox class="form__checkbox visually-hidden"/>-->
              <!--                <nuxt-icon name="icon-checkmark"-->
              <!--                           class="checkbox__icon"/>-->
              <!--                <span class="form__checkbox-text">Подтверждаю наличие гражданства РФ</span>-->
              <!--              </label>-->
              <!--              <label class="form__checkbox-wrap checkbox">-->
              <!--                <Checkbox class="form__checkbox visually-hidden"/>-->
              <!--                <nuxt-icon name="icon-checkmark"-->
              <!--                           class="checkbox__icon"/>-->
              <!--                <span class="form__checkbox-text">Согласен на обработку-->
              <!--                    <a href="/privacy" class="form__checkbox-text-link" rel="nofollow" target="_blank">-->
              <!--                      персональных данных-->
              <!--                    </a>-->
              <!--                </span>-->
              <!--              </label>-->
              <!--              <Button class="button button&#45;&#45;credit button&#45;&#45;form" :unstyled="true">-->
              <!--                Оставить заявку-->
              <!--              </Button>-->
            </template>
          </FormConstructor>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup lang="ts">
import FormCreditCalculator from '~/components/Form/form-components/FormCreditCalculator.vue';
import { ref } from '#imports';
import masks from '~/composables/masks';

const inputs = ref([
  {
    component: 'InputText',
    attrs: {
      type: 'text',
      placeholder: 'ФИО',
      class: 'form__field',
    }
  },
  {
    component: 'InputMask',
    attrs: {
      type: 'tel',
      placeholder: 'Телефон',
      mask: masks.value.phone,
      class: 'form__field',
    }
  },
]);

const creditParams = ref({
  rangePeriodValues: {
    snap: true,
    //todo move in settings
    range: {
      'min': 2,
      '12': 6,
      '24': 12,
      '36': 24,
      '48': 36,
      '60': 48,
      '72': 60,
      '84': 72,
      'max': 84,
    }
  },
  rangePaymentValues: {
    snap: true,
    range: {
      'min': 0,
      '12': 10,
      '24': 20,
      '36': 30,
      '48': 40,
      '60': 50,
      '72': 60,
      '84': 70,
      'max': 80,
    }
  },
  period: 84,
  payment: 0,
});
</script>
