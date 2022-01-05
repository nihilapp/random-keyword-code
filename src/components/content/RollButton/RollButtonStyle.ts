import { css } from '@emotion/react';
import { sizeData } from '@/data';

export const RollButtonStyle = css`
  letter-spacing: -1px;
  border: none;
  line-height: 1;
  border-radius: 5px;
  color: #555555;
  background-color: #33333330;
  padding: 5px 10px;
  font-weight: 500;
  cursor: pointer;
  margin: 4px;

  &:hover {
    color: #ffffff;
    background-color: #333333;
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
