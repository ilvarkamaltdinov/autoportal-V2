<template>
  <div class="catalog__list grid grid--catalog">
    <MiniCardDesktopSmall :offer="offer" v-for="offer in offers"/>
    <VueEternalLoading v-if="current_page <= last_page" :load="load">
      <template #loading>
        <div class="my-loading">
          Trying to load content...
        </div>
      </template>
    </VueEternalLoading>
    <!--    <component :is="component"-->
    <!--               v-for="offer in offersList"-->
    <!--               :offer="offer"-->
    <!--               @choseClick="choseClick(offer)"-->
    <!--               :choose="true"-->
    <!--               :is-form="true"-->
    <!--               :key="offer.id"/>-->
  </div>
  <!--              <client-only>-->
  <!--                <infinite-loading :identifier="infiniteId" @infinite="getOffers"-->
  <!--                                  :throttle-limit="2500">-->
  <!--                  <div slot="spinner">-->
  <!--                    <div class="catalog__list grid grid&#45;&#45;catalog">-->
  <!--                      <component :is="skeleton"-->
  <!--                                 v-for="i in 4"-->
  <!--                                 :key="i" />-->
  <!--                    </div>-->
  <!--                  </div>-->
  <!--                  <div slot="no-more"></div>-->
  <!--                  <div slot="no-results"></div>-->
  <!--                </infinite-loading>-->
  <!--              </client-only>-->
</template>
<script setup lang="ts">
import MiniCardDesktopSmall from '~/components/MiniCard/DesktopSmall.vue'
import {OffersTypeData, OffersTypeRequest, OfferType} from "~/app/types/offers";

import {VueEternalLoading, LoadAction} from '@ts-pro/vue-eternal-loading';
import {useModals} from "~/store/modals";
import {request} from '~/helpers/request'
import {offersGql} from "~/apollo/queries/offer/offers00";

const loading = ref<boolean>(true)
const current_page = ref(1)
const last_page = ref(1)
const offers = ref<OfferType[]>([])

let variables = computed<OffersTypeRequest>(() => {
  return {
    category: 'cars',
    mark_slug: useModals().modalOfferSelection_mark?.slug,
    folder_slug: useModals().modalOfferSelection_folder?.slug,
    generation_slug: useModals().modalOfferSelection_generation?.slug,
    limit: 4,
    page: current_page.value,
    dateFormat: 'j F Y года.',
  }
})


const getOffers = async () => {
  const {pending, data} = await request<OffersTypeData, OffersTypeRequest>(offersGql, variables.value)
  offers.value.push(...data.value?.offers.data)
  last_page.value = data.value?.offers.last_page
}

async function load({loaded}: LoadAction) {
  await getOffers()
  current_page.value += 1
  loaded()
}

</script>