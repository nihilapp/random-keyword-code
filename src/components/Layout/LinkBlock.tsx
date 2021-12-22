import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { sizeData } from '@/data';

interface ILinkBlock {
  href: string;
  children: React.ReactNode;
}

export const LinkBlock = ({ href, children, }: ILinkBlock) => {
  const [ className, setClassName, ] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === href) {
      setClassName('selected');
    }
  }, []);

  const LinkBlockStyle = css({
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#444444',
    color: '#dddddd',
    padding: '10px',
    borderRadius: '5px',
    margin: '4px',
    fontWeight: '500',
    lineHeight: '1',

    '&.selected': {
      backgroundColor: '#ffffff',
      color: '#333333',
    },

    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#333333',
    },

    '& > svg': {
      marginRight: '5px',
    },

    '@media all and (min-width: 1024px)': {
      fontSize: `${sizeData[3]}`,
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      fontSize: `${sizeData[2]}`,
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      fontSize: `${sizeData[2]}`,
    },
    '@media all and (max-width: 479px)': {
      fontSize: `${sizeData[1]}`,
    },
  });

  return (
    <>
      <Link href={href} passHref>
        <a css={LinkBlockStyle} className={className}>{children}</a>
      </Link>
    </>
  );
};
