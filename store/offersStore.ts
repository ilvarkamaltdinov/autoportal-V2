import { defineStore } from 'pinia';
import { request } from '~/utils/request';
import { Dealer, Offer, OffersQueryVariables, OfferTypePagination } from '~/types/graphql';
import { offersGql } from '~/apollo/queries/offer/offers';

type OffersState = {
  offers: OfferTypePagination | null;
};
export const useOffers = defineStore('offers', {
  state: (): OffersState => {
    return {
      offers: null,
    };
  },

  actions: {
    async fetchOffers<T>(variables: Partial<T>) {
      // if(this.offers.length > 0) return this.offers;
      const { data: { value: { offers } } } = await request<{ offers: OfferTypePagination }, Partial<T>>(offersGql, variables);
      this.offers = offers;
      return offers;
    },
  }
});