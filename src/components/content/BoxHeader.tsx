import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface IBoxHeader {
  children: React.ReactNode;
  mt?: number;
  mb?: number;
  align?: ('flex-start' | 'center' | 'flex-end');
}

export const BoxHeader = ({
  children, mt = 0, mb = 0, align = 'flex-start',
}: IBoxHeader) => {
  const BoxHeaderStyle = css({
    marginTop: `${mt}px`,
    marginBottom: `${mb}px`,
    backgroundColor: '#333333',
    color: '#ffffff',
    fontWeight: '900',
    padding: '20px 10px',
    borderRadius: '10px',
    lineHeight: '1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: `${align}`,
    letterSpacing: '-1px',

    '& > svg': {
      marginRight: '10px',
    },

    '@media all and (min-width: 1024px)': {
      fontSize: `${sizeData[6]}`,
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      fontSize: `${sizeData[5]}`,
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      fontSize: `${sizeData[5]}`,
    },
    '@media all and (max-width: 479px)': {
      fontSize: `${sizeData[4]}`,
    },
  });

  return (
    <>
      <h2 css={BoxHeaderStyle}>{children}</h2>
    </>
  );
};
