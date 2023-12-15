import { useSettings } from '~/store/settings';

export default defineNuxtPlugin(async () => {
  const settings = useSettings();
  return {
    provide: {
      settings: await settings.getSettings(),
    }
  };
});