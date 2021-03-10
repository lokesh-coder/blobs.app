import { CloseIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Flex,
  Tooltip,
  Modal as ChakModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  CloseButton,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react"
import React from "react"

const Modal = ({ title, src, children, actions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Tooltip label={title} aria-label={title} hasArrow rounded="md">
        <Button onClick={onOpen} variant="ghost">
          {src}
        </Button>
      </Tooltip>
      <ChakModal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="scale"
        size="2xl"
        autoFocus={false}
      >
        <ModalOverlay background="rgba(78,86,107,0.71)" />
        <ModalContent>
          <ModalHeader px="10">
            <Flex justify="space-between" align="center">
              <Heading fontSize="xl" variant="main">
                {title}
              </Heading>
              <Flex>
                <Box>{actions}</Box>
                <Button onClick={onClose} variant="subtle">
                  <CloseIcon />
                </Button>
              </Flex>
            </Flex>
          </ModalHeader>
          <Divider />
          <ModalBody pt="0" px="10" pb="10">
            {typeof children === "function" ? children() : children}
          </ModalBody>
        </ModalContent>
      </ChakModal>
    </>
  )
}

export default Modal
