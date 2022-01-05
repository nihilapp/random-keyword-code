import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface IAdminInput {
  inputRef: React.MutableRefObject<any>;
  holder: string;
}

export const AdminInput = ({ inputRef, holder, }: IAdminInput) => {
  const AdminInputStyle = css`
    background-color: #33333330;
    border-radius: 5px;
    border: none;
    line-height: 1;
    letter-spacing: -1px;
    width: 100%;
    padding: 10px;
    color: #333333;
    font-weight: 500;
    text-align: center;
    margin: 5px 0;

    &:nth-of-type(1) {
      margin-top: 0;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
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
      <input css={AdminInputStyle} type='text' placeholder={holder} ref={inputRef} />
    </>
  );
};
