<template>
  <main class="page-main">
    <div class="grid ">
      <Crumbs/>
    </div>
    <div class="grid grid--container">
      <section class="page-main__catalog catalog grid catalog--used">
        <div class="heading-group heading-group--catalog heading-group--h1 grid__col-12">
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
        <div class="grid__col-12">
          <div class="folder__page">
            <div class="folder__page-left">
              test1
            </div>
            <div class="folder__page-right">
              <div class="folder__page-group">
                <div class="folder__page-img-wrapper">
                  <img src="/img/mock/folder-page.png" alt="folder">
                </div>
                <div class="folder__page-colors">
                  <div class="folder__page-color"></div>
                  <div class="folder__page-color"></div>
                  <div class="folder__page-color"></div>
                  <div class="folder__page-color"></div>
                  <div class="folder__page-color"></div>
                  <div class="folder__page-color"></div>
                  <div class="folder__page-color"></div>
                </div>
              </div>
              <div class="folder__page-buy">
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
        </div>
      </section>
      <!--      <section class="page-main__catalog catalog grid__col-12 catalog&#45;&#45;slider">-->
      <!--        <CatalogSlider title="Автомобили Lixiang в наличии"/>-->
      <!--      </section>-->
    </div>
  </main>
</template>

<script setup lang="ts">
import Crumbs from '~/components/Crumbs/index.vue';
import CheckBoxForm from '~/components/Form/form-components/CheckBoxForm.vue';

const hasCredit = ref(true);
const hasExchange = ref(true);
const hasGosProgram = ref(true);
</script>