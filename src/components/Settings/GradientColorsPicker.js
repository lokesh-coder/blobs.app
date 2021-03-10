import React from "react"
import { dynamic } from "../../state"
import Pallette from "../Common/Pallette"
import Popover from "../Common/Popover"
import Input from "../Common/Input"
import { Box, Divider, Flex } from "@chakra-ui/react"

const defaultColors = [
  ["#e96443", "#904e95"],
  ["#ff5f6d", "#ffc371"],
  ["#eecda3", "#ef629f"],
  ["#4ca1af", "#c4e0e5"],
  ["#c2e59c", "#64b3f4"],
  ["#3ca55c", "#b5ac49"],
]

const GradientColorsPicker = ({
  colors: [start, end],
  switchToGradientColors,
  updateGradientStartColor,
  updateGradientEndColor,
}) => {
  return (
    <Popover
      props={{ bgGradient: `linear(to-b, ${start}, ${end})` }}
      label="Gradient colors"
    >
      <Box>
        <Pallette onClick={switchToGradientColors} colors={defaultColors} />
        <Divider mb="4" />
        <Flex>
          <Input value={start} onEnter={updateGradientStartColor} />
          <Divider mx="2" orientation="vertical" />
          <Input value={end} onEnter={updateGradientEndColor} />
        </Flex>
      </Box>
    </Popover>
  )
}

export default dynamic(GradientColorsPicker, ["colors", "type"])
