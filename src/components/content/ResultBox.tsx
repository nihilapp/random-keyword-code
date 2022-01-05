import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface IResultBox {
  children: React.ReactNode;
}

export const ResultBox = ({ children, }: IResultBox) => {
  const ResultBoxStyle = css`
    & > p {
      text-align: center;
      font-weight: 500;

      & > .blue {
        color: #3178f2;

        &.keyword {
          font-weight: 900;
        }

        &.description {
          font-weight: 400;
          font-size: 90%;
        }
      }

      & > .bold {
        font-weight: 500;
        font-size: 130%;
      }
    }

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
      <div css={ResultBoxStyle}>{children}</div>
    </>
  );
};
