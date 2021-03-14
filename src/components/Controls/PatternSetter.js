/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { dynamic } from '../../state';
import Popover from '../Common/Popover';
import * as Patterns from '../../patterns';
import Ding from '../Common/Ding';
import { PatternIcon } from '../Common/Icons';

const PatternBox = ({ meta, clickHandler, isSelected }) => {
  const patternBg = useColorModeValue('A0AEC0', '4A5568');
  return (
    <Box
      as="button"
      w="60px"
      h="60px"
      mr="3"
      rounded="lg"
      borderColor={isSelected ? 'primary' : 'gray.400'}
      borderWidth="2px"
      _focus={{ outline: 0 }}
      backgroundSize="50%"
      backgroundColor="gray.100"
      backgroundPosition="center"
      _dark={{
        backgroundColor: 'gray.500',
        borderColor: isSelected ? 'primary' : 'gray.600',
      }}
      backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${
        meta.width
      }' height='${meta.height}' viewBox='0 0 ${meta.width} ${
        meta.height
      }'%3E%3Cg fill='%23${
        isSelected ? 'd7819b' : patternBg
      }' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='${
        meta.path
      }'/%3E%3C/g%3E%3C/svg%3E")`}
      onClick={() => clickHandler(meta.name)}
    />
  );
};

const PatternSetter = ({ type, pattern, switchToPattern }) => {
  const Picker = () => {
    const { width = '', height = '', path = '' } = Patterns[pattern] || {};
    return (
      <Ding
        label="Pattern"
        Icon={PatternIcon}
        isSelected={type === 'pattern'}
        activeComp={
          <Box
            p="4px"
            w="full"
            h="3px"
            backgroundSize="100%"
            backgroundRepeat="repeat"
            backgroundPosition="center"
            backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Cg fill='%23d7819b' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='${path}'/%3E%3C/g%3E%3C/svg%3E")`}
          />
        }
      />
    );
  };

  const Content = ({ close }) => (
    <Box p="3">
      {Object.keys(Patterns).map((name) => (
        <PatternBox
          key={name}
          meta={Patterns[name]}
          clickHandler={(value) => {
            switchToPattern(value);
            close();
          }}
          isSelected={pattern === name}
        />
      ))}
    </Box>
  );

  return (
    <Popover props={{ bg: 'red' }} label="Set pattern" trigger={<Picker />}>
      {(close) => <Content close={close} />}
    </Popover>
  );
};

export default dynamic(PatternSetter, ['pattern', 'type']);
