import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { sizeData } from '@/data';

interface ILinkBlock {
  href: string;
  children: React.ReactNode;
  type?: ('app' | 'external')
}

export const LinkBlock = React.memo(({ href, children, type = 'app', }: ILinkBlock) => {
  const [ className, setClassName, ] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === href) {
      setClassName('selected');
    }
  }, []);

  const LinkBlockStyle = css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #444444;
    color: #dddddd;
    padding: 10px;
    border-radius: 5px;
    margin: 4px;
    font-weight: 500;
    line-height: 1;

    &.selected,
    &:hover{
      background-color: #ffffff;
      color: #333333;
    }

    & > svg {
      margin-right: 5px;
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

  return (
    <>
      {type === 'app' && (
        <Link href={href} passHref>
          <a css={LinkBlockStyle} className={className}>{children}</a>
        </Link>
      )}
      {type === 'external' && (
        <a css={LinkBlockStyle} href={href} target='_blank' rel='noopener noreferrer'>{children}</a>
      )}
    </>
  );
});

LinkBlock.displayName = 'LinkBlock';
