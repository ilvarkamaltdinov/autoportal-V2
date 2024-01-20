import { defineStore } from 'pinia';
import { request } from '~/utils/request';
import { dealers as dealersQuery } from '~/apollo/queries/dealer/dealers';
import { Dealer, DealersQueryVariables } from '~/types/graphql';

type DealerState = {
  dealers: Dealer[];
};
export const useDealers = defineStore('dealers', {
  state: (): DealerState => {
    return {
      dealers: [],
    };
  },

  actions: {
    async fetchDealers() {
      if(this.dealers.length > 0) return this.dealers;
      const { data : { value: { dealers } } } = await request<{ dealers: DealerState['dealers'] }, DealersQueryVariables>(dealersQuery, {});
      this.dealers = dealers;
      return dealers;
    },
  }
});