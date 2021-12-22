import { NextApiRequest, NextApiResponse } from 'next';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { getWordList } from '@/utils/words/back';

interface ExtendedRequest extends NextApiRequest {
  body: {
    category: string;
    file: string;
    word: string;
  };
}

const remove = (req: ExtendedRequest, res: NextApiResponse) => {
  const { category, file, word, } = req.body;

  if (req.method === 'POST') {
    const words = getWordList(category, file);
    const filteredWords = words.filter((item) => item !== word);

    filteredWords.push('');

    const fileString = filteredWords.join('\r\n');

    writeFileSync(resolve(process.cwd(), 'words', category, `${file}.txt`), fileString, 'utf8');

    res.json({
      message: `키워드가 제거되었습니다.`,
      word,
    });
  }

  res.end();
};

export default remove;
