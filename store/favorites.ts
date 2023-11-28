import {defineStore} from 'pinia';
import {request} from '~/helpers/request';
import {offers} from '~/apollo/queries/offer/offers';

export const useFavorites = defineStore('favorites', {
  state: () => ({
    favorites: [],
  }),

  getters: {
    async favoriteCars(state){
      if (process.client) {
        if (localStorage.getItem('likes')) {
          const external_id_array = localStorage.getItem('likes').split(',').map(i => Number(i));
          try {
            const response = await request(offers, {
              limit: 0,
              page: 1,
              external_id_array
            });
            state.favorites = response.data.offers.data;
            return response.data.offers.data;
          } catch (error) {
            console.log(error);
            // this.$nuxt.error({statusCode: 404});
          }
        }
        return [];
      }
    }
  },

  actions: {
  }
});