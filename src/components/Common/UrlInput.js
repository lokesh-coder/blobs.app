import { Box, Input as ChakInput } from "@chakra-ui/react"
import React from "react"
import { validateHex } from "../../utilities"

const UrlInput = ({ value, onEnter }) => {
  return (
    <Box key={value}>
      <ChakInput
        variant="filled"
        placeholder="https://someurl.png"
        defaultValue={value}
        onKeyDown={e => {
          if (e.code != "Enter") return
          console.log("")
          //   if (!validateHex(e.target.value)) return
          onEnter(e.target.value)
        }}
      />
    </Box>
  )
}

export default UrlInput
