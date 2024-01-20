import { useSettings } from '~/store/settingsStore';

export default defineNuxtPlugin(async () => {
  const settings = useSettings();
  return {
    provide: {
      settings: await settings.getSettings(),
    }
  };
});