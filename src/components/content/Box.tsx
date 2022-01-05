import React from 'react';
import { css } from '@emotion/react';

interface IBox {
  children: React.ReactNode;
  mt?: number;
  mb?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  align?: ('center' | 'left' | 'right' | 'justify')
}

export const Box = React.memo(({
  children, mt = 10, mb = 10, pt = 10, pb = 10, pl = 10, align = 'left',
}: IBox) => {
  const BoxStyle = css`
    margin: ${mt}px 0 ${mb}px 0;
    padding: ${pt}px 10px ${pb}px ${pl}px;
    background-color: #ffffff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 10px -4px #333333;
    text-align: ${align};
  `;

  return (
    <>
      <div css={BoxStyle}>{children}</div>
    </>
  );
});

Box.displayName = 'Box';
