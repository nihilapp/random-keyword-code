import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface IBorder {
  children: React.ReactNode;
  mb?: number;
}

export const Border = ({ children, mb = 50, }: IBorder) => {
  const BorderStyle = css`
    padding: 10px;
    border-radius: 10px;
    background-color: #55555510;
    border: 2px solid #55555530;
    margin-bottom: ${mb}px;

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

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
      <div css={BorderStyle}>{children}</div>
    </>
  );
};
