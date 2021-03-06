import React, { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import {
  AdminBlockHeader, AdminButton, AdminInput, AdminMessage, Border, Box, BoxHeader
} from '@/components/content';

export const RandomAdminBlock = () => {
  const randomBaseRef = useRef(null);
  const [ randomBaseMessage, setRandomBaseMessage, ] = useState('');

  const randomFruitRef = useRef(null);
  const [ randomFruitMessage, setRandomFruitMessage, ] = useState('');

  const randomVegetableRef = useRef(null);
  const [ randomVegetableMessage, setRandomVegetableMessage, ] = useState('');

  const randomMetalRef = useRef(null);
  const [ randomMetalMessage, setRandomMetalMessage, ] = useState('');

  const randomBodyRef = useRef(null);
  const [ randomBodyMessage, setRandomBodyMessage, ] = useState('');

  const onClickRandomBase = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'random',
      file: 'creature',
      word: randomBaseRef.current.value,
    });

    randomBaseRef.current.value = '';
    setRandomBaseMessage(req.data.message);
  }, []);
  const onClickRandomFruit = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'random',
      file: 'fruit',
      word: randomFruitRef.current.value,
    });

    randomFruitRef.current.value = '';
    setRandomFruitMessage(req.data.message);
  }, []);
  const onClickRandomVegetable = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'random',
      file: 'vegetable',
      word: randomVegetableRef.current.value,
    });

    randomVegetableRef.current.value = '';
    setRandomVegetableMessage(req.data.message);
  }, []);
  const onClickRandomMetal = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'random',
      file: 'metal',
      word: randomMetalRef.current.value,
    });

    randomMetalRef.current.value = '';
    setRandomMetalMessage(req.data.message);
  }, []);
  const onClickRandomBody = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'random',
      file: 'body',
      word: randomBodyRef.current.value,
    });

    randomBodyRef.current.value = '';
    setRandomBodyMessage(req.data.message);
  }, []);

  return (
    <>
      <Box>
        <BoxHeader mb={20} align='center'>??????</BoxHeader>

        <AdminBlockHeader>??????</AdminBlockHeader>
        <Border>
          <AdminInput inputRef={randomBaseRef} holder='??????' />
          <AdminButton create={onClickRandomBase} />
          <AdminMessage message={randomBaseMessage} />
        </Border>

        <AdminBlockHeader>??????</AdminBlockHeader>
        <Border>
          <AdminInput inputRef={randomFruitRef} holder='??????' />
          <AdminButton create={onClickRandomFruit} />
          <AdminMessage message={randomFruitMessage} />
        </Border>

        <AdminBlockHeader>??????</AdminBlockHeader>
        <Border>
          <AdminInput inputRef={randomVegetableRef} holder='??????' />
          <AdminButton create={onClickRandomVegetable} />
          <AdminMessage message={randomVegetableMessage} />
        </Border>

        <AdminBlockHeader>??????</AdminBlockHeader>
        <Border>
          <AdminInput inputRef={randomMetalRef} holder='??????' />
          <AdminButton create={onClickRandomMetal} />
          <AdminMessage message={randomMetalMessage} />
        </Border>

        <AdminBlockHeader>??????</AdminBlockHeader>
        <Border>
          <AdminInput inputRef={randomBodyRef} holder='??????' />
          <AdminButton create={onClickRandomBody} />
          <AdminMessage message={randomBodyMessage} />
        </Border>
      </Box>
    </>
  );
};
