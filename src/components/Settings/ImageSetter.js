import React, { useState } from "react"
import { dynamic } from "../../state"
import Popover from "../Common/Popover"
import Input from "../Common/Input"
import { Box, Button, Divider, Text } from "@chakra-ui/react"
import UrlInput from "../Common/UrlInput"
import Ding from "../Common/Ding"
import { ImageIcon, LandscapeIcon } from "../icons"

const ImageSetter = ({ type, image, switchToImage }) => {
  const Picker = () => (
    <Ding
      label="Image"
      Icon={ImageIcon}
      isSelected={type === "image"}
      activeComp={<LandscapeIcon color="gray.400" />}
    />
  )
  return (
    <Popover props={{ bg: "red" }} label="Set image" trigger={<Picker />}>
      <Box p="3">
        <UrlInput
          value={image}
          onEnter={url => {
            switchToImage(url)
          }}
        />
      </Box>
    </Popover>
  )
}

export default dynamic(ImageSetter, ["image", "type"])
