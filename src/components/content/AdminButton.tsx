import React from 'react';
import { css } from '@emotion/react';
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';
import { sizeData } from '@/data';

interface IAdminButton {
  create: () => Promise<void>;
  remove?: () => Promise<void>;
}

export const AdminButton = ({ create, remove, }: IAdminButton) => {
  const AdminButtonStyle = css`
    margin-top: 10px;

    & > button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      font-weight: 500;
      border-radius: 5px;
      line-height: 1;
      border: none;
      letter-spacing: -1px;
      width: 100%;
      cursor: pointer;

      & > svg {
        margin-right: 5px;
      }

      &:nth-of-type(1) {
        background-color: #11b32c30;
        color: #11b32c;

        &:hover {
          color: #ffffff;
          background-color: #11b32c;
        }
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
    }
  `;

  return (
    <>
      <div css={AdminButtonStyle}>
        <button type='button' onClick={create}><IoMdAddCircle />추가</button>
        {remove && <button type='button' onClick={remove}><IoMdRemoveCircle />제거</button>}
      </div>
    </>
  );
};
