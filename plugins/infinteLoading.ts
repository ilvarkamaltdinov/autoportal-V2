import InfiniteLoading from 'v3-infinite-loading';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('InfiniteLoading', InfiniteLoading);
});