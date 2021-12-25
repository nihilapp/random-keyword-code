import React from 'react';
import { css } from '@emotion/react';
import { colorContrast } from '@/utils/words/front';

interface IColorBlock {
  hex?: string;
}

export const ColorBlock = ({ hex, }: IColorBlock) => {
  const ColorBlockStyle = css({
    display: 'block',
    color: colorContrast(hex),
    backgroundColor: `#${hex}`,
    lineHeight: '1',
    padding: '20px 10px',
    marginBottom: '10px',
    borderRadius: '10px',
    fontWeight: '900',

    ':nth-last-of-type(1)': {
      marginBottom: '0',
    },
  });

  return (
    <>
      <span css={ColorBlockStyle}>
        #{hex}
      </span>
    </>
  );
};
