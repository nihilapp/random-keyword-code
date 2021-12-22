import React, { useState } from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { useSiteMeta } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';
import { Box, ResultBox } from '@/components/content';

const RandomPage = () => {
  const [ word, setWord, ] = useState([ (
    <p key={uuid()}>
      <span className='blue keyword'>버튼을 입력하세요.</span>
    </p>
  ), ]);

  const RandomPageStyle = css({
    marginTop: '50px',
  });

  const meta = useSiteMeta({
    title: '랜덤',
    url: '/random',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='color-page' css={RandomPageStyle}>
          <Box mb={30} pt={6} pb={6} pl={6} align='center'>
            content
          </Box>
          <Box>
            <ResultBox>
              {word.map((item) => item)}
            </ResultBox>
          </Box>
        </div>
      </AppLayout>
    </>
  );
};

export default RandomPage;
