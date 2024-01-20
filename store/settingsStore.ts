import { defineStore } from 'pinia';
import { settings } from '~/apollo/queries/settings';
import { request } from '~/utils/request';
import { SettingsQuery } from '~/types/graphql';

interface SettingSite {
  counter_ym: string,
  counter_vk: string,
  contact_phone: string
  contact_coordinates: string
  contact_address: string
  contact_schedule: string
  legal_inn: string
  legal_kpp: string
  legal_name: string
  legal_ogrn: string
  legal_address: string
  ym: string
  city: string
  gtag: string
  email: string
  phone: string
  soc_ok: string
  soc_vk: string
  goal_id: number
  in_city: string
  soc_zen: string
  vkpixel: string
  mytarget: number
  credit_sum: string
  soc_tiktok: string
  sale_credit: string
  vkpixel_alt: string
  dealer_title: string
  sale_tradein: string
  soc_telegram: string
  credit_period: string
  dealer_anchor: string
  soc_instagram: string
  credit_approve: string
  credit_percent: string
  max_sum_credit: string
  min_sum_credit: string
  credit_repayment: string
  first_installment: string
  max_period_credit: string
  min_period_credit: string
  credit_max_percent: string
  credit_registration: string
}

export const useSettings = defineStore('settings', {
  state: () => ({
    settings: <SettingSite>{}
  }),
  actions: {
    async getSettings() {
      try {
        const { data } = await request<SettingsQuery>(settings);
        data.value.settings!.settings!.forEach((setting) => {
          this.settings[setting!.key as keyof SettingSite] = setting!.value!;
        });
        return this.settings;
      } catch (error) {
        console.log(error);
      }
    }
  }
});