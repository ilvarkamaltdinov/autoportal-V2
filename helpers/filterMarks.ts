import {MarkType, PopularMarksType} from '~/app/types/marks';

const popularMarks = <PopularMarksType>[
  'audi', 'bmw', 'mercedes-benz', 'ford', 'hyundai', 'kia', 'toyota', 'volkswagen', 'nissan', 'skoda'
];
export const getPopularMarks = (marks: MarkType[], count?: number) => {
  const result = popularMarks.map((name: string) => marks.find((mark: MarkType) => mark.slug === name));
  if (count) {
    return result.slice(0, count);
  } else {
    return result;
  }
};
export const getAlphabet = (marks: MarkType[]) => {
  let alphabet: string[] = [];
  marks.map(mark => {
    alphabet.push(mark.title[0]);
  });
  alphabet = [...new Set(alphabet)].sort();
  return alphabet;
};
export const filterMarksByLetter = (marks: MarkType[], letter: string) => {
  return marks.filter(mark => mark.title[0].toLowerCase() === letter.toLowerCase());
};