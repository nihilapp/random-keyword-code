import { writeFileSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { resolve } from 'path';
import { getWordJson } from '@/utils/words/back';
import { INihilOrga } from '@/types';

interface ExtendedRequest extends NextApiRequest {
  body: {
    category: string;
    file: string;
    word: {
      name: string;
      description: string;
    };
  };
}

const createOrga = async (req: ExtendedRequest, res: NextApiResponse) => {
  const { category, file, word, } = req.body;

  if (req.method === 'POST') {
    const words = getWordJson(category, file, 'orga') as INihilOrga[];

    if (word.name === undefined || word.name === '') {
      res.json({
        message: '키워드를 입력해주세요.',
        word: {
          name: null,
        },
      });

      return;
    }

    if (word.description === undefined || word.description === '') {
      res.json({
        message: '키워드를 입력해주세요.',
        word: {
          description: null,
        },
      });

      return;
    }

    const filter = words.filter((item) => item.name === word.name);

    if (filter.length === 1) {
      res.json({
        message: `키워드가 이미 존재합니다.`,
        word,
      });

      return;
    } else {
      words.push(word);

      const fileString = JSON.stringify(words);

      writeFileSync(resolve(process.cwd(), 'words', category, `${file}.txt`), fileString, 'utf8');

      res.json({
        message: `키워드가 추가되었습니다.`,
        word,
      });
    }
  }
};

export default createOrga;
