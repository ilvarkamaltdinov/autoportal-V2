<template>
  <header class="page-header">
    <div class="page-header__container grid grid--header">
      <div class="page-header__wrap grid__col-12">
        <div class="page-header__logo-block">
          <label @change="useHeader().setMenu(!menu)" class="page-header__toggle hamburger"
                 for="hamburger"
                 tabindex="0">
            <input id="hamburger"
                   :checked="menu"
                   type="checkbox"/>
            <span class="hamburger__element"></span>
            <span class="hamburger__element"></span>
            <span class="hamburger__element"></span>
            <span class="visually-hidden">Меню сайта</span>
          </label>
          <nuxt-link @click.prevent="useHeader().setMenu(false)" class="page-header__logo" to="/">
            <div class="page-header__logo-img-wrap">
              <img
                  src="/img/logo-part-1.svg"
                  :alt="`Портал проверенных автомобилей с пробегом — ${$settings.dealer_anchor}`"
                  height="24"
                  width="24"
                  class="page-header__logo-circle"
              />
              <img
                  src="/img/logo-part-2.svg"
                  :alt="`Портал проверенных автомобилей с пробегом — ${$settings.dealer_anchor}}`"
                  height="13"
                  width="79"
                  class="page-header__logo-letters"
              />
            </div>
          </nuxt-link>
        </div>
        <nav class="main-nav page-header__nav page-header__nav--desktop">
          <ul class="main-nav__list site-list site-list--desktop">
            <li class="site-list__item" v-for="item in menuList" :key="item.link">
              <nuxt-link
                  :to="item.link"
                  :title="item.title"
                  class="site-list__link"
              >
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <ul class="page-header__buttons">
          <li class="page-header__buttons-item">
            <nuxt-link to="/favorites"
                       class="page-header__buttons-link"
                       title="Избранное"
                       aria-label="Избранное">
              <span v-if="likes > 0"
                    class="page-header__favorites-count">
                        {{ likes }}
              </span>
              <nuxt-icon
                  name="icon-favorites"/>
            </nuxt-link>
          </li>
          <li class="page-header__buttons-item" @click="changeTheme">
            <div class="page-header__buttons-link">
              <nuxt-icon
                  name="icon-bmw"/>
            </div>
          </li>
          <li class="page-header__buttons-item">
            <div class="page-header__buttons-link">
              <nuxt-icon
                  name="icon-search"/>
            </div>
          </li>
          <li class="page-header__buttons-item page-header__buttons-item--call">
            <a class="page-header__buttons-link page-header__buttons-link--phone"
               title="Бесплатный звонок"
               aria-label="Бесплатный звонок">
              <nuxt-icon
                  name="icon-call"/>
              <span class="page-header__buttons-phone">+7 (499) 519-13-24</span>
            </a>
          </li>
        </ul>
      </div>
      <nav class="page-header__nav grid__col-12">
        <!--        <nuxt-link class="page-header__back">-->
        <!--          <span class="page-header__back-model">-->
        <!--            test-->
        <!--          </span>-->
        <!--          <nuxt-icon class="page-header__back-arrow" name="icon-arrow"/>-->
        <!--        </nuxt-link>-->
        <div class="page-header__nav-wrap makes">
          <ul class="makes__list makes__list--header">
            <li class="makes__item" v-for="mark in getPopularMarks(marks, 8)" :key="mark.id">
              <nuxt-link class="makes__link">
                <div class="makes__title">{{ mark.title }}</div>
                <div class="makes__count">{{ mark.offers_count }}</div>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <button class="page-header__makes-more"
                @click.prevent="useHeader().setMarks(!isMarksShowing)"
                :class="{'page-header__makes-more--active':isMarksShowing}">
          Все марки
          <nuxt-icon class="page-header__makes-more-arrow"
                     name="icon-arrow"/>
        </button>
      </nav>
    </div>
    <transition name="menu">
      <MenuMarks v-show="isMarksShowing"/>
    </transition>
  </header>
</template>
<script setup lang="ts">
import { useHeader } from '~/store/header';
import { useSiteConfig } from '~/store/siteConfig';
import { getPopularMarks } from '~/helpers/filterMarks';
import { useFavorites } from '~/store/favorites';
import { storeToRefs } from 'pinia';
import MenuMarks from '~/components/Modals/MenuMarks.vue';
import { useHead } from '#imports';


const menuList = computed(() => {
  return [
    {
      title: 'Рассрочка',
      link: '/',
    },
    {
      title: 'Автокредит',
      link: '/',
    },
    {
      title: 'Trade-In',
      link: '/',
    },
    {
      title: 'В наличии',
      link: '/used',
    },
    {
      title: 'О портале',
      link: '/about',
    }
  ];
});

const headerStore = useHeader();
const { marks: isMarksShowing } = storeToRefs(headerStore);
const menu = computed(() => useHeader().menu);
const likes = ref(0);

const isDark = ref(true);

function changeTheme() {
  isDark.value = !isDark.value;
  useHead({
    link: [{
      rel: 'stylesheet', href: isDark.value ? 'dark.css' : 'index.css', type: 'text/css', id: 'theme',
    }]
  });
}

if(process.client) {
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches }) => {
      if (matches) {
        isDark.value = true;
      } else {
        isDark.value = false;
      }
      changeTheme();
    });
}

const marks = useSiteConfig().marks;

if (process.client) {
  const favoritesStore = useFavorites();
  const { favorites } = storeToRefs(favoritesStore);
  watch(favorites, (value) => {
    likes.value = value.length;
  }, { immediate: true });
}
</script>