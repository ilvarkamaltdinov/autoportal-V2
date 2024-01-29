import { defineStore } from 'pinia';
import { request } from '~/utils/request';
import { MarkFolder, MarkFolderGenerationQueryVariables } from '~/types/graphql';
import { markFolderGeneration } from '~/apollo/queries/markFolderGeneration';

type MarksState = {
    allMarks: MarkFolder[];
    popularMarks: MarkFolder[];
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
        return this.allMarks;
      }
      const { data: { value: { markFolderGeneration: markFolders } } } = await request<{ markFolderGeneration: MarkFolder[] }, MarkFolderGenerationQueryVariables>(
        markFolderGeneration, { category: '' }
      );
      console.log(markFolders.length);
      this.allMarks = markFolders;
      this.popularMarks = this.popularMarksNames.map((name) => this.allMarks.find((mark) => mark.slug === name)) as MarkFolder[];
      if (!this.marksQuantity) {
        this.allMarks.forEach((mark) => {
          this.marksQuantity += mark.offers_count;
        });
      }
      return this.allMarks;
    }
  }
});