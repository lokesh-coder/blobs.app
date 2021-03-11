import React, { useEffect } from "react"
import { Button } from "@chakra-ui/react"
import useSound from "use-sound"
import boopSfx from "/assets/spring.mp3"

import { createRandomBlob } from "../utilities"
import { dynamic } from "../state"

const RandomizerBtn = ({ soundVolume }) => {
  const [play] = useSound(boopSfx, { volume: soundVolume })
  return (
    <Button
      onClick={() => {
        play()
        createRandomBlob()
      }}
      variant="main"
    >
      Change blob
    </Button>
  )
}
export default dynamic(RandomizerBtn, ["soundVolume"])
