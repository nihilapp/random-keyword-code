import React, { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import {
  AdminBlockHeader,
  AdminButton, AdminInput, AdminMessage, Border, Box, BoxHeader
} from '..';

export const NihilAdminBlock = () => {
  const raceRef = useRef(null);
  const [ raceMessage, setRaceMessage, ] = useState('');

  const classRef = useRef(null);
  const [ classMessage, setClassMessage, ] = useState('');

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const [ orgaMessage, setOrgaMessage, ] = useState('');

  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const [ areaMessage, setAreaMessage, ] = useState('');

  const purposeRef = useRef(null);
  const [ purposeMessage, setPurposeMessage, ] = useState('');

  const whereRef = useRef(null);
  const [ whereMessage, setWhereMessage, ] = useState('');

  const onClickRace = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'nihil',
      file: 'race',
      word: raceRef.current.value,
    });

    raceRef.current.value = '';
    setRaceMessage(req.data.message);
  }, []);

  const onClickClass = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'nihil',
      file: 'class',
      word: classRef.current.value,
    });

    classRef.current.value = '';
    setClassMessage(req.data.message);
  }, []);

  const onClickOrga = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/orga', {
      category: 'nihil',
      file: 'organization',
      word: {
        name: nameRef.current.value,
        description: descriptionRef.current.value,
      },
    });

    nameRef.current.value = '';
    descriptionRef.current.value = '';
    setOrgaMessage(req.data.message);
  }, []);

  const onClickArea = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/area', {
      category: 'nihil',
      file: 'area',
      word: {
        first: firstRef.current.value,
        second: secondRef.current.value,
      },
    });

    firstRef.current.value = '';
    secondRef.current.value = '';
    setAreaMessage(req.data.message);
  }, []);

  const onClickPurpose = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'nihil',
      file: 'purpose_nihil',
      word: purposeRef.current.value,
    });

    purposeRef.current.value = '';
    setPurposeMessage(req.data.message);
  }, []);

  const onClickWhere = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'nihil',
      file: 'where_nihil',
      word: whereRef.current.value,
    });

    whereRef.current.value = '';
    setWhereMessage(req.data.message);
  }, []);

  return (
    <>
      <Box mb={200}>
        <BoxHeader mb={20} align='center'>?????? ??????</BoxHeader>

        <AdminBlockHeader>?????? ??????</AdminBlockHeader>
        <Border>
          <AdminInput holder='?????? ??????' inputRef={raceRef} />
          <AdminButton create={onClickRace} />
          <AdminMessage message={raceMessage} />
        </Border>

        <AdminBlockHeader>?????? ?????????</AdminBlockHeader>
        <Border>
          <AdminInput holder='?????? ?????????' inputRef={classRef} />
          <AdminButton create={onClickClass} />
          <AdminMessage message={classMessage} />
        </Border>

        <AdminBlockHeader>??????</AdminBlockHeader>
        <Border>
          <AdminInput holder='??????' inputRef={nameRef} />
          <AdminInput holder='??????' inputRef={descriptionRef} />
          <AdminButton create={onClickOrga} />
          <AdminMessage message={orgaMessage} />
        </Border>

        <AdminBlockHeader>??????</AdminBlockHeader>
        <Border>
          <AdminInput holder='?????? ?????????' inputRef={firstRef} />
          <AdminInput holder='?????? ?????????' inputRef={secondRef} />
          <AdminButton create={onClickArea} />
          <AdminMessage message={areaMessage} />
        </Border>

        <AdminBlockHeader>?????? ?????????</AdminBlockHeader>
        <Border mb={10}>
          <AdminInput holder='??????' inputRef={purposeRef} />
          <AdminButton create={onClickPurpose} />
          <AdminMessage message={purposeMessage} />
        </Border>
        <Border>
          <AdminInput holder='??????' inputRef={whereRef} />
          <AdminButton create={onClickWhere} />
          <AdminMessage message={whereMessage} />
        </Border>
      </Box>
    </>
  );
};
