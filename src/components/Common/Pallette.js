import { Box, Flex } from "@chakra-ui/react"
import React from "react"

const Pallette = ({ onClick, colors }) => {
  const isGradient = colors[0].length == 2
  let colorProps = color => ({ bg: color })
  if (isGradient) {
    colorProps = ([startCol, endCol]) => ({
      bgGradient: `linear(to-b, ${startCol}, ${endCol})`,
    })
  }

  return (
    <Flex justifyContent="space-evenly" py="4">
      {colors.map((color, i) => {
        return (
          <div key={`${color}${i}`}>
            <Box
              as="button"
              p="15px"
              rounded="2xl"
              _focus={{ outline: 0 }}
              key={i}
              onClick={() => onClick(color)}
              {...colorProps(color)}
            ></Box>
          </div>
        )
      })}
    </Flex>
  )
}

export default Pallette
