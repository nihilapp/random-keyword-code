import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { sizeData } from '@/data';

interface ILinkBox {
  href: string;
  children: React.ReactNode;
}

export const LinkBox = ({ href, children, }: ILinkBox) => {
  const LinkBoxStyle = css`
    margin: 15px 0;
    border-radius: 10px;

    &:nth-of-type(1) {
      margin-top: 0;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    & > a {
      padding: 20px 10px;
      background-color: #33333330;
      color: #555555;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      line-height: 1;
      text-align: center;
      font-weight: 500;
      letter-spacing: -1px;

      & > svg {
        margin-right: 5px;
      }

      &:hover {
        color: #ffffff;
        background-color: #333333;
      }
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
      <div css={LinkBoxStyle}>
        <Link href={href} passHref>
          <a>
            {children}
          </a>
        </Link>
      </div>
    </>
  );
};
