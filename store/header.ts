import {defineStore} from 'pinia';

export const useHeader = defineStore('header', {
  state: () => ({
    menu: <boolean>false,
    likes: <number>12,
    filter: <boolean>false,
    marks: <boolean>false
  }),

  actions: {
    setMenu(payload: boolean) {
      console.log(payload);
      this.menu = payload;
    },
    setLikes(payload: number) {
      this.likes = payload;
    },
    setFilter(payload: boolean) {
      this.filter = payload;
    },
    setMarks(payload: boolean) {
      this.marks = payload;
    }
  }
});