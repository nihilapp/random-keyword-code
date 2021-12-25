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
  const BoxStyle = css({
    margin: `${mt}px 10px ${mb}px 10px`,
    padding: `${pt}px 10px ${pb}px ${pl}px`,
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxSizing: 'border-box',
    boxShadow: '0 0 10px -4px #333333',
    textAlign: `${align}`,
  });

  return (
    <>
      <div css={BoxStyle}>{children}</div>
    </>
  );
});

Box.displayName = 'Box';
