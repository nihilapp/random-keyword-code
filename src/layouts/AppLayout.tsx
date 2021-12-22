import React from 'react';
import { css, Global } from '@emotion/react';
import { SiteMeta } from '@/components';
import { ISiteMetaProps } from '@/types';
import { HeaderBlock, MainBlock } from '@/components/Layout';

const AppLayout = ({ children, meta, }: ISiteMetaProps) => {
  const GlobalStyle = css({
    '*': {
      boxSizing: 'border-box',
      margin: '0',
      padding: '0',
      fontFamily: `'Noto Sans KR', sans-serif`,
    },

    a: {
      textDecoration: 'none',
    },

    body: {
      backgroundColor: '#dddddd',
    },

    '@media all and (min-width: 1024px)': {
      body: {
        width: '1000px',
        margin: '0 auto',
      },
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      body: {
        maxWidth: '1000px',
        margin: '0 auto',
      },
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      body: {
        width: '100%',
      },
    },
    '@media all and (max-width: 479px)': {
      body: {
        width: '100%',
      },
    },
  });

  return (
    <>
      <Global styles={GlobalStyle} />
      <SiteMeta meta={meta} />
      <HeaderBlock />

      <MainBlock>
        {children}
      </MainBlock>
    </>
  );
};

export default AppLayout;
