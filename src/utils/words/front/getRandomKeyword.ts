import { IRandomWords } from '@/types';
import { getWord } from '@/utils/words/front';

interface IGetRandomKeyword {
  words: IRandomWords;
}

export const getRandomKeyword = ({ words, }: IGetRandomKeyword) => {
  const base = getWord(1, words.randomBase, 'normal').join('');

  switch (base) {
    case '상상의 동물':
    case '환상종':
      return getWord(1, words.randomCreature, 'normal') as string[];
    case '가슴 사이즈':
      return getWord(1, words.randomBreast, 'normal') as string[];
    case '종족':
      return getWord(1, words.randomRace, 'normal') as string[];
    case '칠죄종':
      return getWord(1, words.randomSin, 'normal') as string[];
    case '별자리':
      return getWord(1, words.randomConstellation, 'normal') as string[];
    case '공구':
      return getWord(1, words.randomTool, 'normal') as string[];
    case '식기':
      return getWord(1, words.randomTableWare, 'normal') as string[];
    case '천체':
      return getWord(1, words.randomAstronomy, 'normal') as string[];
    case '과일':
      return getWord(1, words.randomFruit, 'normal') as string[];
    case '야채':
    case '채소':
      return getWord(1, words.randomVegetable, 'normal') as string[];
    case '기상':
      return getWord(1, words.randomWeather, 'normal') as string[];
    case '직업':
      return getWord(1, words.randomClass, 'normal') as string[];
    case '캐릭터 유형':
      return getWord(1, words.randomCharacterType, 'normal') as string[];
    case '합금':
      return getWord(1, words.randomMetal, 'normal') as string[];
    case '도형':
      return getWord(1, words.randomFigure, 'normal') as string[];
    case '신체':
      return getWord(1, words.randomBody, 'normal') as string[];
    case '신분':
      return getWord(1, words.randomStatus, 'normal') as string[];
    case '작위':
      return getWord(1, words.randomNobility, 'normal') as string[];
    case '무기':
      return getWord(1, words.randomWeapon, 'normal') as string[];
    case '장르':
      return getWord(1, words.randomGenre, 'normal') as string[];
    case '특징':
      return getWord(1, words.randomFeature, 'normal') as string[];
    case '암석':
    case '보석':
      return getWord(1, words.randomGem, 'normal') as string[];
    case '패션 컨셉':
      return getWord(1, words.randomFashion, 'normal') as string[];
    case '역할':
      return getWord(1, words.randomRole, 'normal') as string[];
    default:
      return [ base, ];
  }
};
