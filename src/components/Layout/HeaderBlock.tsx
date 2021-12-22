import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { BsFillGearFill } from 'react-icons/bs';
import { FaRegCopyright } from 'react-icons/fa';
import { siteData, sizeData } from '@/data';
import { NavBlock } from './NavBlock';

export const HeaderBlock = () => {
  const HeaderBlockStyle = css({
    margin: '10px',
    padding: '10px 10px 6px 10px',
    backgroundColor: '#333333',
    color: '#ffffff',
    textAlign: 'center',
    borderRadius: '10px',

    '& > h1': {
      fontWeight: '900',
      marginBottom: '5px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',

      '& > img': {
        marginRight: '5px',
        display: 'block',
      },
    },

    '& > p:nth-of-type(2)': {
      marginTop: '5px',
      marginBottom: '6px',
      fontWeight: '900',

      '& > svg': {
        marginRight: '5px',
      },
    },

    '& > p': {
      fontWeight: '500',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1',

      '& > .app-version': {
        marginRight: '5px',
        lineHeight: '1',
      },

      '& > .app-admin': {
        color: '#dddddd',
        backgroundColor: '#444444',
        borderRadius: '5px',
        padding: '5px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        '&:hover': {
          backgroundColor: '#ffffff',
          color: '#333333',
        },
      },
    },

    '@media all and (min-width: 1024px)': {
      h1: {
        fontSize: `${sizeData[6]};`,
        img: { width: '38px', },
      },
      p: { fontSize: `${sizeData[3]};`, },
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      h1: {
        fontSize: `${sizeData[5]};`,
        img: { width: '32px', },
      },
      p: { fontSize: `${sizeData[2]};`, },
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      h1: {
        fontSize: `${sizeData[5]};`,
        img: { width: '32px', },
      },
      p: { fontSize: `${sizeData[2]};`, },
    },
    '@media all and (max-width: 479px)': {
      h1: {
        fontSize: `${sizeData[4]};`,
        img: { width: '25px', },
      },
      p: { fontSize: `${sizeData[1]};`, },
    },
  });

  const nowYear = new Date().getFullYear();
  const year = nowYear > 2021 ? `2021-${nowYear}` : `2021`;

  return (
    <>
      <header css={HeaderBlockStyle}>
        <h1>
          <img src={`${siteData.siteUrl}/images/nihil-logo.svg`} alt='니힐 로고' />
          <span>{siteData.siteTitle}</span>
        </h1>
        <p>
          <span className='app-version'>{siteData.siteVersion}</span>
          {process.env.NODE_ENV === 'development' && (
            <Link href='/admin' passHref>
              <a className='app-admin'><BsFillGearFill /></a>
            </Link>
          )}
        </p>
        <p><FaRegCopyright />{year}. NIHILncunia.</p>

        <NavBlock />
      </header>
    </>
  );
};
