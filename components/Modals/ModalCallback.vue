<template>
  <Sidebar v-model:visible="isVisible"
           @update:visible="(val: boolean) => $emit('update:modelValue', val)"
           position="right" class="modal">
    <template #header>
      <div class="heading-group heading-group--modal">
        <div class="heading-group__wrap">
          <h2 class="heading heading--h1">Остались вопросы? Перезвоним Вам!</h2>
        </div>
      </div>
    </template>
    <template #default>
      <div class="modal__wrap">
        <div class="benefits grid__col-12 benefits--modal">
          <ul class="benefits__list benefits__list--car">
            <li class="benefits__item" v-for="(benefit, index) in benefits" :key="index">
              <TwoSideBadge class="benefits__link popup--link">
                <template #title>
                  <nuxt-icon class="benefits__icon" :name="`icon-${benefit.icon}`"/>
                </template>
                <template #right-content>
                  <div class="benefits__text">
                    {{ benefit.text }}
                    <div class="benefits__text-strong">
                      {{ benefit.text_strong }}
                    </div>
                  </div>
                </template>
              </TwoSideBadge>
            </li>
          </ul>
        </div>
        <div class="application application--modal grid__col-12 grid grid--application grid--application-modal">
          <div class="application__form grid__col-4">
            <div class="text">
              <p class="text__p text__p--modal">
                <TimeConditionHandler>
                  <template #newyear>
                    Автомобильный портал <span class="text__working-hours">{{ $settings.dealer_title }}</span>
                    поздравляет вас с Новым годом!
                    Оставьте заявку, и наши операторы перезвонят вам <span class="text__working-hours">2 января</span>!
                  </template>
                  <template #night>
                    Операторы работают <span class="text__working-hours">с 9:00 до 21:00</span>.
                    Оставьте заявку, и мы с радостью перезвоним вам в рабочее время!
                  </template>
                  <template #day>
                    Оставьте заявку, и наши операторы свяжутся с вами в
                    течение <span class="text__working-hours">5 минут!</span>
                  </template>
                </TimeConditionHandler>
              </p>
            </div>
            <div class="heading-group heading-group--form">
              <div class="heading-group__wrap">
                <h2 class="heading heading--h2">Обратный звонок</h2>
                <span class="heading-group__label">Перезвоним в течение 5 минут</span>
              </div>
            </div>
            <form class="form">
              <!--              <div class="catalog form__catalog"-->
              <!--                   v-if="$device.isMobile && offer.mark">-->
              <!--                <catalog-item-large-mobile-form :is-form="true"-->
              <!--                                                :offer="offer"/>-->
              <!--              </div>-->
              <fieldset class="form__fieldset">
                <label class="form__field-wrap">
                  <InputText class="form__field" :unstyled="true" placeholder="Имя"/>
                  <!--                  <inputs-input placeholder="Имя"-->
                  <!--                                @input="handlerInput('name')"-->
                  <!--                                v-model="form.name.value"-->
                  <!--                                type="text"/>-->
                </label>
                <label class="form__field-wrap">
                  <InputMask class="form__field" :mask="masks.phone" placeholder="Телефон" :unstyled="true"/>
                  <!--                       :class="phoneClass">-->
                  <!--                  <inputs-input placeholder="Телефон"-->
                  <!--                                @input="handlerInput('phone')"-->
                  <!--                                @phoneMaskComplete="form.phone.valid = true"-->
                  <!--                                @onincomplete="form.phone.valid = null"-->
                  <!--                                v-model="form.phone.value"-->
                  <!--                                mask="phone"-->
                  <!--                                type="tel"/>-->
                </label>
                <CheckBoxForm>
                  <template #text>
                    <span>Согласен на</span>
                  </template>
                  <template #link>
                    обработку личных данных
                  </template>
                </CheckBoxForm>
                <!--                <checkbox-form :error="error === 'agree'"-->
                <!--                               @change="changeCheckbox($event,'agree')"-->
                <!--                               label="Согласен на"-->
                <!--                               link="обработку личных данных"/>-->
              </fieldset>
              <Button class="button button--credit button--form" :unstyled="true">
                Перезвоните мне
              </Button>
            </form>
          </div>
        </div>
      </div>
    </template>
  </Sidebar>
</template>

<script setup lang="ts">
import { useBenefitsStore } from '~/store/benefitsStore';
import TwoSideBadge from '~/components/Inputs/TwoSideBadge.vue';
import CheckBoxForm from '~/components/Form/form-components/CheckBoxForm.vue';

const props = defineProps<{
  modelValue: boolean
}>();
const benefitsStore = useBenefitsStore();
const benefits = computed(() => benefitsStore.find('credit'));
const isVisible = ref(props.modelValue);

const check = ref(false);

defineEmits(['update:modelValue']);
watch(() => props.modelValue, (val) => isVisible.value = val);
</script>