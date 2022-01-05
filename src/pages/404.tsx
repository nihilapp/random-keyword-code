import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';
import { useSiteMeta } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';
import { Box, BoxHeader, P } from '@/components/content';
import { sizeData } from '@/data';

const NotPonud404 = () => {
  const NotPound404Style = css``;

  const linkStyle = css`
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    background-color: #33333330;
    color: #555555;
    padding: 10px;
    border-radius: 10px;
    width: 20%;
    margin: 40px auto 0;
    line-height: 1;

    & > svg {
      margin-right: 5px;
    }

    &:hover {
      background-color: #333333;
      color: #ffffff;
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

  const meta = useSiteMeta({
    title: '404',
    url: '/404',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='404-page' css={NotPound404Style}>
          <Box mt={50}>
            <BoxHeader align='center'><FaTimesCircle />404</BoxHeader>
            <P align='center'>페이지를 찾을 수 없습니다.</P>
            <Link href='/' passHref>
              <a css={linkStyle}><AiFillHome />홈으로</a>
            </Link>
          </Box>
        </div>
      </AppLayout>
    </>
  );
};

export default NotPonud404;
