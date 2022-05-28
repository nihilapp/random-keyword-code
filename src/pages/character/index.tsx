import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { GetStaticProps } from 'next';
import { css } from '@emotion/react';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';
import { Box, ResultBox } from '@/components/content';
import { getWordList } from '@/utils/words/back';
import { ICharacterPage } from '@/types';
import { CharRollButton, RollButton } from '@/components/content/RollButton';

const CharacterPage = ({ words, }: ICharacterPage) => {
  const [ word, setWord, ] = useState([ (
    <p key={uuid()}>
      <span className='blue keyword'>버튼을 입력하세요.</span>
    </p>
  ), ]);

  const CharacterPageStyle = css`
    margin-top: 50px;
  `;

  const meta = useSiteMeta({
    title: '캐릭터',
    url: '/character',
  });

  const classLength = words.classReal.length + words.classFantasy.length;
  const storyLength = (classLength + words.races.length) * words.genders.length * (words.purposeReal.length + words.purposeFantasy.length) * (words.whereReal.length + words.whereFantasy.length);

  return (
    <>
      <AppLayout meta={meta}>
        <div id='character-page' css={CharacterPageStyle}>
          <Box mb={30} pt={6} pb={6} pl={6} align='center'>
            <RollButton words={words.genres} setState={setWord}>
              장르 ({words.genres.length}개)
            </RollButton>

            <CharRollButton words={words} setState={setWord} type='story'>
              배경스토리 ({storyLength}개)
            </CharRollButton>

            <RollButton words={words.roles} setState={setWord}>
              역할 ({words.roles.length}개)
            </RollButton>

            <RollButton words={words.types} setState={setWord}>
              유형 ({words.types.length}개)
            </RollButton>

            <RollButton words={words.races} setState={setWord}>
              종족 ({words.races.length}개)
            </RollButton>

            <CharRollButton words={words} setState={setWord} type='class'>
              직업 ({classLength}개)
            </CharRollButton>

            <CharRollButton words={words} setState={setWord} type='status'>
              신분 (11개)
            </CharRollButton>

            <RollButton words={words.genders} setState={setWord}>
              성별 ({words.genders.length}개)
            </RollButton>

            <RollButton words={words.personalityPositive} setState={setWord}>
              성격(긍정적인) ({words.personalityPositive.length}개)
            </RollButton>

            <RollButton words={words.personalityNegative} setState={setWord}>
              성격(부정적인) ({words.personalityNegative.length}개)
            </RollButton>

            <RollButton words={words.age} setState={setWord}>
              나이 (1~10000+)
            </RollButton>

            <CharRollButton words={words} setState={setWord} type='dnd'>
              성향(D&#38;D) (9개)
            </CharRollButton>

            <RollButton words={words.features} setState={setWord}>
              특징 ({words.features.length}개)
            </RollButton>

            <RollButton words={words.attributes} setState={setWord}>
              속성 ({words.attributes.length}개)
            </RollButton>

            <CharRollButton words={words} setState={setWord} type='skill'>
              초능력 ({words.skills.length}개)
            </CharRollButton>

            <RollButton words={words.weapons} setState={setWord}>
              무기 ({words.weapons.length}개)
            </RollButton>

            <RollButton words={words.fashionConcept} setState={setWord}>
              패션 컨셉 ({words.fashionConcept.length}개)
            </RollButton>
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
  const races = getWordList('character', 'race');
  const genres = getWordList('character', 'genre');
  const classReal = getWordList('character', 'class_real');
  const classFantasy = getWordList('character', 'class_fantasy');
  const genders = getWordList('character', 'gender');
  const types = getWordList('character', 'type');
  const roles = getWordList('character', 'role');
  const personalityPositive = getWordList('character', 'personality_positive');
  const personalityNegative = getWordList('character', 'personality_negative');
  const attributes = getWordList('character', 'attribute');
  const features = getWordList('character', 'feature');
  const skills = getWordList('character', 'skill');
  const purposeReal = getWordList('character', 'purpose_real');
  const purposeFantasy = getWordList('character', 'purpose_fantasy');
  const whereReal = getWordList('character', 'where_base').concat(
    getWordList('character', 'where_real')
  );
  const whereFantasy = getWordList('character', 'where_base').concat(
    getWordList('character', 'where_fantasy')
  );
  const weapons = getWordList('character', 'weapon');
  const fashionConcept = getWordList('character', 'fashion_concept');
  const age = getWordList('character', 'age').concat(
    Array(100).fill(0).map((item, index) => `${item + (index + 1)}세`)
  );

  return {
    props: {
      words: {
        genres,
        races,
        classReal,
        classFantasy,
        genders,
        roles,
        types,
        personalityPositive,
        personalityNegative,
        attributes,
        features,
        skills,
        purposeReal,
        purposeFantasy,
        whereReal,
        whereFantasy,
        weapons,
        fashionConcept,
        age,
      },
    },
  };
};

export default CharacterPage;
