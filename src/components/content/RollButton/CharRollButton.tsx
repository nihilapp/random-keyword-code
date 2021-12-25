import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { getWord } from '@/utils/words/front';
import { sizeData } from '@/data';
import { ICharacterWords } from '@/types';

interface IRollButton {
  children: React.ReactNode;
  words?: ICharacterWords;
  setState?: React.Dispatch<React.ReactElement[]>;
  type?: ('class' | 'status' | 'dnd' | 'skill' | 'story')
}

export const CharRollButton = React.memo(({
  children, words, setState, type,
}: IRollButton) => {
  const pickWord = useCallback(() => {
    if (type === 'class') {
      const { classReal, classFantasy, } = words;

      const realWord = getWord(1, classReal, 'normal') as string[];
      const fantasyWord = getWord(1, classFantasy, 'normal') as string[];
      const d10Arr = Array(10).fill(0).map((item: number, index) => item + index);
      const d10 = getWord(1, d10Arr, 'number') as number[];

      let type: string;
      let state: React.ReactElement[];

      if (parseInt(d10.join(''), 10) > 5) {
        type = '[ 현실 기반 ]';

        state = [ (
          <p key={uuid()}>
            <span className='bold'>{type}</span><br />
            <span className='blue keyword'>{realWord}</span>
          </p>
        ), ];
      } else {
        type = '[ 판타지 기반 ]';

        state = [ (
          <p key={uuid()}>
            <span className='bold'>{type}</span><br />
            <span className='blue keyword'>{fantasyWord}</span>
          </p>
        ), ];
      }

      setState(state);
    } else if (type === 'status') {
      const status = [
        '천민', '노예', '평민', '귀족', '왕족',
        '황족',
      ];

      const nobility = [
        '남작', '자작', '백작', '후작', '공작',
        '대공',
      ];

      const statusWord = getWord(1, status, 'normal') as string[];
      const nobilityWord = getWord(1, nobility, 'normal') as string[];
      let state: React.ReactElement[];

      if (statusWord.join('') === '귀족') {
        state = [ (
          <p key={uuid()}>
            <span className='blue keyword'>{statusWord} - {nobilityWord}</span>
          </p>
        ), ];
      } else {
        state = [ (
          <p key={uuid()}>
            <span className='blue keyword'>{statusWord}</span>
          </p>
        ), ];
      }

      setState(state);
    } else if (type === 'dnd') {
      const alignment = [
        '질서 선', '질서 중립', '질서 악', '중립 선', '완전한 중립',
        '중립 악', '혼돈 선', '혼돈 중립', '혼돈 악',
      ];
      const dndWord = getWord(1, alignment, 'normal') as string[];

      const state = [ (
        <p key={uuid()}>
          <span className='blue keyword'>{dndWord}</span>
        </p>
      ), ];

      setState(state);
    } else if (type === 'skill') {
      const skill = getWord(1, words.skills, 'normal') as string[];

      const state = [ (
        <p key={uuid()}>
          <span className='blue keyword'>{skill}</span> 능력
        </p>
      ), ];

      setState(state);
    } else if (type === 'story') {
      const purposeReal = getWord(1, words.purposeReal, 'normal') as string[];
      const purposeFantasy = getWord(1, words.purposeFantasy, 'normal') as string[];
      const whereReal = getWord(1, words.whereReal, 'normal') as string[];
      const whereFantasy = getWord(1, words.whereFantasy, 'normal') as string[];
      const gender = getWord(1, words.genders, 'normal') as string[];

      const whoFantasyWords = words.races.concat(words.classFantasy);

      const whoReal = getWord(1, words.classReal, 'normal') as string[];
      const whoFantasy = getWord(1, whoFantasyWords, 'normal') as string[];

      let storyType: string;
      let purpose: string[];
      let where: string[];
      let who: string[];

      const d10Arr = Array(10).fill(0).map((item: number, index) => item + index);
      const d10 = getWord(1, d10Arr, 'number') as number[];

      if (parseInt(d10.join(''), 10) > 5) {
        storyType = '[ 현실 기반 ]';
        purpose = purposeReal;
        where = whereReal;
        who = whoReal;
      } else {
        storyType = '[ 판타지 기반 ]';
        purpose = purposeFantasy;
        where = whereFantasy;
        who = whoFantasy;
      }

      const state = [ (
        <p key={uuid()}>
          <span className='bold'>{storyType}</span><br />
          <span className='blue keyword'>{purpose}</span> 위해<br />
          <span className='blue keyword'>{where}</span>에서 온<br />
          <span className='blue keyword'>{gender} {who}</span>
        </p>
      ), ];

      setState(state);
    }
  }, []);

  const CharRollButtonStyle = css({
    letterSpacing: '-1px',
    border: 'none',
    lineHeight: '1',
    borderRadius: '5px',
    color: '#555555',
    backgroundColor: '#33333330',
    padding: '5px 10px',
    fontWeight: '500',
    cursor: 'pointer',
    margin: '4px',

    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#333333',
    },

    '@media all and (min-width: 1024px)': {
      fontSize: `${sizeData[3]}`,
    },
    '@media all and (min-width: 768px) and (max-width: 1023px)': {
      fontSize: `${sizeData[2]}`,
    },
    '@media all and (min-width: 480px) and (max-width: 767px)': {
      fontSize: `${sizeData[2]}`,
    },
    '@media all and (max-width: 479px)': {
      fontSize: `${sizeData[1]}`,
    },
  });

  return (
    <>
      <button css={CharRollButtonStyle} type='button' onClick={pickWord}>{children}</button>
    </>
  );
});

CharRollButton.displayName = 'CharRollButton';
