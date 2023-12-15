<template>
  <div class="benefits grid__col-12" :class="{ 'benefits--modal': modal, 'benefits--mobile': catalog }">
    <ul class="benefits__list benefits__list--car">
      <li class="benefits__item" v-for="(benefit, index) in currenBenefits" :key="index">
        <a @click.prevent="hasModal ? openBenefit(benefit) : false" class="benefits__link popup--link" href="">
          <nuxt-icon class="benefits__icon" :name="`icon-${benefit.icon}`"/>
          <div class="benefits__text">
            {{ benefit.text }}
            <div class="benefits__text-strong">
              {{ benefit.text_strong }}
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Benefit } from '~/app/types/benefits';

const props = defineProps<{
  hasModal?: boolean;
  modal?: boolean;
  catalog?: boolean;
  type: string
}>();

const { $settings } = useNuxtApp();

const benefits = computed<Benefit[]>(() => {
  return [
    {
      text: 'Доставка из Европы',
      text_strong: 'бесплатно',
      icon: 'delivery',
      description: 'Доставим автомобиль из Европы и подготовим пакет документов за наш счет.',
      slug: 'delivery',
    },
    {
      text: 'Задаток',
      text_strong: 'не требуется',
      icon: 'ruble',
      description: 'Привезем автомобиль из Европы без предоплаты с вашей стороны.',
      slug: 'pre-pay',
    },
    {
      text: 'Транспортировка',
      text_strong: '10-14 дней',
      icon: 'engine',
      description: 'Доставка автомобиля из Европы займет ориентировочно 14 дней.',
      slug: 'transportation',
    },
    {
      text: 'Техосмотр в Европе',
      text_strong: 'бесплатно',
      icon: 'form',
      description: 'Привезем автомобиль, который прошел полный технический осмотр в Европе.',
      slug: 'europe-tech',
    },
    {
      text: 'Страхование перевозки',
      text_strong: 'за наш счет',
      icon: 'shield',
      description: 'Застрахуем автомобиль от всех рисков на время транспортировки.',
      slug: 'europe-insurance',
    },
    {
      text: 'Гарантия',
      text_strong: '2 года',
      icon: 'shield',
      description: `Автосалоны-партнеры ${$settings.dealer_title} предоставляют гарантию на техническое состояние автомобиля в течение двух лет с момента покупки.`,
      slug: 'guaranty',
    },
    {
      text: 'Бесплатная',
      text_strong: 'оценка',
      icon: 'search',
      description: `Автосалоны-партнеры ${$settings.dealer_title} бесплатно оценят ваш автомобиль для последующего обмена.`,
      slug: 'free-value',
    },
    {
      text: 'Гарантия 5 лет',
      text_strong: 'или 150 000 км',
      icon: 'shield',
      description: `Автосалоны-партнеры ${$settings.dealer_title} предоставляют гарантию на техническое состояние нового автомобиля в течение 5 лет или 150 000 км.`,
      slug: 'guaranty-new',
    },
    {
      text: 'Скидка',
      text_strong: 'до 300 000 ₽',
      icon: 'bank',
      description: `При оформлении автомобиля в кредит через ${$settings.dealer_title} Вам предоставляется дополнительная скидка в размере до 300 000 ₽ от изначальной стоимости автомобиля.`,
      slug: 'sale',
    },
    {
      text: 'Выгода',
      text_strong: 'до 300 000 ₽',
      icon: 'bank',
      description: `При обмене автомобиля по программе Trade-In через ${$settings.dealer_title} Вам предоставляется скидка до 300 000 ₽ от изначальной стоимости нового автомобиля.`,
      slug: 'sale-trade',
    },
    {
      text: 'Автокредит',
      text_strong: 'от 4.9%',
      icon: 'bank',
      description: `На ${$settings.dealer_title} представлены только проверенные автоцентры и банки. Ставка ниже 4.9% по автокредиту является неправдивой (ниже ставки рефинансирования ЦБ РФ) и как правило предлагается недобросовестными сайтами и автосалонами.`,
      slug: 'credit',
    },
    {
      text: 'Первый взнос',
      text_strong: 'от 0%',
      icon: 'engine',
      description: 'Вы можете приобрести автомобиль в кредит без первоначального взноса, однако, чем больше взнос, тем лучше условия по кредиту.',
      slug: 'first-pay',
    },
    {
      text: 'Первый взнос',
      text_strong: 'от 10%',
      icon: 'engine',
      description: 'Вы можете приобрести автомобиль в рассрочку даже с минимальным взносом от 10%.',
      slug: 'first-pay-alt',
    },
    {
      text: 'Trade-In как',
      text_strong: 'первый взнос',
      icon: 'trade-in',
      description: 'В качестве первоначального взноса Вы можете сдать свой автомобиль по системе Trade-In с дополнительной скидкой до 300 000 ₽.',
      slug: 'first-pay-trade',
    },
    {
      text: 'По паспорту',
      text_strong: 'и правам',
      icon: 'docs',
      description: `Для оформления автомобиля в кредит через ${$settings.dealer_title} Вам потребуются только паспорт и водительское удостоверение.`,
      slug: 'docs',
    },
    {
      text: 'Зимняя резина',
      text_strong: 'в подарок',
      icon: 'tires',
      description: `При покупке автомобиля через ${$settings.dealer_title} каждый клиент получает второй комплект резины в подарок.`,
      slug: 'tires',
    },
    {
      text: 'ОСАГО',
      text_strong: 'в подарок',
      icon: 'insurance',
      description: `При покупке автомобиля в кредит через ${$settings.dealer_title} каждый клиент получает ОСАГО в подарок.`,
      slug: 'insurance',
    },
    {
      text: 'Рыночная',
      text_strong: 'цена',
      icon: 'ruble',
      description: 'Будьте уверены, что оценка автомобиля будет максимально лояльной, соответствующей рыночным ценам, и Вы получите всю сумму на руки.',
      slug: 'value-market',
    },
    {
      text: 'Оформление',
      text_strong: 'за 30 мин.',
      icon: 'engine',
      description: 'Благодаря упрощенному процессу получения кредита весь процесс займет не более получаса.',
      slug: 'fast-time',
    },
    {
      text: 'Мгновенная',
      text_strong: 'выплата',
      icon: 'credit-card',
      description: 'После оформления документов Вы получите всю сумму на руки без задержек и проволочек.',
      slug: 'fast-pay',
    },
    {
      text: 'Выезд',
      text_strong: 'оценщика',
      icon: 'form',
      description: 'Мы предлагаем бесплатную оценку с возможностью выезда независимого мастера-оценщика.',
      slug: 'value-man',
    },
    {
      text: 'Оценка',
      text_strong: 'бесплатно',
      icon: 'engine',
      description: 'Все расходы, связанные с диагностикой и оценкой автомобиля, а также его юридической чистотой, мы берем на себя.',
      slug: 'value-free',
    }
  ];
});
const benefitsTypes = {
  credit: ['sale', 'guaranty', 'docs', 'first-pay', 'first-pay-trade', 'insurance'],
  creditMobile: ['docs', 'insurance'],
  installment: ['sale', 'guaranty', 'docs', 'first-pay-alt', 'first-pay-trade', 'insurance'],
  tradeIn: ['sale-trade', 'free-value', 'docs', 'value-market', 'first-pay-trade', 'fast-time'],
  buyout: ['fast-pay', 'value-market', 'value-man', 'value-free', 'docs', 'fast-time'],
  offer: ['guaranty', 'first-pay', 'docs', 'first-pay-trade', 'tires', 'insurance'],
  new: ['guaranty-new', 'first-pay', 'docs', 'first-pay-trade', 'tires', 'insurance'],
  installmentNew: ['guaranty-new', 'first-pay', 'docs', 'first-pay-trade', 'tires', 'insurance'],
  europe: ['delivery', 'pre-pay', 'transportation', 'europe-tech', 'europe-insurance'],
};
const currenBenefits = computed(() => {
  return benefits.value.filter((item) => {
    return benefitsTypes[props.type].indexOf(item.slug) !== -1;
  });
});

function openBenefit(benefit: Benefit) {
  console.log(benefit);
}
</script>