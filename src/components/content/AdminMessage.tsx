import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface IAdminMessage {
  message: string;
}

export const AdminMessage = ({ message, }: IAdminMessage) => {
  const AdminMessageStyle = css({
    letterSpacing: '-1px',
    fontWeight: '900',
    textAlign: 'center',
    marginTop: '10px',
    color: '#ff5b5b',

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
      {message && <p css={AdminMessageStyle}>{message}</p>}
    </>
  );
};
