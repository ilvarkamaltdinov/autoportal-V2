<template>
	<div class="catalog__buttons">
		<div class="catalog__actions">
<!--			<ButtonAutoteka v-if="long && $route.params.category !=='europe' && !isNew"-->
<!--                       @click="autoteka(offer)"/>-->
			<ButtonFavorite :active="likesArray.some(id => id === String(offer.external_id))"
                       @clickclack="like(offer)" />
			<!--<button-compare v-if="long" />-->
<!--			<ButtonCall v-if="offer.dealer.phone" :phone="offer.dealer.phone"-->
<!--                   @click="call"/>-->
		</div>
<!--		<div v-if="long"-->
<!--         class="catalog__actions-main">-->
<!--			<ButtonTypical button-class="button&#45;&#45;trade-in button&#45;&#45;link"-->
<!--                      text="Trade-In"-->
<!--                      @click="tradeIn(offer)"/>-->
<!--			<ButtonTypical v-if="choose"-->
<!--                      :text="isEqual ? 'Выбрано' : 'Выбрать'"-->
<!--                      button-class="button&#45;&#45;credit"-->
<!--                      @click="chooseClick(offer)"/>-->
<!--			<ButtonTypical v-else-if="$route.params.category==='europe'"-->
<!--                      button-class="button&#45;&#45;credit"-->
<!--                      text="Рассчитать кредит"-->
<!--                      @click="credit()"/>-->
<!--			<ButtonTypical v-else-->
<!--                      button-class="button&#45;&#45;credit"-->
<!--                      text="Купить в кредит"-->
<!--                      @click="credit()"/>-->
<!--		</div>-->
<!--		<div v-else>-->
<!--			<ButtonTypical v-if="choose"-->
<!--                      :class="{'button&#45;&#45;credit-selected':isEqual }"-->
<!--                      :text="isEqual ? 'Выбран' : 'Выбрать'"-->
<!--                      button-class="button&#45;&#45;credit"-->
<!--                      @click="chooseClick(offer)"/>-->
<!--			<ButtonTypical v-else-if="$route.params.category==='europe'"-->
<!--                      button-class="button&#45;&#45;credit button&#45;&#45;credit-europe"-->
<!--                      text="Рассчитать кредит"-->
<!--                      @click="credit()"/>-->
<!--			<ButtonTypical v-else-->
<!--                      button-class="button&#45;&#45;credit"-->
<!--                      text="Купить в кредит"-->
<!--                      @click="credit()"/>-->
<!--		</div>-->
	</div>
</template>

<script setup lang="ts">
import {Offer} from '~/types/graphql';
import {useFavorites} from '~/store/favorites';

defineProps<{
  offer: Offer
}>();

const favsStore = useFavorites();
const likesArray = ref(await favsStore.favoriteCars);

function like(offer: Offer){
  favsStore.like(offer.external_id!.toString());
}
// export default {
//   computed: {
//     ...mapGetters({
//       likesArray: 'favorite/favorite/likesArray',
//       currentCar: 'modal/modal-choose/currentCar',
//       settings: 'settings/settings/settings'
//     }),
//     isEqual() {
//       if (this.currentCar) {
//         return this.currentCar.id === this.offer.id;
//       } else {
//         return false;
//       }
//     },
//     isNew() {
//       return this.offer.run <= 100 && this.offer.owner.number <= 1;
//     }
//   },
//   props: {
//     isForm: {
//       type: Boolean,
//       default: false
//     },
//     long: {
//       type: Boolean,
//       default: false
//     },
//     offer: {
//       type: Object,
//       default: () => {
//       }
//     },
//     choose: {
//       type: Boolean,
//       default: false
//     },
//   },
//   methods: {
//     ...mapActions({
//       liked: 'favorite/favorite/liked',
//       openModal: 'modal/modal-main/openModal',
//       closeModal: 'modal/modal-main/closeModal',
//     }),
//     ...mapMutations({
//       setCurrentCar: 'modal/modal-choose/SET_CURRENT_CAR'
//     }),
//     async chooseClick(offer) {
//       this.setCurrentCar(offer);
//       await this.closeModal();
//     },
//     sendVkAds() {
//       if (process.client) {
//         let _tmr = window._tmr || (window._tmr = []);
//         _tmr.push({
//           type: 'reachGoal',
//           id: this.settings.vk_ads,
//           value: this.offer.price,
//           goal: 'favorites',
//           params: {
//             product_id: this.offer.external_id
//           }
//         });
//       }
//     },
//     async like() {
//       await this.liked(this.offer.external_id);
//       await this.sendVkAds();
//     },
//     async call() {
//       let payload = {
//         modal_data: this.offer,
//         modal_component: 'modal-callback',
//         modal_title: 'Остались вопросы? Перезвоним Вам!',
//         modal_sub_title: this.offer.name
//       };
//       await this.openModal(payload);
//     },
//     async tradeIn(carInfo) {
//       let payload = {
//         modal_data: carInfo,
//         modal_component: 'modal-tradeIn',
//         modal_title: 'Заявка на Trade-In',
//         modal_sub_title: carInfo.name
//       };
//       await this.openModal(payload);
//     },
//     autoteka(carInfo) {
//       let payload = {
//         modal_data: carInfo,
//         modal_component: 'modal-autoteka',
//         modal_title: 'Отчет «Автотеки» от ' + carInfo.createdAt,
//         modal_sub_title: carInfo.name
//       };
//       this.openModal(payload);
//     },
//     async credit() {
//       let payload = {
//         modal_data: this.offer,
//         modal_component: 'modal-credit',
//         modal_title: `Автокредит от <span class="heading__promo">${this.settings.credit_percent}</span>`,
//         modal_sub_title: ''
//       };
//       await this.openModal(payload);
//     }
//     // toCatalog() {
//     // 	this.$router.push('/used')
//     // }
//   }
// };
</script>
