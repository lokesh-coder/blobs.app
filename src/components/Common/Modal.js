import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Modal as ChakModal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Heading,
  Divider,
} from '@chakra-ui/react';
import React from 'react';

const Modal = ({ title, src, children, actions, size = '2xl' }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box onClick={onOpen}>{src}</Box>
      <ChakModal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="scale"
        size={size}
        autoFocus={false}
        returnFocusOnClose={false}
      >
        <ModalOverlay background="rgba(78,86,107,0.71)" />
        <ModalContent>
          <ModalHeader px={{ base: '2', lg: '10' }}>
            <Flex align="center">
              <Flex
                direction={{ base: 'column', lg: 'row' }}
                align="center"
                justify={{ base: 'center', lg: 'space-between' }}
                flex="1"
              >
                <Heading fontSize="xl" variant="main">
                  {title}
                </Heading>
                <Box>{actions}</Box>
              </Flex>
              <Button
                onClick={onClose}
                variant="subtle"
                pos="relative"
                right={{ base: '0', lg: '-20px' }}
              >
                <CloseIcon />
              </Button>
            </Flex>
          </ModalHeader>
          <Divider />
          <ModalBody py="5" px="10">
            {typeof children === 'function' ? children() : children}
          </ModalBody>
        </ModalContent>
      </ChakModal>
    </>
  );
};

export default Modal;
