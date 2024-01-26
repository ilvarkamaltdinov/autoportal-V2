import { defineStore } from 'pinia';
import { request } from '~/utils/request';
import { OfferQuery, OfferQueryVariables, OffersQueryVariables, OfferTypePagination } from '~/types/graphql';
import { offersGql } from '~/apollo/queries/offer/offers';
import { offerGql } from '~/apollo/queries/offer/offer';

type OffersState = {
    offers: OfferTypePagination | null;
    offer: OfferQuery | null;
};
export const useOffers = defineStore('offers', {
  state: (): OffersState => {
    return {
      offers: null,
      offer: null
    };
  },

  actions: {
    async fetchOffers(variables: OffersQueryVariables) {
      // if(this.offers.length > 0) return this.offers;
      const { data: { value: { offers } } } = await request<{
                offers: OfferTypePagination
            }, OffersQueryVariables>(offersGql, variables);
      this.offers = offers;
      return offers;
    },
    async fetchOffer(variables: OfferQueryVariables) {
      // if(this.offers.length > 0) return this.offers;
      const { data: { value: { offer } } } = await request<{
              offer: OfferQuery;
          }, OfferQueryVariables>(offerGql, variables);
      this.offer = offer;
      return offer;
    },
  }
});