import React from "react";
import { view } from "@risingstack/react-easy-state";
import { appStore } from "../store";

const Blob = view(() => {
  const size = appStore.size;
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      width={`100%`}
      id="blobSvg"
    >
      <path id="blob" d={appStore.path} />
    </svg>
  );
});

export default Blob;
