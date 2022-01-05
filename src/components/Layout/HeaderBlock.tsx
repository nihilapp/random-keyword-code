import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { BsFillGearFill } from 'react-icons/bs';
import { FaGithub, FaRegCopyright } from 'react-icons/fa';
import { siteData, sizeData } from '@/data';
import { NavBlock } from './NavBlock';

export const HeaderBlock = React.memo(() => {
  const HeaderBlockStyle = css`
    padding: 10px 10px 6px 10px;
    background-color: #333333;
    color: #ffffff;
    text-align: center;
    border-radius: 10px;

    & > h1 {
      font-weight: 900;
      margin-bottom: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      & > img {
        margin-right: 5px;
        display: block;
      }
    }

    & > p {
      font-weight: 500;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      line-height: 1;

      & > .app-version {
        margin-right: 5px;
        line-height: 1;
      }

      & > .app-github {
        color: #dddddd;
        background-color: #444444;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: #ffffff;
          color: #333333;
        }
      }

      & > .app-admin {
        color: #dddddd;
        background-color: #444444;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-left: 5px;

        &:hover {
          background-color: #ffffff;
          color: #333333;
        }
      }

      &:nth-of-type(2) {
        margin-top: 5px;
        margin-bottom: 6px;
        font-weight: 900;

        & > svg {
          margin-right: 5px;
        }
      }
    }

    @media all and (min-width: 1024px) {
      h1 {
        font-size: ${sizeData[6]};
        img {
          width: 38px;
        }
      }
      p {
        font-size: ${sizeData[3]};
      }
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      h1 {
        font-size: ${sizeData[5]};
        img {
          width: 32px;
        }
      }
      p {
        font-size: ${sizeData[2]};
      }
    }

    @media all and (min-width: 480px) and (max-width: 767px) {
      h1 {
        font-size: ${sizeData[5]};
        img {
          width: 32px;
        }
      }
      p {
        font-size: ${sizeData[2]};
      }
    }

    @media all and (max-width: 479px) {
      h1 {
        font-size: ${sizeData[4]};
        img {
          width: 25px;
        }
      }
      p {
        font-size: ${sizeData[1]};
      }
    }
  `;

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
          <a href='https://github.com/nihilapp/random-keyword-code' target='_blank' rel='noopener noreferrer' className='app-github'><FaGithub />깃허브</a>
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
});

HeaderBlock.displayName = 'HeaderBlock';
