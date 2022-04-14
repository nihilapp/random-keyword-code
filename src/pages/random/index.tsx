import React, { useState } from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { GetStaticProps } from 'next';
import { useSiteMeta } from '@/hooks';
import AppLayout from '@/layouts/AppLayout';
import { Box, GoogleAd, ResultBox } from '@/components/content';
import { RandomRollButton } from '@/components/content/RollButton';
import { getWordList } from '@/utils/words/back';
import { IRandomPage } from '@/types';

const RandomPage = ({ words, }: IRandomPage) => {
  const [ word, setWord, ] = useState([ (
    <p key={uuid()}>
      <span className='blue keyword'>버튼을 입력하세요.</span>
    </p>
  ), ]);

  const RandomPageStyle = css`
    margin-top: 50px;
  `;

  const meta = useSiteMeta({
    title: '랜덤',
    url: '/random',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div id='color-page' css={RandomPageStyle}>
          <Box mb={30} pt={6} pb={6} pl={6} align='center'>
            <RandomRollButton words={words} setState={setWord} type='one'>
              키워드 1개 ({words.randomLength}개)
            </RandomRollButton>

            <RandomRollButton words={words} setState={setWord} type='multiple' number={5}>
              키워드 5개 ({words.randomLength}개)
            </RandomRollButton>

            <RandomRollButton words={words} setState={setWord} type='multiple' number={50}>
              키워드 50개 ({words.randomLength}개)
            </RandomRollButton>

            <RandomRollButton words={words} setState={setWord} type='multiple' number={100}>
              키워드 100개 ({words.randomLength}개)
            </RandomRollButton>
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

export const getStaticProps: GetStaticProps = async () => {
  const randomBase = getWordList('random', 'base');
  const randomCreature = getWordList('random', 'creature').map((item) => `환상종/${item}`);
  const randomBreast = getWordList('random', 'breast');
  const randomRace = getWordList('character', 'race').map((item) => `종족/${item}`);
  const randomSin = getWordList('random', 'sin');
  const randomConstellation = getWordList('other', 'constellation').map((item) => `별자리/${item}`);
  const randomTool = getWordList('random', 'tool').map((item) => `공구/${item}`);
  const randomTableWare = getWordList('random', 'table_ware');
  const randomAstronomy = getWordList('random', 'astronomy').map((item) => `천체/${item}`);
  const randomFruit = getWordList('random', 'fruit').map((item) => `과일/${item}`);
  const randomVegetable = getWordList('random', 'vegetable').map((item) => `야채(채소)/${item}`);
  const randomWeather = getWordList('random', 'weather').map((item) => `기상/${item}`);
  const classArr = getWordList('character', 'class_fantasy').concat(
    getWordList('character', 'class_real')
  );
  const randomClass = [ ...new Set(classArr), ].map((item) => `직업/${item}`);
  const randomCharacterType = getWordList('character', 'type').map((item) => `캐릭터 유형/${item}`);
  const randomMetal = getWordList('random', 'metal').map((item) => `합금/${item}`);
  const randomFigure = getWordList('random', 'figure');
  const randomBody = getWordList('random', 'body').map((item) => `신체/${item}`);
  const randomStatus = getWordList('character', 'status');
  const randomNobility = getWordList('character', 'nobility');
  const randomWeapon = getWordList('character', 'weapon').map((item) => `무기/${item}`);
  const randomGenre = getWordList('character', 'genre').map((item) => `장르/${item}`);
  const randomFeature = getWordList('character', 'feature').map((item) => `특징/${item}`);
  const randomGem = getWordList('other', 'gem').map((item) => `암석(보석)/${item}`);
  const randomFashion = getWordList('character', 'fashion_concept').map((item) => `패션 컨셉/${item}`);
  const randomRole = getWordList('character', 'role');

  const random = randomBase.concat(
    randomCreature,
    randomBreast,
    randomRace,
    randomSin,
    randomConstellation,
    randomTool,
    randomTableWare,
    randomAstronomy,
    randomFruit,
    randomVegetable,
    randomWeather,
    randomClass,
    randomCharacterType,
    randomMetal,
    randomFigure,
    randomBody,
    randomStatus,
    randomNobility,
    randomWeapon,
    randomGenre,
    randomFeature,
    randomGem,
    randomFashion,
    randomRole
  );
  const randomLength = random.length - 27;

  return {
    props: {
      words: {
        randomBase,
        randomCreature,
        randomBreast,
        randomRace,
        randomSin,
        randomConstellation,
        randomTool,
        randomTableWare,
        randomAstronomy,
        randomFruit,
        randomVegetable,
        randomWeather,
        randomClass,
        randomCharacterType,
        randomMetal,
        randomFigure,
        randomBody,
        randomStatus,
        randomNobility,
        randomWeapon,
        randomGenre,
        randomFeature,
        randomGem,
        randomFashion,
        randomRole,
        randomLength,
      },
    },
  };
};

export default RandomPage;
