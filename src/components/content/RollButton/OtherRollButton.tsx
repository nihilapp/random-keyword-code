import React, { useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { getWord } from '@/utils/words/front';
import { IOtherMinor, IOtherWords } from '@/types';
import { RollButtonStyle as OtherRollButtonStyle } from './RollButtonStyle';

interface IRollButton {
  children: React.ReactNode;
  words?: IOtherWords;
  setState?: React.Dispatch<React.ReactElement[]>;
  type?: ('minor' | 'major' | 'playing');
}

export const OtherRollButton = React.memo(({
  children, words, setState, type,
}: IRollButton) => {
  const pickWord = useCallback(() => {
    if (type === 'minor') {
      const arcanaMinor = getWord(1, words.arcanaMinor, 'minor') as IOtherMinor[];

      const state = arcanaMinor.map((item) => (
        <p key={uuid()}>
          <span className='blue keyword'>{item.name}</span><br />
          <span className='blue description'>{item.description}</span>
        </p>
      ));

      setState(state);
    } else if (type === 'major') {
      const arcanaMajor = getWord(1, words.arcanaMajor, 'normal') as string[];
      const d10Arr = Array(10).fill(0).map((item: number, index) => item + index);
      const d10 = getWord(1, d10Arr, 'number') as number[];
      let stateType: string;

      if (parseInt(d10.join(''), 10) > 5) {
        stateType = '[ 정방향 ]';
      } else {
        stateType = '[ 역방향 ]';
      }

      const state = [ (
        <p key={uuid()}>
          <span className='bold'>{stateType}</span><br />
          <span className='blue keyword'>{arcanaMajor}</span>
        </p>
      ), ];

      setState(state);
    } else if (type === 'playing') {
      const cards: string[] = [];
      let card: string;
      const destroy: string[] = [];

      for (let i = 0; i < 5; i++) {
        card = (getWord(1, words.playingCard, 'normal') as string[]).join('');

        if (destroy.includes(card)) {
          destroy.push(card);
          i--;
        } else if (cards.includes(card)) {
          destroy.push(card);
          i--;
        } else {
          cards.push(card);
        }
      }

      const state = [ (
        <p key={uuid()}>
          {cards.map((item) => (
            <span key={uuid()} className='blue keyword'>{item}<br /></span>
          ))}
        </p>
      ), ];

      setState(state);
    }
  }, []);

  return (
    <>
      <button css={OtherRollButtonStyle} type='button' onClick={pickWord}>{children}</button>
    </>
  );
});

OtherRollButton.displayName = 'OtherRollButton';
