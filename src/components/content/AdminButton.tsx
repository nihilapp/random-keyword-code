import React from 'react';
import { css } from '@emotion/react';
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';
import { sizeData } from '@/data';

interface IAdminButton {
  create: () => Promise<void>;
  remove?: () => Promise<void>;
}

export const AdminButton = ({ create, remove, }: IAdminButton) => {
  const AdminButtonStyle = css({
    marginTop: '10px',

    '& > button': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 0',
      fontWeight: '500',
      borderRadius: '5px',
      lineHeight: '1',
      border: 'none',
      letterSpacing: '-1px',
      width: '100%',
      cursor: 'pointer',

      '& > svg': {
        marginRight: '5px',
      },

      '&:nth-of-type(1)': {
        backgroundColor: '#11b32c30',
        color: '#11b32c',

        '&:hover': {
          color: '#ffffff',
          backgroundColor: '#11b32c',
        },
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
    },
  });

  return (
    <>
      <div css={AdminButtonStyle}>
        <button type='button' onClick={create}><IoMdAddCircle />추가</button>
        {remove && <button type='button' onClick={remove}><IoMdRemoveCircle />제거</button>}
      </div>
    </>
  );
};
