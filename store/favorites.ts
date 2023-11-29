import {defineStore} from 'pinia';
import {request} from '~/helpers/request';
import {offers} from '~/apollo/queries/offer/offers';
import {Offer, OffersQueryVariables} from '~/types/graphql';

type FavoritesState = { favorites: string[]; favoriteCarArray: Offer[] }
export const useFavorites = defineStore('favorites', {
  state: (): FavoritesState => {
    return {
      favorites: localStorage.getItem('likes') ? localStorage.getItem('likes')!.split(',') : [],
      favoriteCarArray: []
    };
  },

  getters: {
    async favoriteCars(): Promise<Offer[]>{
      if (process.client) {
        if (localStorage.getItem('likes')) {
          try {
            type OffersWrap = {
              offers: { data: Offer[] }
            }
            const response = await request<OffersWrap, OffersQueryVariables>(offers, {
              limit: 0,
              page: 1,
              external_id_array: this.favorites.map(i => Number(i))
            });
            this.favoriteCarArray = response;
            return response;
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
        this.favorites = [...this.favorites, carId];
      }
      localStorage.setItem('likes', this.favorites.toString());
    },
    findFavorite(carId: string){
      return this.favorites.some(item => item === carId);
    }
  }
});