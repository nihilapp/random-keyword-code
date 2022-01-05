import React, { useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { getColor } from '@/utils/words/front';
import { ColorBlock } from '@/components/content';
import { RollButtonStyle as ColorRollButtonStyle } from './RollButtonStyle';

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

  return (
    <>
      <button css={ColorRollButtonStyle} type='button' onClick={pickWord}>{children}</button>
    </>
  );
});

ColorRollButton.displayName = 'ColorRollButton';
