import React from "react";
import { Slider } from "antd";
import { appStore } from "../../store";

export default function EdgesSlider() {
  return (
    <Slider
      defaultValue={6}
      min={3}
      max={20}
      included={false}
      onAfterChange={(value) => {
        appStore.edgesPrev = appStore.edges;
        setTimeout(() => {
          appStore.edges = value;
        }, 10);
      }}
    />
  );
}
