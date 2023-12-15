import { defineStore } from 'pinia';
import { request } from '~/helpers/request';
import { Mark } from '~/app/types/marks';
import { SiteConfigType } from '~/app/types/config';
import { siteConfigGql } from '~/apollo/queries/siteConfig';

interface SettingSite {
    counter_ym: string,
    counter_vk: string,
    counter_gtag: string,
    contact_phone: string
    contact_coordinates: string
    contact_address: string
    contact_schedule: string
    contact_metro: string
    contact_city: string
    contact_in_city: string
    legal_inn: string
    legal_kpp: string
    legal_name: string
    legal_ogrn: string
    legal_address: string
    dealer_name: string
    dealer_name_rus: string
    dealer_type: string
    youtube_playlist: string
    credit_percent: string
    credit_max_percent: string
    counter_commercial_id: string
}

// todo this is kinda unused, remove
export const useSiteConfig = defineStore('siteConfig', {
  state: () => ({
    settings: <SettingSite>{},
    marks: <Mark[]>[],
    isNight: <boolean>false,
  }),

  actions: {
    async setIsNight(payload: boolean) {
      this.isNight = payload;
    },
    async getSiteConfig() {
      try {
        const { data } = await request<SiteConfigType>(siteConfigGql, { category: 'used' });
        this.marks = data.value?.markFolderGeneration;
      } catch (error) {
        console.log(error);
      }
    }
  }
});
