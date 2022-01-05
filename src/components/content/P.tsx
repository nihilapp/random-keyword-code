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
  const PStyle = css`
    margin: ${mt}px 0 ${mb}px 0;
    text-align: ${align};
    font-weight: 500;
    color: #333333;
    line-height: 1.8;
    letter-spacing: -1px;
    ${align !== 'center' && css`
      text-indent: 10px
    `};

    @media all and (min-width: 1024px) {
      font-size: ${sizeData[3]};
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      font-size: ${sizeData[2]};
    }

    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: ${sizeData[2]};
    }

    @media all and (max-width: 479px) {
      font-size: ${sizeData[1]};
    }
  `;

  return (
    <>
      <p css={PStyle}>{children}</p>
    </>
  );
};
