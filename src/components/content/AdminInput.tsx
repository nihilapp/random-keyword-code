import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface IAdminInput {
  inputRef: React.MutableRefObject<any>;
  holder: string;
}

export const AdminInput = ({ inputRef, holder, }: IAdminInput) => {
  const AdminInputStyle = css({
    backgroundColor: '#33333330',
    borderRadius: '5px',
    border: 'none',
    lineHeight: '1',
    letterSpacing: '-1px',
    width: '100%',
    padding: '10px',
    color: '#333333',
    fontWeight: '500',
    textAlign: 'center',
    margin: '5px 0',

    '&:nth-of-type(1)': {
      marginTop: '0',
    },

    '&:nth-last-of-type(1)': {
      marginBottom: '0',
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
      <input css={AdminInputStyle} type='text' placeholder={holder} ref={inputRef} />
    </>
  );
};
