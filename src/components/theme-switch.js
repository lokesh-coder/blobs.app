import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react"
import React from "react"
export default function ThemeSwitch() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon)
  return (
    <Button
      leftIcon={<ToggleIcon fontSize="18px" />}
      variant="ghost"
      aria-label="Toggle Theme"
      onClick={toggleMode}
      fontWeight="normal"
      fontSize="sm"
      color="gray.400"
    >
      switch theme
    </Button>
  )
}
