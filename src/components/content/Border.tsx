import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface IBorder {
  children: React.ReactNode;
  mb?: number;
}

export const Border = ({ children, mb = 50, }: IBorder) => {
  const BorderStyle = css({
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#55555510',
    border: '2px solid #55555530',
    marginBottom: `${mb}px`,

    '&:nth-last-of-type(1)': {
      marginBottom: '0',
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
      <div css={BorderStyle}>{children}</div>
    </>
  );
};
