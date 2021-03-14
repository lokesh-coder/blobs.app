import { Box, Input as ChakInput } from '@chakra-ui/react';
import React from 'react';
import { validateHex } from '../../utils/code.utils';

const Input = ({ value, onEnter }) => (
  <Box key={value}>
    <ChakInput
      variant="outline"
      bg="white"
      _dark={{ bg: 'gray.600' }}
      placeholder="#000000"
      defaultValue={value}
      _focus={{ borderColor: 'primary', boxShadow: '0 0 0 1px #d7819b' }}
      onKeyDown={(e) => {
        if (e.key !== 'Enter') return;
        if (!validateHex(e.target.value)) return;
        onEnter(e.target.value);
      }}
    />
  </Box>
);

export default Input;
