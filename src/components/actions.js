import React from 'react';
import { Container, Box, HStack } from '@chakra-ui/react';
import RandomizerBtn from './randomizer-btn';
import HtmlCodeModalButton from './Settings/HtmlCodeModalButton';
import { dynamic } from '../state';
import FlutterCodeModalButton from './Settings/FlutterCodeModalButton';

const Actions = () => (
  <Box mt="10">
    <Container centerContent maxW="sm">
      <HStack spacing="24px">
        <HtmlCodeModalButton />
        <RandomizerBtn />
        <FlutterCodeModalButton />
      </HStack>
    </Container>
  </Box>
);

export default dynamic(Actions);
