import { AtSignIcon } from "@chakra-ui/icons"
import {
  Box,
  Container,
  Link,
  HStack,
  Text,
  Button,
  Center,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import React from "react"
import { dynamic } from "../state"
import {
  LoIcon,
  SoundIcon,
  SoundOffIcon,
  GithubIcon,
  UserIcon,
  CopyrightIcon,
  CreditsIcon,
} from "./icons"
import ThemeSwitch from "./theme-switch"

const Footer = ({ toggleSound, soundVolume }) => (
  <Center my="6">
    <HStack spacing="10px" fontSize="sm">
      <Box as={Text}>
        <Button
          variant="ghost"
          leftIcon={<CopyrightIcon fontSize="18px" />}
          aria-label="Toggle Theme"
          onClick={() => {}}
          fontWeight="normal"
          fontSize="sm"
          color="gray.400"
        >
          copyright 2021
        </Button>
      </Box>

      <Box as={Text}>
        <Button
          variant="ghost"
          leftIcon={<GithubIcon fontSize="18px" />}
          aria-label="Toggle Theme"
          onClick={() => {}}
          fontWeight="normal"
          fontSize="sm"
          color="gray.400"
        >
          source code
        </Button>
      </Box>
      <Box as={Text}>
        <Button
          variant="ghost"
          leftIcon={<CreditsIcon fontSize="18px" />}
          aria-label="Toggle Theme"
          onClick={() => {}}
          fontWeight="normal"
          fontSize="sm"
          color="gray.400"
        >
          credits
        </Button>
      </Box>
      <LoIcon />
      <Box as={Text}>
        <Button
          variant="ghost"
          leftIcon={<UserIcon fontSize="18px" />}
          aria-label="Toggle Theme"
          onClick={() => {}}
          fontWeight="normal"
          fontSize="sm"
          color="gray.400"
        >
          lokesh_coder
        </Button>
      </Box>
      <Box as={Text}>
        <Button
          variant="ghost"
          leftIcon={(() => {
            if (soundVolume == 0) return <SoundOffIcon fontSize="18px" />
            return <SoundIcon fontSize="18px" />
          })()}
          aria-label="Toggle Theme"
          onClick={toggleSound}
          fontWeight="normal"
          fontSize="sm"
          color="gray.400"
        >
          toggle sound
        </Button>
      </Box>
      <Box as={Text}>
        <ThemeSwitch />
      </Box>
    </HStack>
  </Center>
)

export default dynamic(Footer, ["soundVolume"])
