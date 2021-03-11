import React from "react"
import { dynamic } from "../../state"
import Pallette from "../Common/Pallette"
import Popover from "../Common/Popover"
import Input from "../Common/Input"
import { Box, Divider, Flex } from "@chakra-ui/react"
import Ding from "../Common/Ding"
import { PaletteIcon } from "../icons"

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
  type,
}) => {
  const Picker = () => (
    <Ding
      label="Gradient"
      Icon={PaletteIcon}
      isSelected={type === "gradient"}
      activeComp={
        <Box
          p="4px"
          rounded="2xl"
          w="full"
          bgGradient={`linear(to-r, ${start}, ${end})`}
        ></Box>
      }
    />
  )
  return (
    <Popover
      props={{ bgGradient: `linear(to-b, ${start}, ${end})` }}
      label="Gradient colors"
      trigger={<Picker />}
    >
      <Box>
        <Pallette onClick={switchToGradientColors} colors={defaultColors} />
        <Divider mb="4" />
        <Box p="3" pt="0">
          <Flex>
            <Input value={start} onEnter={updateGradientStartColor} />
            <Divider mx="2" orientation="vertical" />
            <Input value={end} onEnter={updateGradientEndColor} />
          </Flex>
        </Box>
      </Box>
    </Popover>
  )
}

export default dynamic(GradientColorsPicker, ["colors", "type"])
