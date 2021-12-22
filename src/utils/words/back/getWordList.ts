import { readFileSync } from 'fs';
import { resolve } from 'path';

export const getWordList = (category: string, file: string) => {
  const data = readFileSync(resolve(process.cwd(), 'words', category, `${file}.txt`), 'utf8');
  const words = data.split('\r\n').filter((item) => item !== '');

  return words;
};
