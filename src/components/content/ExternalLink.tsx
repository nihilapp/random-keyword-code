import React from 'react';
import { css } from '@emotion/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface IExternalLink {
  href: string;
  label: string;
}

export const ExternalLink = ({ href, label, }: IExternalLink) => {
  const ExternalLinkStyle = css({
    backgroundColor: '#11b32c30',
    color: '#11b32c',
    lineHeight: '1',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    padding: '5px',
    letterSpacing: '-1px',
    fontWeight: '500',
    textIndent: '0',

    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#11b32c',
    },

    '& > svg': {
      marginLeft: '5px',
    },
  });

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
