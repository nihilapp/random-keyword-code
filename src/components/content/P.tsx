import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface IP {
  children: React.ReactNode;
  mt?: number;
  mb?: number;
  align?: ('center' | 'right' | 'left' | 'justify');
}

export const P = ({
  children, mt = 20, mb = 20, align = 'justify',
}: IP) => {
  const PStyle = css({
    margin: `${mt}px 0 ${mb}px 0`,
    textAlign: `${align}`,
    fontWeight: '500',
    color: '#333333',
    lineHeight: '1.8',
    letterSpacing: '-1px',
  }, align !== 'center' && {
    textIndent: '10px',
  }, {
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
      <p css={PStyle}>{children}</p>
    </>
  );
};
