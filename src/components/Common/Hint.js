import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { QuestionIcon } from './Icons';

const Hint = ({ text }) => (
  <Popover autoFocus={false}>
    <PopoverTrigger>
      <Button
        bg="transparent"
        p="0"
        h="auto"
        color="gray.400"
        _hover={{ bg: 'transparent', color: 'gray.600' }}
        _focus={{ outline: 'none' }}
      >
        <QuestionIcon />
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverBody>
        <Text variant="subtle" fontSize="sm" p="3">
          {text}
        </Text>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);
export default Hint;
