import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface IResultBox {
  children: React.ReactNode;
}

export const ResultBox = ({ children, }: IResultBox) => {
  const ResultBoxStyle = css({
    '& > p': {
      textAlign: 'center',
      fontWeight: '500',

      '& > .blue': {
        color: '#3178f2',

        '&.keyword': {
          fontWeight: '900',
        },

        '&.description': {
          fontWeight: '400',
          fontSize: '90%',
        },
      },

      '& > .bold': {
        fontWeight: '500',
        fontSize: '130%',
      },
    },

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
      <div css={ResultBoxStyle}>{children}</div>
    </>
  );
};
