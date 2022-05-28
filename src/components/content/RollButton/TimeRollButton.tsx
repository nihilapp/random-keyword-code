import React, { useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { RollButtonStyle } from './RollButtonStyle';

interface IRollButton {
  children: React.ReactNode;
  setState?: React.Dispatch<React.ReactElement[]>;
}

export const TimeRollButton = React.memo(({
  children, setState,
}: IRollButton) => {
  const pickWord = useCallback(() => {
    let hh = Math.floor(Math.random() * 24) as (string | number);
    hh = hh < 10 ? `0${hh}` : hh;
    let mm = Math.floor(Math.random() * 60) as (string | number);
    mm = mm < 10 ? `0${mm}` : mm;
    let ss = Math.floor(Math.random() * 60) as (string | number);
    ss = ss < 10 ? `0${ss}` : ss;

    const time = `${hh}:${mm}:${ss}`;

    const state = [ (
      <p key={uuid()}>
        <span className='blue keyword'>{time}</span>
      </p>
    ), ];

    setState(state);
  }, []);

  return (
    <>
      <button css={RollButtonStyle} type='button' onClick={pickWord}>{children}</button>
    </>
  );
});

TimeRollButton.displayName = 'TimeRollButton';
