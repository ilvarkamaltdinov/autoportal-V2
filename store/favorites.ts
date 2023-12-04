import {defineStore} from 'pinia';
import {request} from '~/helpers/request';
import {offersGql} from '~/apollo/queries/offer/offers';
import {Offer, OffersQueryVariables} from '~/types/graphql';
import {_AsyncData} from '#app/composables/asyncData';
import {UnwrapRef} from 'vue';

type OffersWrap = {
  offers: { data: Offer[] }
}
export type FavoritesState = { favorites: string[]; favoriteCarArray: UnwrapRef<_AsyncData<OffersWrap, Error>> | null }
export const useFavorites = defineStore('favorites', {
  state: (): FavoritesState => {
    return {
      favorites: localStorage.getItem('likes') ? localStorage.getItem('likes')!.split(',') : [],
      favoriteCarArray: null
    };
  },

  getters: {
    async favoriteCars(): Promise<_AsyncData<OffersWrap, Error> | FavoritesState['favoriteCarArray']> {
      if (process.client) {
        if (localStorage.getItem('likes')) {
          try {
            const response = await request<OffersWrap, OffersQueryVariables>(offersGql, {
              limit: 0,
              page: 1,
              external_id_array: this.favorites.map(i => Number(i))
            });
            this.favoriteCarArray = response as unknown as UnwrapRef<typeof response>;
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
    like(carId: string) {
      if (this.favorites.some(item => item === carId)) {
        this.favorites = this.favorites.filter(item => item !== carId);
      } else {
        this.favorites = [...this.favorites, carId];
      }
      localStorage.setItem('likes', this.favorites.toString());
    },
    findFavorite(carId: string) {
      return this.favorites.some(item => item === carId);
    }
  }
});