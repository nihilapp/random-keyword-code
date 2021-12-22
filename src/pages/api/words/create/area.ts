import { writeFileSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { resolve } from 'path';
import { getWordJson } from '@/utils/words/back';
import { INihilArea } from '@/types';

interface ExtendedRequest extends NextApiRequest {
  body: {
    category: string;
    file: string;
    word: {
      first: string;
      second: string;
    };
  };
}

const createArea = async (req: ExtendedRequest, res: NextApiResponse) => {
  const { category, file, word, } = req.body;

  if (req.method === 'POST') {
    const words = getWordJson(category, file, 'area') as INihilArea;

    if (word.second === undefined || word.second === '') {
      if (word.first === undefined || word.first === '') {
        res.json({
          message: '키워드를 입력해주세요.',
          word: {
            first: null,
          },
        });

        return;
      }

      if (words['지역'].includes(word.first)) {
        res.json({
          message: '키워드가 이미 존재합니다.',
          word: {
            first: word.first,
          },
        });
      } else {
        words['지역'].push(word.first);
        words[word.first] = [];
      }

      if (word.first in words) {
        res.json({
          message: '키워드가 이미 존재합니다.',
          word: {
            first: word.first,
          },
        });
      } else {
        words[word.first] = [];
      }
    }

    if (word.second === undefined || word.second === '') {
      if (word.first === undefined || word.first === '') {
        res.json({
          message: '키워드를 입력해주세요.',
          word: {
            first: null,
          },
        });

        return;
      }

      if (word.first === '유센티아 대륙') {
        if (words['유센티아 대륙'].includes(word.second)) {
          res.json({
            message: '키워드가 이미 존재합니다.',
            word: {
              first: word.first,
              second: word.second,
            },
          });
        } else {
          words['유센티아 대륙'].push(word.second);
          words[word.second] = [];
        }
      }

      if (word.first in words) {
        if (words[word.first].includes(word.second)) {
          res.json({
            message: '키워드가 이미 존재합니다.',
            word: {
              first: word.first,
              second: word.second,
            },
          });
        } else {
          words[word.first].push(word.second);
        }
      }
    }

    const fileString = JSON.stringify(words);
    writeFileSync(resolve(process.cwd(), 'words', category, `${file}.txt`), fileString, 'utf8');

    res.json({
      message: '키워드가 추가되었습니다.',
      word: {
        first: word.first,
        second: word.second,
      },
    });
  } else {
    res.status(404);
  }
};

export default createArea;
