/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Button } from '@chakra-ui/react';
import useSound from 'use-sound';
import boopSfx from '/static/spring.mp3';

import { createRandomBlob } from '../utilities';
import { dynamic } from '../state';

const RandomizerBtn = ({ playSound }) => {
  const [play] = useSound(boopSfx, { volume: 0.5 });
  return (
    <Button
      onClick={() => {
        if (playSound) play();
        createRandomBlob();
      }}
      variant="main"
    >
      Change blob
    </Button>
  );
};
export default dynamic(RandomizerBtn, ['playSound']);
