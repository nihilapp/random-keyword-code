import React from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { LinkBlock } from './LinkBlock';
import { pathList } from '@/data/path.data';

export const NavBlock = React.memo(() => {
  const NavBlockStyle = css({
    marginTop: '26px',
  });

  return (
    <>
      <nav css={NavBlockStyle}>
        {pathList.map((path) => (
          <LinkBlock key={uuid()} href={path.href}>{path.icon}{path.label}</LinkBlock>
        ))}
      </nav>
    </>
  );
});

NavBlock.displayName = 'NavBlock';
