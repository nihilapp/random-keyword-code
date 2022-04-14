import React, { useState } from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { useSiteMeta } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';
import { Box, GoogleAd, ResultBox } from '@/components/content';
import { ColorRollButton } from '@/components/content/RollButton';

const ColorPage = () => {
  const [ word, setWord, ] = useState([ (
    <p key={uuid()}>
      <span className='blue keyword'>버튼을 입력하세요.</span>
    </p>
  ), ]);

  const ColorPageStyle = css`
    margin-top: 50px;
  `;

  const meta = useSiteMeta({
    title: '색상',
    url: '/color',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='color-page' css={ColorPageStyle}>
          <Box mb={30} pt={6} pb={6} pl={6} align='center'>
            <ColorRollButton setState={setWord}>
              랜덤 색상 1개
            </ColorRollButton>

            <ColorRollButton setState={setWord} number={2}>
              랜덤 색상 2개
            </ColorRollButton>

            <ColorRollButton setState={setWord} number={3}>
              랜덤 색상 3개
            </ColorRollButton>

            <ColorRollButton setState={setWord} number={4}>
              랜덤 색상 4개
            </ColorRollButton>

            <ColorRollButton setState={setWord} number={5}>
              랜덤 색상 5개
            </ColorRollButton>
          </Box>
          <GoogleAd />
          <Box mb={0}>
            <ResultBox>
              {word.map((item) => item)}
            </ResultBox>
          </Box>
        </div>
      </AppLayout>
    </>
  );
};

export default ColorPage;
