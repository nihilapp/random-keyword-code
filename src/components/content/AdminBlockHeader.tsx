import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface IAdminBlockHeader {
  children: React.ReactNode;
  mt?: number;
  mb?: number;
  align?: ('center' | 'left' | 'right' | 'justify')
}

export const AdminBlockHeader = ({
  children, mt = 50, mb = 10, align = 'center',
}: IAdminBlockHeader) => {
  const AdminBlockHeaderStyle = css({
    margin: `${mt}px 0 ${mb}px 0`,
    textAlign: `${align}`,
    backgroundColor: '#555555',
    color: '#ffffff',
    padding: '5px 10px',
    borderRadius: '10px',
    letterSpacing: '-1px',

    '@media all and (min-width: 1024px)': {
      fontSize: `${sizeData[5]}`,
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      fontSize: `${sizeData[4]}`,
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      fontSize: `${sizeData[4]}`,
    },
    '@media all and (max-width: 479px)': {
      fontSize: `${sizeData[3]}`,
    },
  });

  return (
    <>
      <h3 css={AdminBlockHeaderStyle}>{children}</h3>
    </>
  );
};
