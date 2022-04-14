import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { Box } from './Box';

interface GoogleAdProps {
  margin?: number;
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    adsbygoogle: {[key: string]: unknown}[];
  }
}

export const GoogleAd = ({ margin, }: GoogleAdProps) => {
  const { asPath, } = useRouter();
  const slot = '8633836163';

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, [ asPath, ]);

  const GoogleAdStyle = css`

  `;

  return (
    <>
      <Box mb={30} mt={30}>
        <div className='page-ad' css={GoogleAdStyle}>
          <ins
            className='adsbygoogle sizing'
            style={{ display: 'block', }}
            data-ad-client='ca-pub-9256396675875954'
            data-ad-slot={slot}
            data-ad-format='auto'
            data-language='ko'
            data-full-width-responsive='true'
          />
        </div>
      </Box>
    </>
  );
};
