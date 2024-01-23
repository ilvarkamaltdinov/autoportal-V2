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
        <div class="form__field-wrap" v-for="({ attrs, component, name }, index) in inputs" :key="name" :class="{
          'form__field-wrap--error': errors[name]
        }">
          <component :is="component" v-bind="attrs" :unstyled="true" v-model="fields[name]" />
        </div>
        <slot name="inputs" />
        <!--                <checkbox-form :error="error === 'agree'" @change="changeCheckbox($event, 'agree')" label="Согласен на"-->
        <!--                               link="обработку личных данных"/>-->
      </fieldset>
      <Button :unstyled="true" class="button button--credit button--form" @click="onSubmit">
        Оставить заявку
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';

type InputAttrs = {
  type: string
  placeholder: string
  class: string
  mask?: string
}
export type Input = {
  attrs: InputAttrs,
  name: string,
  component: string,
}
const props = defineProps<{
  inputs: Input[]
}>();

const schema = yup.object({
  phone: yup.string().required().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/),
  fullName: yup.string().required().label('Full name'),
});

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const fields: Record<string, unknown> = reactive({});
Object.entries(props.inputs).forEach( ([_,v]) => {
  fields[v.name] = defineField(v.name)[0];
});

const onSubmit = handleSubmit((values) => {
  console.log('Submitted with', values);
});
</script>