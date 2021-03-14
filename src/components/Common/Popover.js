import {
  Box,
  Heading,
  Popover as ChakPopover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Popover = ({ props, children, label, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <ChakPopover
      autoFocus={false}
      isLazy
      placement="top"
      arrowSize="0"
      isOpen={isOpen}
      onClose={close}
    >
      <PopoverTrigger>
        <Box onClick={open}>
          {!!trigger && <Box>{trigger}</Box>}
          {!trigger && (
            <Box>
              <Tooltip
                label={label}
                aria-label={label}
                hasArrow
                variant="default"
              >
                <Box
                  as="button"
                  p="15px"
                  _focus={{ outline: 0 }}
                  _hover={{ boxShadow: 'xl' }}
                  rounded="2xl"
                  {...props}
                />
              </Tooltip>
            </Box>
          )}
        </Box>
      </PopoverTrigger>
      <PopoverContent
        bg="gray.50"
        shadow="2xl"
        _dark={{ bg: 'gray.700' }}
        _focus={{ boxShadow: 'none', outline: 'none' }}
      >
        <PopoverArrow />
        <PopoverCloseButton mt="6px" />
        <PopoverHeader py="3">
          <Heading
            fontSize="md"
            letterSpacing="-0.9px"
            textAlign="center"
            fontWeight="700"
            variant="main"
          >
            {label}
          </Heading>
        </PopoverHeader>
        <PopoverBody p="0">
          {typeof children === 'function' ? children(close) : children}
        </PopoverBody>
      </PopoverContent>
    </ChakPopover>
  );
};

export default Popover;
