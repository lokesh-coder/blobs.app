import React from "react";
import { view } from "@risingstack/react-easy-state";
import { appStore } from "../store";

const Blob = view(() => {
  const size = appStore.size;
  let props = {
    fill: appStore.color,
  };
  if (appStore.type == "gradient") {
    props.fill = "url(#gradient)";
  }
  if (appStore.stroke) {
    props.strokeWidth = "7px";
    props.fill = "none";
    props.stroke = appStore.color;
  }
  if (appStore.type == "gradient" && appStore.stroke) {
    props.stroke = "url(#gradient)";
  }
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      width={`100%`}
      id="blobSvg"
    >
      {appStore.type == "gradient" && (
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: appStore.gradient[0] }} />
            <stop offset="100%" style={{ stopColor: appStore.gradient[1] }} />
          </linearGradient>
        </defs>
      )}
      <path id="blob" d={appStore.path} {...props} />
    </svg>
  );
});

export default Blob;
