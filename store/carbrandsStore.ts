import { defineStore } from 'pinia';
import { request } from '~/utils/request';
import { Mark, MarksQueryVariables } from '~/types/graphql';
import { marks } from '~/apollo/queries/marks';

type MarksState = {
  allMarks: Mark[];
  popularMarks: Mark[];
  popularMarksNames: string[];
  marksQuantity: number;
};
export const useMarks = defineStore('marks', {
  state: (): MarksState => {
    return {
      allMarks: [],
      popularMarksNames: [
        'audi', 'bmw', 'mercedes-benz', 'ford', 'hyundai', 'kia', 'toyota', 'volkswagen', 'nissan', 'skoda'
      ],
      popularMarks: [],
      marksQuantity: 0,
    };
  },

  getters: {
    sortedMarks() {

    }
  },

  actions: {
    async getAllMarksFillPopular() {
      if (this.allMarks.length) {
        return;
      }
      const { data } = await request<{ marks: Mark[] }, MarksQueryVariables>(marks);
      this.allMarks = data.value.marks;
      this.popularMarks = this.popularMarksNames.map((name) => this.allMarks.find((mark) => mark.slug === name)) as Mark[];
      if (!this.marksQuantity) {
        this.allMarks.forEach((mark) => {
          this.marksQuantity += mark.offers_count;
        });
      }
      return this.allMarks;
    }
  }
});