import React from 'react';
import { css } from '@emotion/react';
import { IHaveChildren } from '@/types';

export const MainBlock = ({ children, }: IHaveChildren) => {
  const MainBlockStyle = css({});

  return (
    <>
      <main css={MainBlockStyle}>
        {children}
      </main>
    </>
  );
};
