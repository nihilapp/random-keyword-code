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
  const AdminBlockHeaderStyle = css`
    margin: ${mt}px 0 ${mb}px 0;
    text-align: ${align};
    background-color: #555555;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 10px;
    letter-spacing: -1px;

    @media all and (min-width: 1024px) {
      font-size: ${sizeData[5]};
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      font-size: ${sizeData[4]};
    }

    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: ${sizeData[4]};
    }

    @media all and (max-width: 479px) {
      font-size: ${sizeData[3]};
    }
  `;

  return (
    <>
      <h3 css={AdminBlockHeaderStyle}>{children}</h3>
    </>
  );
};
