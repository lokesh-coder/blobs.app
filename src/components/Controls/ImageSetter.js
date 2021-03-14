import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { dynamic } from '../../state';
import Popover from '../Common/Popover';
import UrlInput from '../Common/UrlInput';
import Ding from '../Common/Ding';
import { ImageIcon, LandscapeIcon, RightArrowIcon } from '../Common/Icons';

const ImageSetter = ({ type, image, switchToImage }) => {
  const Picker = () => (
    <Ding
      label="Image"
      Icon={ImageIcon}
      isSelected={type === 'image'}
      activeComp={<LandscapeIcon color="primary" />}
    />
  );
  const Content = ({ close }) => (
    <Box p="3" textAlign="center">
      <UrlInput
        value={image}
        onEnter={(value) => {
          switchToImage(value);
          close();
        }}
      />
    </Box>
  );
  return (
    <Popover props={{ bg: 'red' }} label="Set image" trigger={<Picker />}>
      {(close) => <Content close={close} />}
    </Popover>
  );
};

export default dynamic(ImageSetter, ['image', 'type']);
