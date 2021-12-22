import { INihilOrga, IOtherMinor } from '@/types';
import { roll } from './roll';

type IWords = (string[] | INihilOrga[] | number[] | IOtherMinor[]);
type IType = ('orga' | 'normal' | 'number' | 'minor');

export const getWord = (cnt: number, words: IWords, type: IType) => {
  const list: IWords = [];

  for (let i = 0; i < cnt; i++) {
    const n = roll(words.length);

    if (type === 'normal') {
      (list as string[]).push((words as string[])[n]);
    } else if (type === 'orga') {
      (list as INihilOrga[]).push((words as INihilOrga[])[n]);
    } else if (type === 'number') {
      (list as number[]).push((words as number[])[n]);
    } else if (type === 'minor') {
      (list as IOtherMinor[]).push((words as IOtherMinor[])[n]);
    }
  }

  return list;
};
