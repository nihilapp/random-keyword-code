import React, { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import {
  AdminBlockHeader, AdminButton, AdminInput, AdminMessage, Border, Box, BoxHeader
} from '@/components/content';

export const OtherAdminBlock = () => {
  const creatureRef = useRef(null);
  const [ creatureMessage, setCreatureMessage, ] = useState('');

  const onClickCreature = useCallback(async () => {
    const req = await axios.post('http://localhost:3000/keyword/api/words/create/normal', {
      category: 'random',
      file: 'creature',
      word: creatureRef.current.value,
    });

    creatureRef.current.value = '';
    setCreatureMessage(req.data.message);
  }, []);

  return (
    <>
      <Box mb={200}>
        <BoxHeader mb={20} align='center'>기타</BoxHeader>

        <AdminBlockHeader>환상종</AdminBlockHeader>
        <Border>
          <AdminInput inputRef={creatureRef} holder='환상종' />
          <AdminButton create={onClickCreature} />
          <AdminMessage message={creatureMessage} />
        </Border>
      </Box>
    </>
  );
};
