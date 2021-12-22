import { writeFileSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { resolve } from 'path';
import { getWordList } from '@/utils/words/back';

interface ExtendedRequest extends NextApiRequest {
  body: {
    category: string;
    file: string;
    word: string;
  };
}

const createNormal = async (req: ExtendedRequest, res: NextApiResponse) => {
  const { category, file, word, } = req.body;

  if (req.method === 'POST') {
    const words = getWordList(category, file);

    if (word === '' || word === undefined) {
      res.json({
        message: '키워드를 입력해주세요.',
        word: null,
      });

      return;
    }

    if (words.includes(word)) {
      res.json({
        message: `키워드가 이미 존재합니다.`,
        word,
      });

      return;
    } else {
      words.push(word);
      words.push('');

      const fileString = words.join('\r\n');

      writeFileSync(resolve(process.cwd(), 'words', category, `${file}.txt`), fileString, 'utf8');

      res.json({
        message: `키워드가 추가되었습니다.`,
        word,
      });
    }
  }

  res.end();
};

export default createNormal;
