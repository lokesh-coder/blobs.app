import {
  Box,
  Popover as ChakPopover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@chakra-ui/react"
import React from "react"

const Popover = ({ props, children, label }) => {
  return (
    <ChakPopover autoFocus={false} isLazy>
      <PopoverTrigger>
        <Box>
          <Tooltip label={label} aria-label={label} hasArrow rounded="md">
            <Box
              as="button"
              p="15px"
              _focus={{ outline: 0 }}
              _hover={{ boxShadow: "xl" }}
              rounded="2xl"
              {...props}
            ></Box>
          </Tooltip>
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>{children}</PopoverBody>
      </PopoverContent>
    </ChakPopover>
  )
}

export default Popover
