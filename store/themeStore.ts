import { useAppConfig, useCookie } from '#imports';
import { defineStore } from 'pinia';

export const enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeState = {
  _themeCookieKey: string;
  theme: Themes | null;
}

export const useThemeStore = defineStore('themeStore', {
  state: (): ThemeState => {
    const { themeCookieKey } = useAppConfig();
    const currentTheme = useCookie<Themes | null>(themeCookieKey);
    return {
      theme: currentTheme.value,
      _themeCookieKey: themeCookieKey,
    };
  },

  actions: {
    setTheme(theme: Themes) {
      const cookieTheme = useCookie(this._themeCookieKey);
      cookieTheme.value = this.theme = theme;
    },
    toggleTheme() {
      const theme = this.theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
      this.setTheme(theme);
    },
    setFromDevice() {
      if(!process.client) return;
      window.matchMedia('(prefers-color-scheme: dark)').matches ? this.theme = Themes.DARK : this.theme = Themes.LIGHT;
      this.setTheme(this.theme);
      return this.theme;
    }
  }
});