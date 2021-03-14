import { Box, Center, Input as ChakInput, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const UrlInput = ({ value, onEnter }) => {
  const [error, setError] = useState(null);
  const urlRegex = /([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#\.]?[\w-]+)*\/?/gm;

  return (
    <Box key={value}>
      <ChakInput
        variant="outline"
        placeholder="https://someurl.png"
        bg="white"
        _dark={{ bg: 'gray.600' }}
        defaultValue={value}
        _focus={{ borderColor: 'primary', boxShadow: '0 0 0 1px #d7819b' }}
        onKeyDown={(e) => {
          if (e.key !== 'Enter') return;
          const url = e.target.value;
          if (!urlRegex.test(url)) {
            setError('Invalid URL');
            return;
          }
          setError(null);
          onEnter(url);
        }}
      />
      {error && (
        <Center>
          <Text mt="2" fontSize="sm" color="red.600" fontWeight="600">
            {error}
          </Text>
        </Center>
      )}
    </Box>
  );
};

export default UrlInput;
