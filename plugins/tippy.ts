import VueTippy from 'vue-tippy';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTippy, {
    directive: 'tippy',
    flipDuration: 0,
    defaultProps: {
      allowHTML: true,
    },
    popperOptions: {
      modifiers: {
        preventOverflow: {
          enabled: true
        }
      }
    }
  });
});