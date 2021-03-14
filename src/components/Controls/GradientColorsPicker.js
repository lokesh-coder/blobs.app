/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Box, Divider, Flex } from '@chakra-ui/react';
import { dynamic } from '../../state';
import Pallette from '../Common/Pallette';
import Popover from '../Common/Popover';
import Input from '../Common/Input';
import Ding from '../Common/Ding';
import { PaletteIcon } from '../Common/Icons';

const defaultColors = [
  ['#e96443', '#904e95'],
  ['#ff5f6d', '#ffc371'],
  ['#eecda3', '#ef629f'],
  ['#4ca1af', '#c4e0e5'],
  ['#c2e59c', '#64b3f4'],
  ['#3ca55c', '#b5ac49'],
];

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
      isSelected={type === 'gradient'}
      activeComp={
        <Box
          p="4px"
          rounded="2xl"
          w="full"
          bgGradient={`linear(to-r, ${start}, ${end})`}
        />
      }
    />
  );
  const Content = ({ close }) => (
    <Box>
      <Pallette
        onClick={(value) => {
          switchToGradientColors(value);
          close();
        }}
        colors={defaultColors}
      />
      <Divider mb="4" />
      <Box p="3" pt="0">
        <Flex>
          <Input
            value={start}
            onEnter={(value) => {
              updateGradientStartColor(value);
              close();
            }}
          />
          <Divider mx="2" orientation="vertical" />
          <Input
            value={end}
            onEnter={(value) => {
              updateGradientEndColor(value);
              close();
            }}
          />
        </Flex>
      </Box>
    </Box>
  );
  return (
    <Popover
      props={{ bgGradient: `linear(to-b, ${start}, ${end})` }}
      label="Gradient colors"
      trigger={<Picker />}
    >
      {(close) => <Content close={close} />}
    </Popover>
  );
};

export default dynamic(GradientColorsPicker, ['colors', 'type']);
