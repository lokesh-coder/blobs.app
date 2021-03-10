import React from "react"
import { dynamic } from "../../state"
import Pallette from "../Common/Pallette"
import Popover from "../Common/Popover"
import Input from "../Common/Input"
import { Box, Button, Divider } from "@chakra-ui/react"

const defaultColors = [
  "#00cec9",
  "#fab1a0",
  "#fdcb6e",
  "#fd79a8",
  "#a29bfe",
  "#B53471",
]

const SolidColorPicker = ({ color, switchToSolidColor }) => {
  return (
    <Popover props={{ bg: color }} label="Solid color">
      <Box>
        <Pallette onClick={switchToSolidColor} colors={defaultColors} />
        <Divider mb="4" />
        <Input value={color} onEnter={switchToSolidColor} />
      </Box>
    </Popover>
  )
}

export default dynamic(SolidColorPicker, ["color", "type"])
