import { Button } from "@chakra-ui/button"
import { Box, Center, Flex, Text } from "@chakra-ui/layout"
import React from "react"
import Footer from "../Footer"

const Ding = ({ isSelected, activeComp, label, Icon }) => {
  return (
    <Button
      variant="unstyled"
      p="2"
      h="auto"
      pos="relative"
      opacity={isSelected ? 1 : 0.3}
      _hover={{ opacity: 1 }}
    >
      <Flex direction="column" align="center">
        <Icon fontSize="2xl" color="gray.600" />
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
  )
}

export default Ding
