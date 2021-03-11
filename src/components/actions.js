import React, { useEffect, useState } from "react"
import { Container, Box, Button, HStack } from "@chakra-ui/react"
import { FlutterIcon, HtmlIcon } from "./icons"
import RandomizerBtn from "./randomizer-btn"
import Modal from "./Common/Modal"
import HtmlCodeModalButton from "./Settings/HtmlCodeModalButton"
import { dynamic } from "../state"
import FlutterCodeModalButton from "./Settings/FlutterCodeModalButton"

const Actions = () => {
  return (
    <Box mt="10">
      <Container centerContent maxW="sm">
        <HStack spacing="24px">
          <HtmlCodeModalButton />
          <RandomizerBtn />
          <FlutterCodeModalButton />
        </HStack>
      </Container>
    </Box>
  )
}

export default dynamic(Actions)
