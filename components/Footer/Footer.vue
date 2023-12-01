<template>
  <footer class="page-footer">
    <div class="page-footer__top"></div>
    <div class="page-footer__logo lazyload">
      <picture-component
          classes="page-footer__logo-img lazyload"
          :small="`/img/logo-footer@1x.png`"
          :small-webp="`/img/logo-footer@1x.webp`"
          :big="`/img/logo-footer@2x.png`"
          :big-webp="`img/logo-footer@2x.webp`"/>
    </div>
    <div class="page-footer__wrap grid grid--footer">


      <div class="page-footer__contacts grid__col-12">
        <div class="page-footer__social">
          <Social />
          <div class="page-footer__contacts-list">
            <a class="page-footer__contacts-item"
               v-show="$settings.phone && !isNight"
               :href="`tel:${$settings.phone.replace(/[^+\d]/g, '')}`">{{ $settings.phone }}
            </a>
            <span v-show="$settings.phone && isNight" class="page-footer__contacts-item" @click="callback">
              {{ $settings.phone }}
            </span>
            <a class="page-footer__contacts-item"
               v-if="$settings.email"
               :href="`mailto:${$settings.email}`">{{ $settings.email }}
            </a>
          </div>
<!--          <div class="page-footer__city-wrap"-->
<!--               tabindex="1"-->
<!--               @focusout="isRegionsOpen = false">-->
<!--            <div class="page-footer__city">-->
<!--              <div @click="isRegionsOpen = !isRegionsOpen">-->
<!--                <nuxt-icon class="page-footer__city-icon" name="icon-map" />-->
<!--                <span>{{ $settings.city }}</span>-->
<!--              </div>-->
<!--            </div>-->
<!--            <transition name="select">-->
<!--              <div class="select__list select__list&#45;&#45;regions"-->
<!--                   v-show="isRegionsOpen">-->
<!--                <a class="select__item select__item-link"-->
<!--                   v-for="(item, index) in regions"-->
<!--                   :key="index"-->
<!--                   :title="item.name"-->
<!--                   :href="'https://' + item.link">{{ item.name }}-->
<!--                </a>-->
<!--              </div>-->
<!--            </transition>-->
<!--          </div>-->

          <div class="page-footer__credits">
            <div class="page-footer__contacts-item">© 2016 - {{ new Date().getFullYear() }} CARRO.RU</div>
          </div>
        </div>
      </div>


<!--      <div class="page-footer__links grid__col-12">-->
<!--        <ul class="page-footer__links-list">-->
<!--          <li class="page-footer__links-item">-->
<!--            <nuxt-link to="/about"-->
<!--                       class="page-footer__link">О портале-->
<!--            </nuxt-link>-->
<!--          </li>-->
<!--          <li class="page-footer__links-item"-->
<!--              v-if="true">-->
<!--            <nuxt-link to="/blog"-->
<!--                       class="page-footer__link">Блог-->
<!--            </nuxt-link>-->
<!--          </li>-->
<!--          <li class="page-footer__links-item">-->
<!--            <nuxt-link to="/contacts"-->
<!--                       class="page-footer__link">Контакты-->
<!--            </nuxt-link>-->
<!--          </li>-->
<!--          <li class="page-footer__links-item">-->
<!--            <nuxt-link to="/contact"-->
<!--                       class="page-footer__link">Автосалоны-партнеры-->
<!--            </nuxt-link>-->
<!--          </li>-->
<!--          &lt;!&ndash;<li class="page-footer__links-item">&ndash;&gt;-->
<!--          &lt;!&ndash;	<a class="page-footer__link">&ndash;&gt;-->
<!--          &lt;!&ndash; Вакансии&ndash;&gt;-->
<!--          &lt;!&ndash;	</a>&ndash;&gt;-->
<!--          &lt;!&ndash;</li>&ndash;&gt;-->
<!--          <li class="page-footer__links-item">-->
<!--            <nuxt-link to="/privacy"-->
<!--                       class="page-footer__link">-->
<!--              Пользовательское соглашение-->
<!--            </nuxt-link>-->
<!--          </li>-->
<!--          &lt;!&ndash;<li class="page-footer__links-item">&ndash;&gt;-->
<!--          &lt;!&ndash;	<nuxt-link to="/sitemap"&ndash;&gt;-->
<!--          &lt;!&ndash;	           class="page-footer__link">&ndash;&gt;-->
<!--          &lt;!&ndash;		Карта сайта&ndash;&gt;-->
<!--          &lt;!&ndash;	</nuxt-link>&ndash;&gt;-->
<!--          &lt;!&ndash;</li>&ndash;&gt;-->
<!--        </ul>-->
<!--      </div>-->
<!--      <div class="page-footer__cars grid__col-12">-->
      <!--        <div class="page-footer__cars-stock">-->
      <!--          Автомобилей в наличии:-->
      <!--          <nuxt-link to="/used"-->
      <!--                     class="page-footer__cars-stock-number">{{ numberFormat(marksQuantity) }}-->
      <!--          </nuxt-link>-->
      <!--        </div>-->
      <!--        <ul class="page-footer__makes-logos">-->
      <!--          <li class="page-footer__makes-item" v-for="make in footerMarks" :key="make.slug">-->
      <!--            <nuxt-link :to="`/used/${make.slug}`" :title="make.title" class="page-footer__makes-link">-->
      <!--              <nuxt-icon class="page-footer__makes-icon" :title="make.title"-->
      <!--                        :name="`icon-${make.slug}`" />-->
      <!--            </nuxt-link>-->
      <!--          </li>-->
      <!--        </ul>-->
      <!--      </div>-->
      <div class="page-footer__legal grid__col-12">
        <ul class="page-footer__legal-list">
          <li class="page-footer__legal-item">ООО «РИ-АДВАНС»</li>
          <li class="page-footer__legal-item">ОГРН: 1187746783047</li>
          <li class="page-footer__legal-item">ИНН / КПП: 7724451970 / 772401001</li>
          <li class="page-footer__legal-item">
            Юр. адрес: 117405, г. Москва, ул. Кирпичные Выемки,
            д. 2к1, эт. 4,
            п. XII, оф. 412
          </li>
          <li class="page-footer__legal-item">Физ. адрес: 117405, г. Москва, Варшавское шоссе, д. 170Г</li>
        </ul>
      </div>
      <div class="page-footer__disclaimer grid__col-12">

        <p class="page-footer__disclaimer-p">
          Годовая ставка автокредита варьируется от {{ $settings.credit_percent }} до {{ $settings.credit_max_percent }} и
          зависит от конкретного банка, суммы займа и
          кредитной
          программы. Минимальный срок погашения от 61 дня, максимальный - 84 месяца. При этом любые дополнительные
          комиссии
          автопорталом CARRO не взимаются.
        </p>

        <p class="page-footer__disclaimer-p">
          В случае невозвращения в условленный срок суммы автокредита или суммы процентов по автокредиту банк-партнер
          оставляет за собой право начислить штраф за просрочку платежа в среднем размере 0,1% от первоначальной суммы
          автокредита. При несоблюдении условий погашения автокредита данные о нарушителе могут быть переданы в
          специальный реестр должников и коллекторское агентство для взыскания задолженности.
        </p>

        <p class="page-footer__disclaimer-p">
          Данный Интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной
          офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ. Для получения подробной информации о
          наличии и стоимости указанных товаров и (или) услуг, пожалуйста, обращайтесь к менеджерам
          автосалонов-партнеров.
        </p>

        <p class="page-footer__disclaimer-p">
          Кредит предоставляется банком АО «Тинькофф Банк».
          <a class="page-footer__link"
             href="https://acdn.tinkoff.ru/static/documents/d7f200ac-6949-4baa-ab9b-186b11d6b168.pdf"
             target="_blank">Лицензия ЦБ РФ № 2673 от 11.04.2022
          </a>
          .
        </p>

        <p class="page-footer__disclaimer-p">
					<span>
            Обязательное страхование гражданской ответственности владельцев транспортных средств осуществляется АО «Тинькофф Страхование»
					</span>
          <img class="page-footer__insurance-logo lazyload"
               alt="tinkoff"
               data-src="/img/banks/logo-tinkoff.svg"/>
          <span>по лицензии ОС № 0191-03 от 19.05.2015 г.</span>
          <a class="page-footer__link"
             rel="nofollow"
             href="https://acdn.tinkoffinsurance.ru/static/documents/417d017c-904c-4477-a106-e8bf32008054.pdf"
             target="_blank"> Правовая информация.
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {useMarks} from '~/store/marks';
import {storeToRefs} from 'pinia';

const isRegionsOpen = ref(false);
const regions = computed(() => [
  {
    name: 'Москва',
    link: 'carro.ru'
  },
  {
    name: 'Санкт-Петербург',
    link: 'spb.carro.ru'
  },
  {
    name: 'Екатеринбург',
    link: 'ekb.carro.ru'
  },
  {
    name: 'Калуга',
    link: 'kaluga.carro.ru'
  },
  {
    name: 'Кемерово',
    link: 'kem.carro.ru'
  },
  {
    name: 'Красноярск',
    link: 'krsk.carro.ru'
  },
  {
    name: 'Новосибирск',
    link: 'nsk.carro.ru'
  },
  {
    name: 'Оренбург',
    link: 'ornb.carro.ru'
  },
  {
    name: 'Сургут',
    link: 'surgut.carro.ru'
  },
  {
    name: 'Тольятти',
    link: 'tlt.carro.ru'
  },
  {
    name: 'Тюмень',
    link: 'tmn.carro.ru'
  },
  {
    name: 'Иркутск',
    link: 'irk.carro.ru'
  },
]);
const marksStore = useMarks();
marksStore.getAllMarksFillPopular();
const { marksQuantity } = storeToRefs(marksStore);
// const footerMarks = computed(() => [
//   {
//     slug: 'bmw',
//     title: 'BMW'
//   },
//   {
//     slug: 'mercedes-benz',
//     title: 'Mercedes-Benz'
//   },
//   {
//     slug: 'volkswagen',
//     title: 'Volkswagen'
//   },
//   {
//     slug: 'skoda',
//     title: 'Skoda'
//   },
//   {
//     slug: 'nissan',
//     title: 'Nissan'
//   },
//   {
//     slug: 'mazda',
//     title: 'Mazda'
//   },
//   {
//     slug: 'kia',
//     title: 'KIA'
//   },
//   {
//     slug: 'hyundai',
//     title: 'Hyundai'
//   },
//   {
//     slug: 'ford',
//     title: 'Ford'
//   },
//   {
//     slug: 'toyota',
//     title: 'Toyota'
//   },
//   {
//     slug: 'cadillac',
//     title: 'Cadillac'
//   }
// ]);
</script>
