import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { getWord } from '@/utils/words/front';
import { sizeData } from '@/data';
import { INihilArea, INihilOrga, INihilWords } from '@/types';

interface IRollButton {
  children: React.ReactNode;
  words?: INihilWords;
  setState?: React.Dispatch<React.ReactElement[]>;
  type?: ('orga' | 'area' | 'story');
}

export const NihilRollButton = ({
  children, words, setState, type,
}: IRollButton) => {
  const pickWord = useCallback(() => {
    if (type === 'orga') {
      const orgaWords = words.organizations as INihilOrga[];
      const word = getWord(1, orgaWords, type) as INihilOrga[];

      const state = word.map((item) => (
        <p key={uuid()}>
          <span className='blue keyword'>{item.name}</span><br />
          <span className='blue description'>{item.description}</span>
        </p>
      ));

      setState(state);
    } else if (type === 'area') {
      const areaWords = words.areas as INihilArea;

      const first = getWord(1, areaWords['지역'], 'normal').join('');
      let second: string;
      let third: string;
      let state: React.ReactElement[];

      if (first === '드라스 섬') {
        second = areaWords['드라스 섬'].length !== 0
          ? getWord(1, areaWords['드라스 섬'], 'normal').join('')
          : first;
      } else if (first === '발라큐아 섬') {
        second = areaWords['발라큐아 섬'].length !== 0
          ? getWord(1, areaWords['발라큐아 섬'], 'normal').join('')
          : first;
      } else if (first === '엘카우스 섬') {
        second = areaWords['엘카우스 섬'].length !== 0
          ? getWord(1, areaWords['엘카우스 섬'], 'normal').join('')
          : first;
      } else if (first === '셀레오르 섬') {
        second = areaWords['셀레오르 섬'].length !== 0
          ? getWord(1, areaWords['셀레오르 섬'], 'normal').join('')
          : first;
      } else if (first === '철벽 섬') {
        second = areaWords['철벽 섬'].length !== 0
          ? getWord(1, areaWords['철벽 섬'], 'normal').join('')
          : first;
      } else if (first === '바르기스 대륙') {
        second = areaWords['바르기스 대륙'].length !== 0
          ? getWord(1, areaWords['바르기스 대륙'], 'normal').join('')
          : first;
      } else if (first === '유센티아 대륙') {
        second = areaWords['유센티아 대륙'].length !== 0
          ? getWord(1, areaWords['유센티아 대륙'], 'normal').join('')
          : first;

        if (second === '고르고니아 제국') {
          third = areaWords['고르고니아 제국'].length !== 0
            ? getWord(1, areaWords['고르고니아 제국'], 'normal').join('')
            : second;
        } else if (second === '드라코니르 왕국') {
          third = areaWords['드라코니르 왕국'].length !== 0
            ? getWord(1, areaWords['드라코니르 왕국'], 'normal').join('')
            : second;
        } else if (second === '신 제국') {
          third = areaWords['신 제국'].length !== 0
            ? getWord(1, areaWords['신 제국'], 'normal').join('')
            : second;
        } else if (second === '강철 제국') {
          third = areaWords['강철 제국'].length !== 0
            ? getWord(1, areaWords['강철 제국'], 'normal').join('')
            : second;
        }
      } else if (first === '바르기스 해') {
        second = areaWords['바르기스 해'].length !== 0
          ? getWord(1, areaWords['바르기스 해'], 'normal').join('')
          : first;
      } else if (first === '아란티아 해') {
        second = areaWords['아란티아 해'].length !== 0
          ? getWord(1, areaWords['아란티아 해'], 'normal').join('')
          : first;
      } else if (first === '네프네린 해') {
        second = areaWords['네프네린 해'].length !== 0
          ? getWord(1, areaWords['네프네린 해'], 'normal').join('')
          : first;
      } else if (first === '리자루스 해') {
        second = areaWords['리자루스 해'].length !== 0
          ? getWord(1, areaWords['리자루스 해'], 'normal').join('')
          : first;
      } else if (first === '리자루스 제도') {
        second = areaWords['리자루스 제도'].length !== 0
          ? getWord(1, areaWords['리자루스 제도'], 'normal').join('')
          : first;
      } else if (first === '썩은 고원') {
        second = areaWords['썩은 고원'].length !== 0
          ? getWord(1, areaWords['썩은 고원'], 'normal').join('')
          : first;
      } else if (first === '검은 협곡') {
        second = areaWords['검은 협곡'].length !== 0
          ? getWord(1, areaWords['검은 협곡'], 'normal').join('')
          : first;
      } else if (first === '하얀 숲') {
        second = areaWords['하얀 숲'].length !== 0
          ? getWord(1, areaWords['하얀 숲'], 'normal').join('')
          : first;
      } else if (first === '베마로스 해') {
        second = areaWords['베마로스 해'].length !== 0
          ? getWord(1, areaWords['베마로스 해'], 'normal').join('')
          : first;
      } else if (first === '조각 섬') {
        second = areaWords['조각 섬'].length !== 0
          ? getWord(1, areaWords['조각 섬'], 'normal').join('')
          : first;
      } else if (first === '배들의 무덤') {
        second = areaWords['배들의 무덤'].length !== 0
          ? getWord(1, areaWords['배들의 무덤'], 'normal').join('')
          : first;
      }

      if (second !== first) {
        state = [ (
          <p key={uuid()}>
            <span className='blue keyword'>{first} - {second}</span>
          </p>
        ), ];
      } else if (third !== undefined) {
        state = [ (
          <p key={uuid()}>
            <span className='blue keyword'>{first} - {second} - {third}</span>
          </p>
        ), ];
      } else {
        state = [ (
          <p key={uuid()}>
            <span className='blue keyword'>{first}</span>
          </p>
        ), ];
      }

      setState(state);
    } else if (type === 'story') {
      const purposeWords = words.purposes;
      const placeWords = words.places;
      const genderWords = words.genders;
      const whoWords = words.races.concat(words.classes);

      const purpose = getWord(1, purposeWords, 'normal');
      const place = getWord(1, placeWords, 'normal');
      const gender = getWord(1, genderWords, 'normal');
      const who = getWord(1, whoWords, 'normal');

      const state = [ (
        <p key={uuid()}>
          <span className='blue keyword'>{purpose}</span> 위해<br />
          <span className='blue keyword'>{place}</span>에서 온<br />
          <span className='blue keyword'>{gender} {who}</span>
        </p>
      ), ];

      setState(state);
    }
  }, []);

  const NihilRollButtonStyle = css({
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
      <button css={NihilRollButtonStyle} type='button' onClick={pickWord}>{children}</button>
    </>
  );
};
