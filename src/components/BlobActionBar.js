import React from 'react';
import { Container, Box, HStack } from '@chakra-ui/react';
import RandomizerBtn from './Controls/RandomizerButton';
import HtmlCodeModalButton from './Controls/HtmlCodeModalButton';
import { dynamic } from '../state';
import FlutterCodeModalButton from './Controls/FlutterCodeModalButton';

const BlobActionBar = () => (
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

export default dynamic(BlobActionBar);
