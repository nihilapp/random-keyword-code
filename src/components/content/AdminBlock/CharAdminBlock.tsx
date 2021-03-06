import React, { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import {
  AdminBlockHeader, AdminButton, AdminInput, AdminMessage, Border, Box, BoxHeader
} from '@/components/content';

export const CharAdminBlock = () => {
  const genreRef = useRef(null);
  const [ genreMessage, setGenreMessage, ] = useState('');

  const typeRef = useRef(null);
  const [ typeMessage, setTypeMessage, ] = useState('');

  const raceRef = useRef(null);
  const [ raceMessage, setRaceMessage, ] = useState('');

  const classRealRef = useRef(null);
  const classFantasyRef = useRef(null);
  const [ classRealMessage, setClassRealMessage, ] = useState('');
  const [ classFantasyMessage, setClassFantasyMessage, ] = useState('');

  const featureRef = useRef(null);
  const [ featureMessage, setFeatureMessage, ] = useState('');

  const skillRef = useRef(null);
  const [ skillMessage, setSkillMessage, ] = useState('');

  const weaponRef = useRef(null);
  const [ weaponMessage, setWeaponMessage, ] = useState('');

  const fashionRef = useRef(null);
  const [ fashionMessage, setFashionMessage, ] = useState('');

  const purposeRealRef = useRef(null);
  const purposeFantasyRef = useRef(null);
  const [ purposeRealMessage, setPurposeRealMessage, ] = useState('');
  const [ purposeFantasyMessage, setPurposeFantasyMessage, ] = useState('');

  const whereBaseRef = useRef(null);
  const whereRealRef = useRef(null);
  const whereFantasyRef = useRef(null);
  const [ whereBaseMessage, setWhereBaseMessage, ] = useState('');
  const [ whereRealMessage, setWhereRealMessage, ] = useState('');
  const [ whereFantasyMessage, setWhereFantasyMessage, ] = useState('');

  const onClickGenre = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'character',
      file: 'genre',
      word: genreRef.current.value,
    });

    genreRef.current.value = '';
    setGenreMessage(req.data.message);
  }, []);
  const onClickType = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'character',
      file: 'type',
      word: typeRef.current.value,
    });

    typeRef.current.value = '';
    setTypeMessage(req.data.message);
  }, []);
  const onClickRace = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'character',
      file: 'race',
      word: raceRef.current.value,
    });

    raceRef.current.value = '';
    setRaceMessage(req.data.message);
  }, []);
  const onClickClassReal = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'character',
      file: 'class_real',
      word: classRealRef.current.value,
    });

    classRealRef.current.value = '';
    setClassRealMessage(req.data.message);
  }, []);
  const onClickClassFantasy = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'character',
      file: 'class_fantasy',
      word: classFantasyRef.current.value,
    });

    classFantasyRef.current.value = '';
    setClassFantasyMessage(req.data.message);
  }, []);
  const onClickFeature = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'character',
      file: 'feature',
      word: featureRef.current.value,
    });

    featureRef.current.value = '';
    setFeatureMessage(req.data.message);
  }, []);
  const onClickFashion = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'character',
      file: 'fashion_concept',
      word: fashionRef.current.value,
    });

    fashionRef.current.value = '';
    setFashionMessage(req.data.message);
  }, []);
  const onClickSkill = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'character',
      file: 'skill',
      word: skillRef.current.value,
    });

    skillRef.current.value = '';
    setSkillMessage(req.data.message);
  }, []);
  const onClickPurposeReal = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'character',
      file: 'purpose_real',
      word: purposeRealRef.current.value,
    });

    purposeRealRef.current.value = '';
    setPurposeRealMessage(req.data.message);
  }, []);
  const onClickPurposeFantasy = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'character',
      file: 'purpose_fantasy',
      word: purposeFantasyRef.current.value,
    });

    purposeFantasyRef.current.value = '';
    setPurposeFantasyMessage(req.data.message);
  }, []);
  const onClickWhereBase = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'character',
      file: 'where_base',
      word: whereBaseRef.current.value,
    });

    whereBaseRef.current.value = '';
    setWhereBaseMessage(req.data.message);
  }, []);
  const onClickWhereReal = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'character',
      file: 'where_real',
      word: whereRealRef.current.value,
    });

    whereRealRef.current.value = '';
    setWhereRealMessage(req.data.message);
  }, []);
  const onClickWhereFantasy = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'character',
      file: 'where_fantasy',
      word: whereFantasyRef.current.value,
    });

    whereFantasyRef.current.value = '';
    setWhereFantasyMessage(req.data.message);
  }, []);
  const onClickWeapon = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'character',
      file: 'weapon',
      word: weaponRef.current.value,
    });

    weaponRef.current.value = '';
    setWeaponMessage(req.data.message);
  }, []);

  return (
    <>
      <Box mb={200}>
        <BoxHeader mb={20} align='center'>?????????</BoxHeader>

        <AdminBlockHeader>??????</AdminBlockHeader>
        <Border>
          <AdminInput inputRef={genreRef} holder='??????' />
          <AdminButton create={onClickGenre} />
          <AdminMessage message={genreMessage} />
        </Border>

        <AdminBlockHeader>????????? ??????</AdminBlockHeader>
        <Border>
          <AdminInput inputRef={typeRef} holder='????????? ??????' />
          <AdminButton create={onClickType} />
          <AdminMessage message={typeMessage} />
        </Border>

        <AdminBlockHeader>??????</AdminBlockHeader>
        <Border>
          <AdminInput inputRef={raceRef} holder='??????' />
          <AdminButton create={onClickRace} />
          <AdminMessage message={raceMessage} />
        </Border>

        <AdminBlockHeader>??????</AdminBlockHeader>
        <Border mb={10}>
          <AdminInput inputRef={classRealRef} holder='?????? ?????? ??????' />
          <AdminButton create={onClickClassReal} />
          <AdminMessage message={classRealMessage} />
        </Border>
        <Border>
          <AdminInput inputRef={classFantasyRef} holder='????????? ?????? ??????' />
          <AdminButton create={onClickClassFantasy} />
          <AdminMessage message={classFantasyMessage} />
        </Border>

        <AdminBlockHeader>??????</AdminBlockHeader>
        <Border>
          <AdminInput inputRef={featureRef} holder='??????' />
          <AdminButton create={onClickFeature} />
          <AdminMessage message={featureMessage} />
        </Border>

        <AdminBlockHeader>?????????</AdminBlockHeader>
        <Border>
          <AdminInput inputRef={skillRef} holder='?????????' />
          <AdminButton create={onClickSkill} />
          <AdminMessage message={skillMessage} />
        </Border>

        <AdminBlockHeader>??????</AdminBlockHeader>
        <Border>
          <AdminInput inputRef={weaponRef} holder='??????' />
          <AdminButton create={onClickWeapon} />
          <AdminMessage message={weaponMessage} />
        </Border>

        <AdminBlockHeader>?????? ??????</AdminBlockHeader>
        <Border>
          <AdminInput inputRef={fashionRef} holder='?????? ??????' />
          <AdminButton create={onClickFashion} />
          <AdminMessage message={fashionMessage} />
        </Border>

        <AdminBlockHeader>?????? ?????????</AdminBlockHeader>
        <Border mb={10}>
          <AdminInput inputRef={purposeRealRef} holder='?????? ?????? ??????' />
          <AdminButton create={onClickPurposeReal} />
          <AdminMessage message={purposeRealMessage} />
        </Border>
        <Border>
          <AdminInput inputRef={purposeFantasyRef} holder='????????? ?????? ??????' />
          <AdminButton create={onClickPurposeFantasy} />
          <AdminMessage message={purposeFantasyMessage} />
        </Border>
        <Border mb={10}>
          <AdminInput inputRef={whereBaseRef} holder='?????? ??????' />
          <AdminButton create={onClickWhereBase} />
          <AdminMessage message={whereBaseMessage} />
        </Border>
        <Border mb={10}>
          <AdminInput inputRef={whereRealRef} holder='?????? ?????? ??????' />
          <AdminButton create={onClickWhereReal} />
          <AdminMessage message={whereRealMessage} />
        </Border>
        <Border>
          <AdminInput inputRef={whereFantasyRef} holder='????????? ?????? ??????' />
          <AdminButton create={onClickWhereFantasy} />
          <AdminMessage message={whereFantasyMessage} />
        </Border>
      </Box>
    </>
  );
};
