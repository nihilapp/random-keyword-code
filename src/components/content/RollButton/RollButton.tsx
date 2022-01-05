import React, { useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { getWord } from '@/utils/words/front';
import { RollButtonStyle } from './RollButtonStyle';

interface IRollButton {
  children: React.ReactNode;
  words?: string[];
  setState?: React.Dispatch<React.ReactElement[]>;
}

export const RollButton = React.memo(({
  children, words, setState,
}: IRollButton) => {
  const pickWord = useCallback(() => {
    const word = getWord(1, words, 'normal') as string[];

    const state = [ (
      <p key={uuid()}>
        {word.map((item) => (
          <span key={uuid()} className='blue keyword'>{item}</span>
        ))}
      </p>
    ), ];

    setState(state);
  }, []);

  return (
    <>
      <button css={RollButtonStyle} type='button' onClick={pickWord}>{children}</button>
    </>
  );
});

RollButton.displayName = 'RollButton';
