import React from 'react';
import { Box, Divider, HStack } from '@chakra-ui/react';

import RandomnessSlider from './Settings/RandomnessSlider';
import ComplexitySlider from './Settings/ComplexitySlider';
import SolidColorPicker from './Settings/SolidColorPicker';
import GradientColorsPicker from './Settings/GradientColorsPicker';
import OutlineToggleButton from './Settings/OutlineToggleButton';
import ImageSetter from './Settings/ImageSetter';
import PatternSetter from './Settings/PatternSetter';

const Settings = () => (
  <Box px="10" py="5">
    <RandomnessSlider />
    <ComplexitySlider />
    <Divider my="5" />
    <HStack justifyContent="center" alignItems="center">
      <SolidColorPicker />
      <GradientColorsPicker />
      <PatternSetter />
      <ImageSetter />
      <OutlineToggleButton />
    </HStack>
    <Divider mt="5" />
  </Box>
);

export default Settings;
