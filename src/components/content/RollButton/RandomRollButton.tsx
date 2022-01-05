import React, { useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { getRandomKeyword } from '@/utils/words/front';
import { IRandomWords } from '@/types';
import { RollButtonStyle as RandomRollButtonStyle } from './RollButtonStyle';

interface IRollButton {
  children: React.ReactNode;
  words?: IRandomWords;
  setState?: React.Dispatch<React.ReactElement[]>;
  type?: ('one' | 'multiple');
  number?: number;
}

export const RandomRollButton = React.memo(({
  children, words, setState, type, number = 1,
}: IRollButton) => {
  const pickWord = useCallback(() => {
    if (type === 'one') {
      const word = getRandomKeyword({ words, });

      const state = [ (
        <p key={uuid()}>
          <span className='blue keyword'>{word}<br /></span>
        </p>
      ), ];

      setState(state);
    } else if (type === 'multiple') {
      let word: string;
      const random: string[] = [];
      const destroy: string[] = [];

      for (let i = 0; i < number; i++) {
        word = (getRandomKeyword({ words, }) as string[]).join('');

        if (destroy.includes(word)) {
          destroy.push(word);
          i--;
        } else if (random.includes(word)) {
          destroy.push(word);
          i--;
        } else {
          random.push(word);

          if (word.includes('캐릭터 유형')) {
            destroy.push('캐릭터 유형');
          } else if (word.includes('환상종') || word.includes('상상의 동물')) {
            destroy.push('환상종');
            destroy.push('상상의 동물');
          } else if (word.includes('가슴 사이즈')) {
            destroy.push('가슴 사이즈');
          } else if (word.includes('종족')) {
            destroy.push('종족');
          } else if (word.includes('칠죄종')) {
            destroy.push('칠죄종');
          } else if (word.includes('별자리')) {
            destroy.push('별자리');
          } else if (word.includes('공구')) {
            destroy.push('공구');
          } else if (word.includes('식기')) {
            destroy.push('식기');
          } else if (word.includes('천체')) {
            destroy.push('천체');
          } else if (word.includes('과일')) {
            destroy.push('과일');
          } else if (word.includes('야채') || word.includes('채소')) {
            destroy.push('야채');
            destroy.push('채소');
          } else if (word.includes('직업')) {
            destroy.push('직업');
          } else if (word.includes('합금')) {
            destroy.push('합금');
          } else if (word.includes('도형')) {
            destroy.push('도형');
          } else if (word.includes('신체')) {
            destroy.push('신체');
          } else if (word.includes('신분')) {
            destroy.push('신분');
          } else if (word.includes('작위')) {
            destroy.push('작위');
          } else if (word.includes('무기')) {
            destroy.push('무기');
          } else if (word.includes('장르')) {
            destroy.push('장르');
          } else if (word.includes('특징')) {
            destroy.push('특징');
          } else if (word.includes('암석') || word.includes('보석')) {
            destroy.push('암석');
            destroy.push('보석');
          } else if (word.includes('패션 컨셉')) {
            destroy.push('패션 컨셉');
          } else if (word.includes('역할')) {
            destroy.push('역할');
          }
        }
      }

      const state = [ (
        <p key={uuid()}>
          {random.map((item, index) => (
            <span key={uuid()} className='blue keyword'>{index + 1}. {item}<br /></span>
          ))}
        </p>
      ), ];

      setState(state);
    }
  }, []);

  return (
    <>
      <button css={RandomRollButtonStyle} type='button' onClick={pickWord}>{children}</button>
    </>
  );
});

RandomRollButton.displayName = 'RandomRollButton';
