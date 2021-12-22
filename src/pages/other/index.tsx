import React, { useState } from 'react';
import { css } from '@emotion/react';
import { GetStaticProps } from 'next';
import { v4 as uuid } from 'uuid';
import { getWordJson, getWordList } from '@/utils/words/back';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { IOtherMinor, IOtherPage } from '@/types';
import { Box, ResultBox } from '@/components/content';
import { OtherRollButton, RollButton } from '@/components/content/RollButton';

const OtherPage = ({ words, }: IOtherPage) => {
  const [ word, setWord, ] = useState([ (
    <p key={uuid()}>
      <span className='blue keyword'>버튼을 입력하세요.</span>
    </p>
  ), ]);

  const OtherPageStyle = css({
    marginTop: '50px',
  });

  const meta = useSiteMeta({
    title: '기타',
    url: '/other',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='other-page' css={OtherPageStyle}>
          <Box mb={30} pt={6} pb={6} pl={6} align='center'>
            <RollButton words={words.constellations} setState={setWord}>
              별자리 ({words.constellations.length}개)
            </RollButton>

            <OtherRollButton words={words} setState={setWord} type='major'>
              메이저 아르카나 ({words.arcanaMajor.length}개)
            </OtherRollButton>

            <OtherRollButton words={words} setState={setWord} type='minor'>
              마이너 아르카나 ({words.arcanaMinor.length}개)
            </OtherRollButton>

            <RollButton words={words.playingCard} setState={setWord}>
              플레잉 카드 1장 ({words.playingCard.length}개)
            </RollButton>

            <OtherRollButton words={words} setState={setWord} type='playing'>
              플레잉 카드 5장 ({words.playingCard.length}개)
            </OtherRollButton>
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

export const getStaticProps: GetStaticProps = async () => {
  const constellations = getWordList('other', 'constellation') as string[];
  const arcanaMajor = getWordList('other', 'arcana_major') as string[];
  const arcanaMinor = getWordJson('other', 'arcana_minor', 'minor') as IOtherMinor[];
  const playingCard = getWordList('other', 'playing_card') as string[];

  return {
    props: {
      words: {
        constellations,
        arcanaMajor,
        arcanaMinor,
        playingCard,
      },
    },
  };
};

export default OtherPage;
