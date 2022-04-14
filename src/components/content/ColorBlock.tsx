import React from 'react';
import { css } from '@emotion/react';
import { colorContrast } from '@/utils/words/front';

interface IColorBlock {
  hex?: string;
}

export const ColorBlock = ({ hex, }: IColorBlock) => {
  const ColorBlockStyle = css`
    display: block;
    color: ${colorContrast(hex)};
    background-color: #${hex};
    line-height: 1;
    padding: 20px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    font-weight: 900;

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
  `;

  return (
    <>
      <span css={ColorBlockStyle}>
        #{hex}
      </span>
    </>
  );
};
