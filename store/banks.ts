import {defineStore} from 'pinia';
import {request} from '~/helpers/request';
import {Bank, BanksQueryVariables} from '~/types/graphql';
import {banksGql as banksQuery} from '~/apollo/queries/bank/banks';

type BanksState = {
    banks: Bank[];
};
export const useBanks = defineStore('banks', {
  state: (): BanksState => {
    return {
      banks: [],
    };
  },

  getters: {},

  actions: {
    async fetchBanks() {
      const {data: {value: {banks}}} = await request<{ banks: Bank[] }, BanksQueryVariables>(banksQuery, {});
      this.banks = banks;
      return banks;
    },
    getBySlug(slug: string) {
      return this.banks.find((bank) => bank.slug === slug);
    }
  }
});