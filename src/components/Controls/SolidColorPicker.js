import React from 'react';
import { Box, Divider } from '@chakra-ui/react';
import { dynamic } from '../../state';
import Pallette from '../Common/Pallette';
import Popover from '../Common/Popover';
import Input from '../Common/Input';
import Ding from '../Common/Ding';
import { PaintIcon } from '../Common/Icons';

const defaultColors = [
  '#00cec9',
  '#fab1a0',
  '#fdcb6e',
  '#fd79a8',
  '#a29bfe',
  '#B53471',
];

const SolidColorPicker = ({ type, color, switchToSolidColor }) => {
  const Picker = () => (
    <Ding
      label="Color"
      Icon={PaintIcon}
      isSelected={type === 'solid'}
      activeComp={<Box p="4px" rounded="2xl" bg={color} w="1px" />}
    />
  );

  const Content = ({ close }) => {
    const selectAndClose = (value) => {
      switchToSolidColor(value);
      close();
    };
    return (
      <Box>
        <Pallette onClick={selectAndClose} colors={defaultColors} />
        <Divider mb="4" />
        <Box p="3" pt="0">
          <Input value={color} onEnter={selectAndClose} />
        </Box>
      </Box>
    );
  };

  return (
    <Popover props={{ bg: color }} label="Choose a color" trigger={<Picker />}>
      {(close) => <Content close={close} />}
    </Popover>
  );
};

export default dynamic(SolidColorPicker, ['color', 'type']);
