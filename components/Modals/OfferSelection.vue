<template></template>

<!--<template>-->
<!--  <div class="modal__options">-->
<!--    <div class="tabs tabs&#45;&#45;modal">-->
<!--      <ul class="tabs__list" role="tablist">-->
<!--        <li role="presentation"-->
<!--            class="tabs__item"-->
<!--            :class="{'tabs__item&#45;&#45;active':tabComponent === 'mark'}">-->
<!--          <button class="tabs__link"-->
<!--                  @click="tabClick('mark')">-->
<!--            {{ modalOfferSelection_mark ? '1. ' + modalOfferSelection_mark.title : '1. Марка' }}-->
<!--          </button>-->
<!--        </li>-->
<!--        <li role="presentation"-->
<!--            class="tabs__item"-->
<!--            :class="{'tabs__item&#45;&#45;active':tabComponent === 'folder', 'tabs__item&#45;&#45;disabled':!modalOfferSelection_mark}">-->
<!--          <button class="tabs__link"-->
<!--                  @click="tabClick('folder')">-->
<!--            {{ modalOfferSelection_folder ? '2. ' + modalOfferSelection_folder.title : '2. Модель' }}-->
<!--          </button>-->
<!--        </li>-->
<!--        <li role="presentation"-->
<!--            class="tabs__item"-->
<!--            :class="{'tabs__item&#45;&#45;active':tabComponent === 'generation', 'tabs__item&#45;&#45;disabled':!modalOfferSelection_folder}">-->
<!--          <button class="tabs__link"-->
<!--                  @click="tabClick('generation')">-->
<!--            {{ modalOfferSelection_generation ? '3. ' + modalOfferSelection_generation.name : '3. Поколение' }}-->
<!--          </button>-->
<!--        </li>-->
<!--        <li role="presentation"-->
<!--            class="tabs__item"-->
<!--            :class="{'tabs__item&#45;&#45;active':tabComponent === 'offer', 'tabs__item&#45;&#45;disabled':!modalOfferSelection_generation}">-->
<!--          <button class="tabs__link"-->
<!--                  @click="tabClick('offer')">-->
<!--            {{ modalOfferSelection_offer ? '4. ' + modalOfferSelection_offer : '4. Автомобиль' }}-->
<!--          </button>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div v-if="tabComponent === 'mark'">-->
<!--    <div class="modal__wrap" v-if="isMobile">-->
<!--      &lt;!&ndash;                  <makes :for-chose-modal="true"/>&ndash;&gt;-->
<!--    </div>-->
<!--    <div class="modal__wrap modal__wrap&#45;&#45;modal" v-else>-->
<!--      <div class="makes__letters">-->
<!--        <ul class="makes__letters-list">-->
<!--          <li v-for="item in getAlphabet(marks)">-->
<!--            <a href="#" class="makes__letters-link">-->
<!--              {{ item }}-->
<!--            </a>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
<!--      <div class="makes">-->
<!--        <div class="makes__wrap">-->
<!--          <ul class="makes__list makes__list&#45;&#45;popular">-->
<!--            <li v-for="mark in getPopularMarks(marks, 10)"-->
<!--                class="makes__popular-item">-->
<!--                    <span class="makes__popular-link ">-->
<!--                      <nuxt-icon :name="'icon-' + mark.title.toLowerCase()"-->
<!--                                 class="makes__popular-logo"/>-->
<!--                    </span>-->
<!--            </li>-->
<!--          </ul>-->
<!--          <div class="makes__group"-->
<!--               v-for="letter in getAlphabet(marks)"-->
<!--               :key="letter">-->
<!--            <div class="makes__letter-item">-->
<!--              <a class="makes__letters-link"-->
<!--                 :id="letter"-->
<!--                 href="">-->
<!--                {{ letter }}-->
<!--              </a>-->
<!--            </div>-->
<!--            <ul class="makes__list makes__list&#45;&#45;modal">-->
<!--              <li class="makes__item" @click="selectMark(mark)" v-for="mark in filterMarksByLetter(marks, letter)">-->
<!--                      <span class="makes__link">-->
<!--                        <span class="makes__title">-->
<!--                          {{ mark.title }}-->
<!--                        </span>-->
<!--                        <span class="makes__qty">-->
<!--                          {{ mark.offers_count }}-->
<!--                        </span>-->
<!--                      </span>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div v-if="tabComponent === 'folder'">-->
<!--    <div class="modal__wrap">-->
<!--      <div class="modal__choose-group">-->
<!--        <h3 class="heading heading&#45;&#45;h2">Модель</h3>-->
<!--        <div class="makes">-->
<!--          <div class="makes__wrap">-->
<!--            <ul class="makes__list makes__list&#45;&#45;models">-->
<!--              <li class="makes__item" @click="selectFolder(folder)" v-for="folder in folders">-->
<!--                      <span class="makes__link">-->
<!--                        <span class="makes__title">-->
<!--                          {{ folder.title }}-->
<!--                        </span>-->
<!--                        <span class="makes__qty">-->
<!--                          {{ folder.offers_count }}-->
<!--                        </span>-->
<!--                      </span>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div v-if="tabComponent === 'generation'">-->
<!--    <div class="modal__wrap">-->
<!--      <div class="modal__choose-group">-->
<!--        <h3 class="heading heading&#45;&#45;h2">Поколение</h3>-->
<!--        <div class="makes">-->
<!--          <div class="makes__wrap">-->
<!--            <ul class="makes__list makes__list&#45;&#45;models">-->
<!--              <li class="makes__item" @click="selectGeneration(generation)" v-for="generation in generations">-->
<!--                      <span class="makes__link">-->
<!--                        <span class="makes__title">-->
<!--                          {{ generation.name }}-->
<!--                            <span>-->
<!--					                    [{{ generation.year_begin }} - {{ generation.year_end ? generation.year_end : 'н.в.' }}]-->
<!--				                    </span>-->
<!--                        </span>-->
<!--                        <span class="makes__qty">-->
<!--                          {{ generation.offers_count }}-->
<!--                        </span>-->
<!--                      </span>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div v-if="tabComponent === 'offer'">-->
<!--    <div class="modal__wrap">-->
<!--      <section class="page-main__catalog catalog grid">-->
<!--        <h2 class="visually-hidden">Автомобили в наличии</h2>-->
<!--        <div class="grid__col-8">-->
<!--          <CatalogFilter/>-->
<!--          <CatalogModal/>-->
<!--        </div>-->
<!--      </section>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script setup lang="ts">-->
<!--import ModalsTemplate from '~/components/Modals/Template.vue';-->
<!--import CatalogFilter from '~/components/Catalog/Filter.vue';-->
<!--import CatalogModal from '~/components/Catalog/Modal.vue';-->
<!--import {useModals} from '~/store/modals';-->
<!--import {useSiteConfig} from '~/store/siteConfig';-->
<!--import {filterMarksByLetter, getAlphabet, getPopularMarks} from '~/helpers/filterMarks';-->
<!--import {MarkType} from '~/app/types/marks';-->
<!--import {FolderType} from '~/app/types/folders';-->
<!--import {GenerationType} from '~/app/types/generations';-->

<!--const {isMobile} = useDevice();-->

<!--const modalOfferSelection_mark = computed(() => useModals().modalOfferSelection_mark);-->
<!--const modalOfferSelection_folder = computed(() => useModals().modalOfferSelection_folder);-->
<!--const modalOfferSelection_generation = computed(() => useModals().modalOfferSelection_generation);-->
<!--const modalOfferSelection_offer = computed(() => useModals().modalOfferSelection_offer);-->

<!--const tabComponent = ref<string>('mark');-->

<!--const marks = useSiteConfig().marks;-->
<!--const folders = computed<FolderType[] | undefined>(() => modalOfferSelection_mark.value?.folders);-->
<!--const generations = computed<GenerationType[] | undefined>(() => modalOfferSelection_folder.value?.generations);-->
<!--const tabClick = (tab: string) => {-->
<!--  tabComponent.value = tab;-->
<!--};-->

<!--const selectMark = (mark: MarkType) => {-->
<!--  useModals().setModalOfferSelection_mark(mark);-->
<!--  useModals().setModalOfferSelection_folder(null);-->
<!--  useModals().setModalOfferSelection_generation(null);-->
<!--  tabComponent.value = 'folder';-->
<!--};-->
<!--const selectFolder = (folder: FolderType) => {-->
<!--  useModals().setModalOfferSelection_folder(folder);-->
<!--  useModals().setModalOfferSelection_generation(null);-->
<!--  tabComponent.value = 'generation';-->
<!--};-->
<!--const selectGeneration = (generation: GenerationType) => {-->
<!--  useModals().setModalOfferSelection_generation(generation);-->
<!--  tabComponent.value = 'offer';-->
<!--};-->
<!--</script>-->
