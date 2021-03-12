/* eslint-disable react/jsx-one-expression-per-line */
import { Box, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Credits = () => (
  <Box>
    <Text textAlign="center" variant="subtle">
      Sound effects obtained from{' '}
      <Link color="primary" to="https://www.zapsplat.com">
        https://www.zapsplat.com
      </Link>
    </Text>
  </Box>
);

export default Credits;
