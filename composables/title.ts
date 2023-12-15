import { computed } from '#imports';
export default computed(() => {
  const appConfig = useAppConfig();
  return appConfig.title;
});