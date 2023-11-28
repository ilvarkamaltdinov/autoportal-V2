import {defineStore} from 'pinia';
import {request} from '~/helpers/request';
import {offers} from '~/apollo/queries/offer/offers';

export const useFavorites = defineStore('favorites', {
  state: () => ({
    favorites: localStorage.getItem('likes') ? localStorage.getItem('likes').split(',') : [],
    favoriteCarArray: []
  }),

  getters: {
    async favoriteCars(state): Promise<[]>{
      if (process.client) {
        if (localStorage.getItem('likes')) {
          const external_id_array = localStorage.getItem('likes').split(',').map(i => Number(i));
          try {
            const response = await request(offers, {
              limit: 0,
              page: 1,
              external_id_array
            });
            console.log(response);
            this.favoriteCarArray.push(...response.data.value.offers.data);
            console.log(this.favorites);
            return this.favoriteCarArray;
          } catch (error) {
            console.log(error);
            // this.$nuxt.error({statusCode: 404});
          }
        }
      }
      return this.favoriteCarArray;
    }
  },

  actions: {
    like(carId: string){
      if (this.favorites.some(item => item === carId)) {
        this.favorites = this.favorites.filter(item => item !== carId);
      } else {
        this.favorites.push(carId);
      }
      localStorage.setItem('likes', this.favorites);
    }
  }
});