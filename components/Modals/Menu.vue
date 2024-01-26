<template>
  <section class="modal modal--menu">
    <h2 class="visually-hidden">Меню сайта</h2>
    <div class="modal__wrap grid grid__container">
      <div class="modal__theme">
        <p>Переключение темы:</p>
        <ThemeToggle/>
      </div>
      <nav class="main-nav main-nav--modal grid__col-12">
        <ul class="main-nav__list site-list" v-if="isDesktop">
          <li class="site-list__item site-list__item--group" v-for="item in navList" :key="item.title">
            <div class="site-list__link site-list__link--group">{{ item.title }}</div>
            <ul class="site-list__group-list">
              <li class="site-list__item site-list__item--sub" v-for="sub in item.links" :key="sub.name"
                  @click="useHeader().setMenu(false)">
                <a v-if="sub.blank" target="_blank" :href="sub.link"> {{ sub.name }} </a>
                <nuxt-link v-else class="site-list__link"
                           :to="sub.link">
                  {{ sub.name }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="main-nav__list site-list" v-if="isMobile">
          <li class="site-list__item site-list__item--group"
              v-for="item in navList" :key="item.title">
            <div class="site-list__link site-list__link--group">
              {{ item.title }}
            </div>
            <!--            <VueSlideToggle :open="activeItems.indexOf(index) !== -1"-->
            <!--                            :duration="500">-->
            <!--              <ul class="site-list__group-list">-->
            <!--                <li class="site-list__item site-list__item&#45;&#45;sub"-->
            <!--                    v-if="sub.show"-->
            <!--                    v-for="sub in item.links"-->
            <!--                    :key="sub.name">-->
            <!--                  <a class="site-list__link"-->
            <!--                     v-if="sub.blank"-->
            <!--                     target="_blank"-->
            <!--                     :href="sub.link">{{ sub.name }}-->
            <!--                  </a>-->
            <!--                  <nuxt-link v-else-->
            <!--                             @click.native="setModalMenu(false)"-->
            <!--                             class="site-list__link"-->
            <!--                             :to="sub.link">-->
            <!--                    {{ sub.name }}-->
            <!--                  </nuxt-link>-->
            <!--                </li>-->
            <!--              </ul>-->
            <!--            </VueSlideToggle>-->


          </li>
        </ul>
        <Social/>
      </nav>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useHeader } from '~/store/header';
import ThemeToggle from '~/components/Inputs/ThemeToggle.vue';

const { isMobile, isDesktop } = useDevice();

type NavListType = {
  title: string
  links: {
    name: string
    link: string
    show: boolean
    blank?: boolean
  }[]
}

const navList = computed<NavListType[]>(() => {
  return [
    {
      title: 'Автомобили',
      links: [
        {
          name: 'Новые',
          link: '/new',
          show: true
        },
        {
          name: 'С пробегом',
          link: '/used',
          show: true
        },
        {
          name: 'Коммерческие',
          link: '/commercial',
          show: true
        },
        {
          name: 'Из Европы',
          link: '/europe',
          show: true
        }
      ],
    },
    {
      title: 'Услуги',
      links: [
        {
          name: 'Автокредит',
          link: '/',
          show: true
        },
        {
          name: 'Trade-In',
          link: '/',
          show: true
        },
        {
          name: 'Рассрочка',
          link: '/',
          show: true
        },
        {
          name: 'Бесплатный подбор',
          link: '/',
          show: true
        },
        {
          name: 'Выкуп',
          link: '/',
          show: true
        },
        {
          name: 'Такси+',
          blank: true,
          link: 'https://taxi.carro.ru',
          show: true
        }
      ]
    },
    {
      title: 'Информация',
      links: [
        {
          name: 'Контакты',
          link: '/contacts',
          show: true
        },
        {
          name: 'Блог',
          link: '/blog',
          show: true
        },
        {
          name: 'Отзывы',
          link: '/reviews-dealers',
          show: true
        },
        {
          name: 'О портале',
          link: '/about',
          show: true
        },
        {
          name: 'Помощь',
          link: '/knowledge',
          show: true
        },
      ],
    },
    {
      title: 'Автосалоны',
      links: [
        {
          name: 'Автосалоны-партнеры',
          link: '/contact',
          show: true
        },
        {
          name: 'Предложения',
          link: '/best-moscow-autosalon',
          show: true
        }
      ],
    },
    {
      title: 'Банки',
      links: [
        {
          name: 'Банки-партнеры',
          link: '/banks-partners',
          show: true
        }
      ],
    },
  ];
});
</script>
