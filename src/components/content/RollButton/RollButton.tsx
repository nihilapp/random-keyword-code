import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { getWord } from '@/utils/words/front';
import { sizeData } from '@/data';

interface IRollButton {
  children: React.ReactNode;
  words?: string[];
  setState?: React.Dispatch<React.ReactElement[]>;
}

export const RollButton = ({
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

  const RollButtonStyle = css({
    letterSpacing: '-1px',
    border: 'none',
    lineHeight: '1',
    borderRadius: '5px',
    color: '#555555',
    backgroundColor: '#33333330',
    padding: '5px 10px',
    fontWeight: '500',
    cursor: 'pointer',
    margin: '4px',

    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#333333',
    },

    '@media all and (min-width: 1024px)': {
      fontSize: `${sizeData[3]}`,
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      fontSize: `${sizeData[2]}`,
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      fontSize: `${sizeData[2]}`,
    },
    '@media all and (max-width: 479px)': {
      fontSize: `${sizeData[1]}`,
    },
  });

  return (
    <>
      <button css={RollButtonStyle} type='button' onClick={pickWord}>{children}</button>
    </>
  );
};
