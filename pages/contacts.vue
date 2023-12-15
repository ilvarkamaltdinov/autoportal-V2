<template>
  <main class="page-main">
    <div class="grid grid--container">
      <section class="page-main__about about grid">
        <div class="heading-group heading-group--h1">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1">{{ title }}
              <span class="heading__promo"></span>
            </h1>
            <span class="heading-group__label">Свяжитесь с нами</span>
          </div>
        </div>
        <div class="about__block grid__col-12 grid text">
          <div class="grid__col-7 text__wrap text__wrap--figure">
            <div class="text__figure figure">
              <NuxtImg
                  class="text__figure-img"
                  src="/img/figures/figure-5@2x.png"
              />
            </div>
            <div class="text__content">
              <div class="text__contacts-group" v-if="$settings.phone">
                <div class="text__contacts-label">Вопросы о портале:</div>
                <a class="text__contacts-item"
                   v-if="!isNight"
                   :href="`tel:${$settings.phone}`">{{ $settings.phone }}
                </a>
                <span class="text__contacts-item" v-else @click="callback">
                              {{ $settings.phone }}
                                </span>
              </div>
              <div class="text__contacts-group">
                <div class="text__contacts-label">Вопросы сотрудничества:</div>
                <a class="text__contacts-item"
                   :href="`mailto:${$settings.email}`">{{ $settings.email }}
                </a>
              </div>
              <template v-if="dealers">
                <div class="text__contacts-group" v-for="(dealer, index) in dealers"
                     :key="dealer.id">
                  <div class="text__contacts-label">
                    Филиал в {{ $settings.in_city }} № {{ index + 1 }}:
                  </div>
                  <p class="text__p">
                    {{ dealer.address }}
                  </p>
                </div>
              </template>
            </div>
          </div>
          <div class="grid__col-5 text__wrap">
            <div class="text__content">
              <h2 class="heading heading--h2">Юридическая информация</h2>
              <div class="text__contacts-label">Юридический адрес:</div>
              <p class="text__p"> 115487, г. Москва, ул. Нагатинская, 16/9</p>
              <div class="text__contacts-label">Физический адрес:</div>
              <p class="text__p">117405, г. Москва, Варшавское шоссе, 170Г</p>
              <ul class="text__list">
                <li class="text__list-item">ООО «Ю-СТАЙЛ»</li>
                <li class="text__list-item">ИНН: 7724398974</li>
                <li class="text__list-item">ОГРН: 1177746078916</li>
                <li class="text"></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { DealersContactQueryVariables, Dealer } from '~/types/graphql';
import { request } from '~/helpers/request';
import { dealersContact } from '~/apollo/queries/dealer/dealersContact';

const { data: { value: { dealers } } } = await request<{
  dealers: Dealer[]
}, DealersContactQueryVariables>(dealersContact, {});
</script>
