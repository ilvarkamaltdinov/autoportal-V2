import {defineStore} from 'pinia';
import {settings} from '~/apollo/queries/settings';
import {request} from '~/helpers/request';
import {SettingsQuery} from '~/types/graphql';

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
}

export const useSettings = defineStore('settings', {
  state: () => ({
    settings: <SettingSite>{}
  }),
  actions: {
    async getSettings() {
      try {
        const {data} = await request<SettingsQuery>(settings, undefined, true);
        data.value.settings?.settings?.forEach(setting => {
          // @ts-ignore
          this.settings[setting.key] = setting.value;
        });
        return this.settings;
      } catch (error) {
        console.log(error);
      }
    }
  }
});