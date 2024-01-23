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
  email: yup.string().required().email().label('Email address'),
  phone: yup.string().required().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/).label('Phone number'),
  fullName: yup.string().required().label('Full name'),
  password: yup.string().required().min(6).label('Password'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required()
    .label('Password confirmation'),
  terms: yup
    .boolean()
    .required()
    .isTrue('You must agree to terms and conditions')
    .label('terms agreement'),
  type: yup.string().required().label('Account type'),
});

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const fields: Record<string, unknown> = reactive({});
Object.entries(props.inputs).forEach( ([_,v]) => {
  fields[v.name] = defineField(v.name)[0];
});

watch(fields, (val) => {
  console.log(val);
});
console.log(fields);

// const [fullName] = defineField('fullName');
// const [email] = defineField('email');
// const [password] = defineField('password');
// const [passwordConfirm] = defineField('passwordConfirm');
// const [terms] = defineField('terms');
// const [type] = defineField('type');

const onSubmit = handleSubmit((values) => {
  console.log('Submitted with', values);
});
</script>