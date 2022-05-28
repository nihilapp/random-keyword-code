import React, { useState } from 'react';
import { css } from '@emotion/react';
import { GetStaticProps } from 'next';
import { v4 as uuid } from 'uuid';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { Box, ResultBox } from '@/components/content';
import { getWordJson, getWordList } from '@/utils/words/back';
import { NihilRollButton, RollButton } from '@/components/content/RollButton';
import { INihilArea, INihilOrga, INihilPage } from '@/types';
import { getAreaLength, getBackStoryLength } from '@/utils/words/front';

const NihilPage = ({ words, }: INihilPage) => {
  const [ word, setWord, ] = useState([ (
    <p key={uuid()}>
      <span className='blue keyword'>버튼을 입력하세요.</span>
    </p>
  ), ]);

  const NihilPageStyle = css`
    margin-top: 50px;
  `;

  const meta = useSiteMeta({
    title: '니힐 전용',
    url: '/nihil',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='nihil-page' css={NihilPageStyle}>
          <Box mb={30} pt={6} pb={6} pl={6} align='center'>
            <RollButton words={words.races} setState={setWord}>
              종족 ({words.races.length}개)
            </RollButton>

            <RollButton words={words.classes} setState={setWord}>
              직업 ({words.classes.length}개)
            </RollButton>

            <NihilRollButton words={words} setState={setWord} type='orga'>
              단체 ({words.organizations.length}개)
            </NihilRollButton>

            <NihilRollButton words={words} setState={setWord} type='area'>
              지역 ({getAreaLength(words.areas)}개)
            </NihilRollButton>

            <NihilRollButton words={words} setState={setWord} type='story'>
              배경 스토리 ({getBackStoryLength(words)}개)
            </NihilRollButton>
          </Box>
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

export const getStaticProps: GetStaticProps = async () => {
  const races = getWordList('nihil', 'race');
  const classes = getWordList('nihil', 'class');
  const organizations = getWordJson('nihil', 'organization', 'orga') as INihilOrga[];
  const areas = getWordJson('nihil', 'area', 'area') as INihilArea;
  const purposes = getWordList('character', 'purpose_real').concat(
    getWordList('character', 'purpose_fantasy'),
    getWordList('nihil', 'purpose_nihil')
  );
  const places = getWordList('character', 'where_base').concat(
    getWordList('character', 'where_fantasy'),
    getWordList('nihil', 'where_nihil')
  );
  const genders = getWordList('character', 'gender');

  return {
    props: {
      words: {
        races,
        classes,
        organizations,
        areas,
        purposes,
        places,
        genders,
      },
    },
  };
};

export default NihilPage;
