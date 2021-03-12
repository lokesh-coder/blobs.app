import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export default function ThemeSwitch() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon);
  return (
    <Button
      leftIcon={<ToggleIcon fontSize="18px" />}
      variant="silent"
      aria-label="Toggle Theme"
      onClick={toggleMode}
    >
      Switch theme
    </Button>
  );
}
