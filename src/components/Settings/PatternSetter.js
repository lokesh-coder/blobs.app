import React, { useState } from "react"
import { dynamic } from "../../state"
import Popover from "../Common/Popover"
import { Box, Text } from "@chakra-ui/react"
import * as Patterns from "../../patterns"

const PatternBox = ({ meta, clickHandler, isSelected }) => {
  console.log("meta", meta.path)
  return (
    <Box
      as="button"
      w="60px"
      h="60px"
      mr="3"
      rounded="lg"
      borderColor={isSelected ? "gray.800" : "gray.400"}
      borderWidth="2px"
      _focus={{ outline: 0 }}
      backgroundSize="7px"
      backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${meta.width}' height='${meta.height}' viewBox='0 0 ${meta.width} ${meta.height}'%3E%3Cg fill='%234A5568' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='${meta.path}'/%3E%3C/g%3E%3C/svg%3E")`}
      onClick={() => clickHandler(meta.name)}
    ></Box>
  )
}

const PatternSetter = ({ pattern, switchToPattern }) => {
  return (
    <Popover props={{ bg: "red" }} label="Set image">
      <Box>
        <Text>Select Pattern</Text>
        {Object.keys(Patterns).map(name => {
          return (
            <PatternBox
              meta={Patterns[name]}
              clickHandler={switchToPattern}
              isSelected={pattern === name}
            />
          )
        })}
      </Box>
    </Popover>
  )
}

export default dynamic(PatternSetter, ["pattern", "type"])
