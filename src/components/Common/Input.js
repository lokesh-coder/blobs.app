import { Box, Input as ChakInput } from "@chakra-ui/react"
import React from "react"
import { validateHex } from "../../utilities"

const Input = ({ value, onEnter }) => {
  return (
    <Box key={value}>
      <ChakInput
        variant="filled"
        placeholder="#000000"
        defaultValue={value}
        onKeyDown={e => {
          if (e.code != "Enter") return
          if (!validateHex(e.target.value)) return
          onEnter(e.target.value)
        }}
      />
    </Box>
  )
}

export default Input
