import { CheckCircleIcon } from "@chakra-ui/icons"
import { Box, Tooltip } from "@chakra-ui/react"
import React from "react"
import { dynamic } from "../../state"
import Ding from "../Common/Ding"
import { OutlineIcon } from "../icons"

const OutlineToggleButton = ({ isOutline, toggleOutline }) => {
  return (
    <Ding
      label="Outline"
      Icon={OutlineIcon}
      isSelected={isOutline === true}
      activeComp={<CheckCircleIcon fontSize="xs" color="green.500" />}
      onClick={toggleOutline}
    />
  )
}

export default dynamic(OutlineToggleButton, ["isOutline"])
