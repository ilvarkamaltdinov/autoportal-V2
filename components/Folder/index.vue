<template>
  <main class="page-main">
    <div class="grid ">
      <Crumbs/>
    </div>
    <div class="grid grid--container">
      <section class="page-main__catalog catalog grid catalog--used">
        <div class="heading-group heading-group--catalog heading-group--h1">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1">
              <span>Новый Lixiang L9</span>
              <span class="nuxt-icon">icon</span>
            </h1>
            <div class="heading-group__label">
              Официальный дилер Lixiang в Москве
            </div>
          </div>
          <Button class="button button--action button--call button--link">
            <nuxt-icon class="button__icon" name="icon-call"/>
          </Button>
        </div>
        <div class="folder__page grid__col-12">
          <div class="folder__page-left">
            <Tech :techs="currentTechs" class="folder__tech"/>
            <Complectations class="folder__complectations">
              <template #title>
                Lixiang L9
              </template>
              <template #controls>
                <Dropdown v-model="filter.engine" placeholder="Двигатель" :options="endineTypes"/>
                <Dropdown v-model="filter.gearbox" placeholder="Коробка" :options="gearboxes"/>
              </template>
              <template #complectations>
                <div class="complectation" v-for="i in 2" :key="i">
                  <div class="heading heading--h2 complectation__title">
                    R-Line
                  </div>
                  <div class="heading-group__label complectation__tech">
                    Бензин 388 л.с. АКПП Полный
                  </div>
                  <div class="complectation__price">
                    <div class="complectation__price-actual">8 250 500 ₽</div>
                    <div class="complectation__price-credit">В кредит от 132 500 / мес.</div>
                  </div>
                  <div class="complectation__buttons">
                    <div class="complectation__buttons-main">
                      <button class="button button--link">Подробнее</button>
                      <button class="button button--credit">Купить в кредит</button>
                    </div>

                    <div class="complectation__buttons-actions">
                      <button class="button button--action">
                        <nuxt-icon name="icon-print"/>
                      </button>
                      <button class="button button--action">
                        <nuxt-icon name="icon-comparison"/>
                      </button>
                    </div>
                  </div>
                </div>
              </template>
              <template #more>
                <button class="button button--show">Показать больше комплектаций</button>
              </template>
            </Complectations>
            <Specifications class="folder__specifications">
              <template #title>
                Lixiang L9, 2.5 л, АКПП, 4Motion Connect
              </template>
              <template #specifications>
                <div class="specification" v-for="i in 4" :key="i">
                  <div class="specification__title">Тип двигателя</div>
                  <div class="specification__value">Бензин</div>
                </div>
              </template>
              <template #more>
                <button class="button button--show">Показать больше характеристик</button>
              </template>
            </Specifications>
          </div>
          <div class="folder__page-right">
            <div class="folder__page-group">
              <div class="folder__page-img-wrapper">
                <img src="/img/mock/folder-page.png" alt="folder">
              </div>
              <Colors class="folder__colors">
                <template #colors>
                  <div class="colors__item" v-for="i in 7" :key="i"></div>
                </template>
              </Colors>
            </div>
            <div class="folder__page-buy">
              <div class="heading-group__label folder__page-buy-title">
                Lixiang L9, 2.5 л, АКПП, 4Motion Connect
              </div>
              <div class="folder__page-prices">
                <div class="folder__page-price">
                  7 520 000 ₽
                </div>
                <div class="folder__page-price-credit">
                  В кредит 132 500 ₽ / мес.
                </div>
              </div>
              <div class="folder__page-buy-controls">
                <button class="button button--link">Trade-In</button>
                <button class="button button--credit">Купить в кредит</button>
              </div>
              <div class="folder__page-actions">
                <CheckBoxForm v-model="hasCredit">
                  <template #text>
                    <span>Автокредит от 4.9%</span>
                  </template>
                  <template #value>
                    <span class="checkbox__text-value">-350 000 ₽</span>
                  </template>
                </CheckBoxForm>
                <CheckBoxForm v-model="hasExchange">
                  <template #text>
                    <span>Выгодный Trade-In</span>
                  </template>
                  <template #value>
                    <span class="checkbox__text-value">-250 000 ₽</span>
                  </template>
                </CheckBoxForm>
                <CheckBoxForm v-model="hasGosProgram">
                  <template #text>
                    <span>Госпрограмма 2023</span>
                  </template>
                  <template #value>
                    <span class="checkbox__text-value">-150 000 ₽</span>
                  </template>
                </CheckBoxForm>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import Crumbs from '~/components/Crumbs/index.vue';
import Complectations from '~/components/Folder/Complectations.vue';
import Specifications from '~/components/Folder/Specifications.vue';
import Colors from '~/components/Folder/Colors.vue';
import Tech from '~/components/Tech/index.vue';
import CheckBoxForm from '~/components/Form/form-components/CheckBoxForm.vue';
import { TechType } from '~/app/types/tech';

const filter = ref({
  engine: null,
  gearbox: null
});
const endineTypes = [
  'test1',
  'test2',
  'test3',
  'test4',
];
const gearboxes = [
  'test1',
  'test2',
  'test3',
  'test4',
];

const hasCredit = ref(true);
const hasExchange = ref(true);
const hasGosProgram = ref(true);

const currentTechs = computed<TechType[]>(() => {
  return [
    {
      title: 'год',
      slug: 'year',
      value: '2022',
      icon: 'icon-year'
    },
    {
      title: 'коробка',
      slug: 'gearbox',
      value: 'АКПП',
      icon: 'icon-gear'
    },
    {
      title: 'пробег',
      slug: 'run',
      value: '107 520 км',
      icon: 'icon-mileage',
    },
    {
      title: 'объем двигателя',
      slug: 'engine_volume',
      value: '2.5 л',
      icon: 'icon-volume',
    },
    {
      title: 'мощность двигателя',
      slug: 'engine_power',
      value: '222 л.с.',
      icon: 'icon-engine',
    },
    {
      title: 'тип двигателя',
      slug: 'engine_type',
      value: 'Бензин',
      icon: 'icon-fuel'
    },
    {
      title: 'тип кузова',
      slug: 'body_type',
      value: 'Седан',
      icon: 'icon-form'
    },
    {
      title: 'привод',
      slug: 'drive_type',
      value: 'Задний',
      icon: 'icon-wd'
    }
  ];
});
</script>