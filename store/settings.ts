import {defineStore} from 'pinia'
import {settingsGql, settingType} from "~/apollo/queries/settings";
import {request} from "~/helpers/request";

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
                const {data} = await request<settingType>(settingsGql, undefined, true)
                data.value?.siteSettings.settings.map(setting => {
                    // @ts-ignore
                    this.settings[setting.key] = setting.value
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
})