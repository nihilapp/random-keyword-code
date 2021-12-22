import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { sizeData } from '@/data';

interface ILinkBox {
  href: string;
  children: React.ReactNode;
}

export const LinkBox = ({ href, children, }: ILinkBox) => {
  const LinkBoxStyle = css({
    margin: '15px 0',
    borderRadius: '10px',

    '&:nth-of-type(1)': {
      marginTop: '0',
    },

    '&:nth-last-of-type(1)': {
      marginBottom: '0',
    },

    '& > a': {
      padding: '20px 10px',
      backgroundColor: '#33333330',
      color: '#555555',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1',
      textAlign: 'center',
      fontWeight: '500',
      letterSpacing: '-1px',

      '& > svg': {
        marginRight: '5px',
      },

      '&:hover': {
        color: '#ffffff',
        backgroundColor: '#333333',
      },
    },

    '@media all and (min-width: 1024px)': {
      fontSize: `${sizeData[6]}`,
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      fontSize: `${sizeData[5]}`,
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      fontSize: `${sizeData[5]}`,
    },
    '@media all and (max-width: 479px)': {
      fontSize: `${sizeData[4]}`,
    },
  });

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
