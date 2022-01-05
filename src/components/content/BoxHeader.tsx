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
  const BoxHeaderStyle = css`
    margin-top: ${mt}px;
    margin-bottom: ${mb}px;
    background-color: #333333;
    color: #ffffff;
    font-weight: 900;
    padding: 20px 10px;
    border-radius: 10px;
    line-height: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${align};
    letter-spacing: -1px;

    & > svg {
      margin-right: 10px;
    }

    @media all and (min-width: 1024px) {
      font-size: ${sizeData[6]};
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      font-size: ${sizeData[5]};
    }

    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: ${sizeData[5]};
    }

    @media all and (max-width: 479px) {
      font-size: ${sizeData[4]};
    }
  `;

  return (
    <>
      <h2 css={BoxHeaderStyle}>{children}</h2>
    </>
  );
};
