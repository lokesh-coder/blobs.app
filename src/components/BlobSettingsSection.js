import React from 'react';
import { Box, Divider, HStack } from '@chakra-ui/react';

import RandomnessSlider from './Controls/RandomnessSlider';
import ComplexitySlider from './Controls/ComplexitySlider';
import SolidColorPicker from './Controls/SolidColorPicker';
import GradientColorsPicker from './Controls/GradientColorsPicker';
import OutlineToggleButton from './Controls/OutlineToggleButton';
import ImageSetter from './Controls/ImageSetter';
import PatternSetter from './Controls/PatternSetter';

const BlobSettingsSection = () => (
  <Box px={{ lg: 10 }} py="5">
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

export default BlobSettingsSection;
