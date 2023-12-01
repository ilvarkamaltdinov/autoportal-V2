<template>
  <main class="page-main">
    <div class="grid">
<!--      <crumbs :crumbs="crumbs"/>-->
    </div>
    <div class="grid grid--container">
      <section class="page-main__faq faq grid">
        <div class="heading-group heading-group--h1">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1">
              {{ title }}
              <span class="heading__promo"></span>
            </h1>
            <span class="heading-group__label">Отвечаем на ваши вопросы</span>
          </div>
        </div>
        <div class="grid__col-12 grid">
          <div class="grid__col-3">
            <div class="faq__nav">
              <ul class="faq__nav-list">
                <NavItem v-for="item in navItems" :key="item.slug" :slug="item.slug">
                  {{ item.title }}
                </NavItem>
              </ul>
            </div>
          </div>
          <div class="grid__col-9">
            <section class="faq__questions col">
              <div class="faq__questions-block">
                <div class="faq__questions-group"
                     v-for="item in body"
                     :key="item.slug"
                     :id="`faq-${item.slug}`">
                  <h2 class="faq__heading heading heading--h2">{{ item.title }}</h2>
                  <div class="faq__item"
                       :class="{'faq__item--active':question.active}"
                       v-for="question in item.list"
                       @click="question.active = !question.active"
                       :key="question.question">
                    <dt class="faq__question">{{ question.question }}</dt>
                    <VueSlideToggle :open="question.active"
                                    :duration="500">
                      <dd class="faq__answer">{{ question.answer }}</dd>
                    </VueSlideToggle>
                    <NuxtIcon class="faq__close"
                              name="icon-close-s" />
                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import NavItem from '~/components/Knowledge/NavItem.vue';

const navItems = computed(() => [
  {
    title: 'Общие вопросы',
    slug: 'general'
  },
  {
    title: 'Автокредитование',
    slug: 'credit'
  },
  {
    title: 'Госпрограммы',
    slug: 'programms'
  },
  {
    title: 'Акции',
    slug: 'promo'
  },
  {
    title: 'Обмен авто',
    slug: 'exchange'
  },
  {
    title: 'Выкуп',
    slug: 'buyout'
  },
  {
    title: 'Тест-драйв',
    slug: 'test'
  },
]);

</script>
