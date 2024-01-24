<template>
  <div class="car__info grid__col-6">
    <div class="car__info-tabs">
      <div class="tabs">
        <ul class="tabs__list" id="tabs" role="tablist">
          <li
              role="presentation"
              class="tabs__item"
              :ref="'tab' + index"
              v-for="(tab, index) in tabs"
              :key="index + 1"
              :id="tab.id"
              v-show="tab.showButton"
              :class="{ 'tabs__item--active': activeTab === index + 1 }"
          >
            <button
                @click="onTabClick(index + 1)"
                class="tabs__link"
                role="tab"
                data-toggle="tab"
            >
              {{ tab.title }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="swiper swiper--car-info">
      <div class="car__info-groups swiper-wrapper">
        <OfferTech
            v-if="showTech"
            class="swiper-slide car__info-group--tech"
        />
        <OfferTerms
            v-if="showTerms && isMobile"
            class="swiper-slide car__info-group--options"
        />
        <OfferComplectation/>
        <!--        <car-complectation-->
        <!--            v-if="-->
        <!--                !$device.isMobile &&-->
        <!--                showComplectation &&-->
        <!--                equipment_group_list.length-->
        <!--              "-->
        <!--            :offer="offer"-->
        <!--            class="swiper-slide car__info-group&#45;&#45;options"-->
        <!--        />-->
        <!--        <car-description-->
        <!--            v-if="offer.description && !$device.isMobile"-->
        <!--            :offer="offer"-->
        <!--            :page-title="pageTitle"-->
        <!--        />-->
        <!--        <car-dealer-->
        <!--            v-if="!$device.isMobile"-->
        <!--            :offer="offer"-->
        <!--            class="swiper-slide car__info-group&#45;&#45;options"-->
        <!--        />-->
      </div>
      <!-- <div class="swiper-pagination"></div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import OfferTech from '~/components/Offer/Tech.vue';
import OfferTerms from '~/components/Offer/Terms.vue';

const { isMobile } = useDevice();

let activeTab = ref(1);
const tabs = computed(() => {
  let tabs = [
    {
      title: 'Характеристики',
      id: 'tab-1',
      showButton: true,
    },
    {
      title: 'Преимущества',
      id: 'tab-2',
      showButton: true
      // !!this.equipment_group_list.length,
    },
  ];


  return tabs.filter((item) => item.showButton);
});
const showTech = computed(() => {
  if (isMobile) {
    return activeTab.value === 1;
  } else {
    return true;
  }
});
const showTerms = computed(() => {
  if (isMobile) {
    return activeTab.value === 2;
  } else {
    return true;
  }
});

function onTabClick(index: number) {
  activeTab.value = index;
  // await this.carInfoSwiper.slideTo(tab - 1)
}
</script>