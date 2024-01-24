<template>
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
      <slot name="calculator"/>
      <fieldset class="form__fieldset">
        <div class="form__field-wrap" v-for="({ attrs, component, name }) in inputs" :key="name" :class="{
          'form__field-wrap--error': errors[name],
          'form__field-wrap--success': isFieldValid(name)
        }">
          <component :is="component" v-bind="attrs" :unstyled="true" :modelValue="fields[name]" @update:model-value="fields[name] = $event" />
        </div>
        <slot name="inputs" />
        <CheckBoxForm v-model="grazhdanstvo" :class="{
          'checkbox--error': errors['grazhdanstvo']
        }">
          <template #text>
            Подтверждаю наличие гражданства РФ
          </template>
        </CheckBoxForm>
        <CheckBoxForm v-model="agree" :class="{
          'checkbox--error': errors['agree']
        }">
          <template #text>
            <span>Согласен на</span>
          </template>
          <template #link>
            обработку личных данных
          </template>
        </CheckBoxForm>
      </fieldset>
      <Button :unstyled="true" class="button button--credit button--form" @click="onSubmit">
        Оставить заявку
      </Button>
    </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { ISchema, ObjectShape } from 'yup';
import CheckBoxForm from '~/components/Form/form-components/CheckBoxForm.vue';

type InputAttrs = {
  type: string
  placeholder: string
  class: string
  mask?: string
  autoClear?: boolean
}
export type Input = {
  attrs: InputAttrs,
  name: string,
  component: string,
  validationRule: ISchema<unknown>
}
const props = defineProps<{
  inputs: Input[]
}>();

function getValidationRulesFromProps(){
  return props.inputs.reduce((prev, current) => {
    return {
      ...prev,
      [current.name]: current.validationRule
    };
  }, {
    grazhdanstvo: yup.boolean().required().isTrue(),
    agree: yup.boolean().required().isTrue(),
  });
}

const validationRules = ref<ObjectShape>({});
const schema = yup.object(getValidationRulesFromProps());

const { defineField, handleSubmit, errors, isFieldValid } = useForm({
  validationSchema: schema,
});

const fields: Record<string, unknown> = reactive({});
Object.entries(props.inputs).forEach( ([_,v]) => {
  fields[v.name] = defineField(v.name)[0];
  validationRules.value[v.name] = v.validationRule;
});
const [grazhdanstvo] = defineField('grazhdanstvo');
const [agree] = defineField('agree');

const onSubmit = handleSubmit((values) => {
  console.log('Submitted with', values);
});
</script>