import React from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { BsFillGridFill } from 'react-icons/bs';
import { LinkBlock } from './LinkBlock';
import { pathList } from '@/data/path.data';

export const NavBlock = React.memo(() => {
  const NavBlockStyle = css({
    marginTop: '26px',
  });

  return (
    <>
      <nav css={NavBlockStyle}>
        <LinkBlock href='https://nihilapp.github.io/' type='external'><BsFillGridFill />니힐앱스</LinkBlock>
        {pathList.map((path) => (
          <LinkBlock key={uuid()} href={path.href}>{path.icon}{path.label}</LinkBlock>
        ))}
      </nav>
    </>
  );
});

NavBlock.displayName = 'NavBlock';
