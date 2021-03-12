import { Button, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Ding = ({ isSelected, activeComp, label, Icon, ...props }) => (
  <Button
    variant="unstyled"
    p="2"
    h="auto"
    pos="relative"
    opacity={isSelected ? 1 : 0.4}
    _hover={{ opacity: 1 }}
    _focus={{ outline: 'none' }}
    {...props}
  >
    <Flex direction="column" align="center">
      <Icon fontSize="2xl" color="gray.600" _dark={{ color: 'gray.300' }} />
      <Text fontSize="sm" fontWeight="normal" variant="subtle" mt="2">
        {label}
      </Text>
      <Box
        pos="absolute"
        bottom="-10px"
        w="full"
        display="flex"
        justifyContent="center"
        px="3"
      >
        {isSelected && activeComp}
      </Box>
    </Flex>
  </Button>
);

export default Ding;
