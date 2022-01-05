import React from 'react';
import { css, Global } from '@emotion/react';
import { SiteMeta } from '@/components';
import { ISiteMetaProps } from '@/types';
import { HeaderBlock, MainBlock } from '@/components/Layout';

const AppLayout = ({ children, meta, }: ISiteMetaProps) => {
  const GlobalStyle = css`
    @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Noto Sans KR', sans-serif;
    }

    a {
      text-decoration: none;
    }

    body {
      padding: 20px;
      background-color: #dddddd;
    }

    @media all and (min-width: 1024px) {
      body {
        width: 1000px;
        margin: 0 auto;
      }
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      body {
        max-width: 1000px;
        margin: 0 auto;
      }
    }

    @media all and (min-width: 480px) and (max-width: 767px) {
      body {
        width: 100%;
      }
    }

    @media all and (max-width: 479px) {
      body {
        width: 100%;
      }
    }
  `;

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
