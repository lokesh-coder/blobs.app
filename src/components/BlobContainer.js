import React, { useEffect, useState } from "react"
import { dynamic } from "../state"
import {
  animateAndUpdatePath,
  createFixedBlob,
  createInitialBlob,
  generateBlob,
  loadNewBlobDataToStore,
  loadRandomBlob,
  parseURLParams,
  setBlobTheme,
  stringifyURLParams,
} from "../utilities"
import Blob from "./blob"

const BlobContainer = props => {
  const {
    edges,
    growth,
    color,
    colors,
    type,
    isOutline,
    svgPath,
    image,
    seed,
    pattern,
    setStaticBlobData,
  } = props

  useEffect(() => {
    createInitialBlob(props)
  }, [])

  useEffect(() => {
    if (svgPath) createFixedBlob(props)
  }, [edges, growth])

  useEffect(() => {
    if (svgPath) setBlobTheme(props)
  }, [color, colors, isOutline, type])

  return <Blob {...props} />
}

export default dynamic(BlobContainer, [
  "size",
  "color",
  "colors",
  "color",
  "type",
  "isOutline",
  "svgPath",
  "edges",
  "growth",
  "seed",
  "image",
  "pattern",
])
