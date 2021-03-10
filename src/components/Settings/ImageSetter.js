import React, { useState } from "react"
import { dynamic } from "../../state"
import Popover from "../Common/Popover"
import Input from "../Common/Input"
import { Box, Button, Divider, Text } from "@chakra-ui/react"
import UrlInput from "../Common/UrlInput"

const ImageSetter = ({ image, switchToImage }) => {
  return (
    <Popover props={{ bg: "red" }} label="Set image">
      <Box>
        <Text>Image URL</Text>
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
