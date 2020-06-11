import React, { useState } from "react";
import { Popover, Divider, Input } from "antd";
import { view } from "@risingstack/react-easy-state";
import { appStore } from "../../store";

const Stroke = view(() => {
  return (
    <div
      className={`w-8 h-8 rounded-full cursor-pointer stroke ${
        appStore.stroke ? "stroke-fill" : ""
      }`}
      onClick={() => {
        appStore.stroke = !appStore.stroke;
      }}
    ></div>
  );
});

export default Stroke;
