/* eslint-disable react/jsx-wrap-multilines */
import { Box, Link, Text, Button, Center, HStack } from '@chakra-ui/react';
import React from 'react';
import { dynamic } from '../state';
import Modal from './Common/Modal';
import {
  LoIcon,
  SoundIcon,
  SoundOffIcon,
  GithubIcon,
  UserIcon,
  CopyrightIcon,
  CreditsIcon,
} from './Common/Icons';
import Credits from './Misc/Credits';
import SourceCode from './Misc/SourceCode';
import ThemeSwitch from './ThemeSwitch';

const Footer = ({ toggleSound, playSound }) => (
  <Center my="6">
    <HStack
      spacing="10px"
      fontSize="sm"
      flexDirection={{ base: 'column-reverse', lg: 'row' }}
    >
      <Button
        variant="silent"
        leftIcon={<CopyrightIcon fontSize="lg" />}
        aria-label="Toggle Theme"
      >
        Copyright 2021
      </Button>

      <Modal
        title="Source code & Libraries"
        size="md"
        src={
          <Button
            variant="silent"
            leftIcon={<GithubIcon fontSize="lg" />}
            aria-label="Source code"
          >
            Source code
          </Button>
        }
      >
        <Box>
          <SourceCode />
        </Box>
      </Modal>

      <Modal
        title="Credits"
        size="md"
        src={
          <Button
            variant="silent"
            leftIcon={<CreditsIcon fontSize="lg" />}
            aria-label="Credits"
          >
            Credits
          </Button>
        }
      >
        <Box>
          <Credits />
        </Box>
      </Modal>
      <LoIcon />
      <Button
        variant="silent"
        leftIcon={<UserIcon fontSize="lg" />}
        aria-label="Lokesh Rajendran"
        target="_blank"
        as={Link}
        href="https://twitter.com/lokesh_coder"
      >
        lokesh_coder
      </Button>
      <Button
        variant="silent"
        leftIcon={(() => {
          if (!playSound) return <SoundOffIcon fontSize="lg" />;
          return <SoundIcon fontSize="lg" />;
        })()}
        aria-label="Toggle Theme"
        onClick={toggleSound}
      >
        Toggle sound
      </Button>
      <Box as={Text}>
        <ThemeSwitch />
      </Box>
    </HStack>
  </Center>
);

export default dynamic(Footer, ['playSound']);
