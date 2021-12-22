import { INihilWords } from '@/types';

export const getBackStoryLength = (words: INihilWords) => {
  const {
    purposes, places, genders, classes, races,
  } = words;

  const count = purposes.length * places.length * genders.length * (classes.length + races.length);

  return count;
};
