import { Box, Tooltip } from "@chakra-ui/react"
import React from "react"
import { dynamic } from "../../state"

const OutlineToggleButton = ({ isOutline, toggleOutline }) => {
  const label = "Toggle outline"
  return (
    <Box>
      <Tooltip label={label} aria-label={label} hasArrow rounded="md">
        <Box
          as="button"
          p="3px"
          rounded="2xl"
          borderWidth="4px"
          borderColor="#d1d8e0"
          _focus={{ outline: 0 }}
          _hover={{ boxShadow: "xl" }}
          onClick={toggleOutline}
        >
          <Box
            as="div"
            p="8px"
            rounded="2xl"
            bg={isOutline ? "#4a5568" : "transparent"}
          ></Box>
        </Box>
      </Tooltip>
    </Box>
  )
}

export default dynamic(OutlineToggleButton, ["isOutline"])
