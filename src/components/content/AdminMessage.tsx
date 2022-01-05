import React from 'react';
import { css } from '@emotion/react';
import { sizeData } from '@/data';

interface IAdminMessage {
  message: string;
}

export const AdminMessage = ({ message, }: IAdminMessage) => {
  const AdminMessageStyle = css`
    letter-spacing: -1px;
    font-weight: 900;
    text-align: center;
    margin-top: 10px;
    color: #ff5b5b;

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
      {message && <p css={AdminMessageStyle}>{message}</p>}
    </>
  );
};
