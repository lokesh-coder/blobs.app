import { Button } from "@chakra-ui/react"
import React from "react"
import { dynamic } from "../../state"
import { saveBlobDataLocally } from "../../utilities"

const SaveBlobButton = props => {
  return (
    <Button
      onClick={() => {
        saveBlobDataLocally({ ...props, id: Date.now() })
      }}
    >
      Save blobs
    </Button>
  )
}

export default dynamic(SaveBlobButton, [
  "edges",
  "growth",
  "svgPath",
  "seed",
  "color",
  "type",
  "colors",
  "isOutline",
  "image",
  "pattern",
])
