import { readFileSync } from 'fs';
import { resolve } from 'path';
import { INihilArea, INihilOrga, IOtherMinor } from '@/types';

type IType = ('orga' | 'area' | 'minor');

export const getWordJson = (category: string, file: string, type: IType) => {
  const data = readFileSync(resolve(process.cwd(), 'words', category, `${file}.txt`), 'utf8');

  if (type === 'orga') {
    const words: INihilOrga[] = JSON.parse(data);

    return words;
  }

  if (type === 'area') {
    const words: INihilArea = JSON.parse(data);

    return words;
  }

  if (type === 'minor') {
    const words: IOtherMinor[] = JSON.parse(data);

    return words;
  }
};
