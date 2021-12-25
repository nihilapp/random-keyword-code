import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { getColor, getWord } from '@/utils/words/front';
import { sizeData } from '@/data';
import { ColorBlock } from '@/components/content';

interface IRollButton {
  children: React.ReactNode;
  setState?: React.Dispatch<React.ReactElement[]>;
  number?: number;
}

export const ColorRollButton = React.memo(({
  children, setState, number = 1,
}: IRollButton) => {
  const pickWord = useCallback(() => {
    const colors: string[] = [];

    for (let i = 0; i < number; i++) {
      const color = getColor();

      colors.push(color);
    }

    const state = [ (
      <p key={uuid()}>
        {colors.map((item) => (
          <ColorBlock key={uuid()} hex={item} />
        ))}
      </p>
    ), ];

    setState(state);
  }, []);

  const ColorRollButtonStyle = css({
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
      <button css={ColorRollButtonStyle} type='button' onClick={pickWord}>{children}</button>
    </>
  );
});

ColorRollButton.displayName = 'ColorRollButton';
