import React from 'react';
import { css } from '@emotion/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface IExternalLink {
  href: string;
  label: string;
}

export const ExternalLink = ({ href, label, }: IExternalLink) => {
  const ExternalLinkStyle = css`
    background-color: #11b32c30;
    color: #11b32c;
    line-height: 1;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 5px;
    letter-spacing: -1px;
    font-weight: 500;
    text-indent: 0;

    &:hover {
      color: #ffffff;
      background-color: #11b32c;
    }

    & > svg {
      margin-left: 5px;
    }
  `;

  return (
    <>
      <a
        css={ExternalLinkStyle}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        {label}<FaExternalLinkAlt />
      </a>
    </>
  );
};
