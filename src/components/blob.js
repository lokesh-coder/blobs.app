import { Flex, Spinner } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import * as Patterns from "../patterns"
import LoadingImg from "/assets/loadingimg.png"

const Blob = ({
  size,
  isOutline,
  type,
  svgPath,
  color,
  colors,
  image,
  pattern,
}) => {
  console.log("LoadingImg", LoadingImg)
  const ref = useRef(null)
  const [imgLoaded, setImgLoaded] = useState(false)

  let props = {
    fill: color,
  }
  if (type == "gradient") {
    props.fill = "url(#gradient)"
  }
  if (isOutline) {
    props.strokeWidth = "7px"
    props.fill = "none"
    props.stroke = color
  }
  if (type == "gradient" && isOutline) {
    props.stroke = "url(#gradient)"
  }
  if (!svgPath)
    return (
      <Flex justify="center" alignItems="center" h="100%">
        <Spinner />
      </Flex>
    )

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={`100%`}
      id="blobSvg"
      ref={ref}
    >
      {type == "solid" && <path id="blob" d={svgPath} {...props} />}
      {type == "gradient" && (
        <>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: colors[0] }} />
              <stop offset="100%" style={{ stopColor: colors[1] }} />
            </linearGradient>
          </defs>
          <path id="blob" d={svgPath} {...props} />
        </>
      )}
      {type == "pattern" && (
        <>
          <defs>
            <pattern
              id="pattern"
              x="0"
              y="0"
              width={Patterns[pattern].width}
              height={Patterns[pattern].height}
              patternUnits="userSpaceOnUse"
              fill="#d1d8e0"
            >
              <path d={Patterns[pattern].path}></path>
            </pattern>
          </defs>
          <path id="blob" d={svgPath} {...props} fill="url(#pattern)" />
        </>
      )}

      {type == "image" && (
        <>
          <defs>
            <clipPath id="shape">
              <path id="blob" d={svgPath} {...props} />
            </clipPath>
          </defs>
          {!imgLoaded && (
            <image
              x="0"
              y="0"
              width="100%"
              height="100%"
              clipPath="url(#shape)"
              xlinkHref={LoadingImg}
              preserveAspectRatio="none"
            ></image>
          )}
          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            clipPath="url(#shape)"
            xlinkHref={image}
            preserveAspectRatio="none"
            onLoad={() => {
              setImgLoaded(true)
            }}
          ></image>
        </>
      )}
    </svg>
  )
}

export default Blob
