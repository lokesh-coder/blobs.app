import React from "react"
import { Box, Divider, HStack } from "@chakra-ui/react"

import RandomnessSlider from "./Settings/RandomnessSlider"
import ComplexitySlider from "./Settings/ComplexitySlider"
import SolidColorPicker from "./Settings/SolidColorPicker"
import GradientColorsPicker from "./Settings/GradientColorsPicker"
import OutlineToggleButton from "./Settings/OutlineToggleButton"
import ImageSetter from "./Settings/ImageSetter"
import PatternSetter from "./Settings/PatternSetter"
import Ding from "./Common/Ding"
import {
  PaintIcon,
  PaletteIcon,
  PatternIcon,
  OutlineIcon,
  ImageIcon,
  LandscapeIcon,
} from "./icons"
import { CheckCircleIcon } from "@chakra-ui/icons"

const Settings = () => {
  return (
    <Box p="10">
      <RandomnessSlider />
      <ComplexitySlider />
      <HStack justifyContent="center" alignItems="center">
        <SolidColorPicker />
        <GradientColorsPicker />
        <OutlineToggleButton />
        <ImageSetter />
        <PatternSetter />
      </HStack>
      <Divider my="5" />
      <Box>
        <HStack justifyContent="center" alignItems="center">
          <Ding
            label="Color"
            Icon={PaintIcon}
            isSelected={false}
            activeComp={<Box p="4px" rounded="2xl" bg="red.500" w="1px"></Box>}
          />
          <Ding
            label="Gradient"
            Icon={PaletteIcon}
            isSelected={true}
            activeComp={
              <Box
                p="4px"
                rounded="2xl"
                bg="red.500"
                w="full"
                bgGradient={`linear(to-r, #eecda3, #ef629f)`}
              ></Box>
            }
          />
          <Ding
            label="Patterns"
            Icon={PatternIcon}
            isSelected={false}
            activeComp={
              <Box
                p="4px"
                w="full"
                h="3px"
                backgroundSize="7px"
                backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23d1d8e0' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`}
              ></Box>
            }
          />
          <Ding
            label="Image"
            Icon={ImageIcon}
            isSelected={false}
            activeComp={<LandscapeIcon color="gray.400" />}
          />
          <Ding
            label="Outline"
            Icon={OutlineIcon}
            isSelected={true}
            activeComp={<CheckCircleIcon fontSize="xs" color="green.500" />}
          />
        </HStack>
      </Box>
    </Box>
  )
}

export default Settings
