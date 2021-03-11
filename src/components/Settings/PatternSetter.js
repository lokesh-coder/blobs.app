import React, { useState } from "react"
import { dynamic } from "../../state"
import Popover from "../Common/Popover"
import { Box, Text, useColorModeValue } from "@chakra-ui/react"
import * as Patterns from "../../patterns"
import Ding from "../Common/Ding"
import { PatternIcon } from "../icons"

const PatternBox = ({ meta, clickHandler, isSelected }) => {
  const patternBg = useColorModeValue("A0AEC0", "4A5568")
  return (
    <Box
      as="button"
      w="60px"
      h="60px"
      mr="3"
      rounded="lg"
      borderColor={isSelected ? "primary" : "gray.400"}
      borderWidth="2px"
      _focus={{ outline: 0 }}
      backgroundSize="7px"
      backgroundColor="gray.100"
      _dark={{
        backgroundColor: "gray.500",
        borderColor: isSelected ? "primary" : "gray.600",
      }}
      backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${
        meta.width
      }' height='${meta.height}' viewBox='0 0 ${meta.width} ${
        meta.height
      }'%3E%3Cg fill='%23${
        isSelected ? "d7819b" : patternBg
      }' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='${
        meta.path
      }'/%3E%3C/g%3E%3C/svg%3E")`}
      onClick={() => clickHandler(meta.name)}
    ></Box>
  )
}

const PatternSetter = ({ type, pattern, switchToPattern }) => {
  const Picker = () => {
    const { width = "", height = "", path = "" } = Patterns[pattern] || {}
    return (
      <Ding
        label="Pattern"
        Icon={PatternIcon}
        isSelected={type === "pattern"}
        activeComp={
          <Box
            p="4px"
            w="full"
            h="3px"
            backgroundSize="7px"
            backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Cg fill='%23d1d8e0' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='${path}'/%3E%3C/g%3E%3C/svg%3E")`}
          ></Box>
        }
      />
    )
  }

  return (
    <Popover props={{ bg: "red" }} label="Set pattern" trigger={<Picker />}>
      <Box p="3">
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
