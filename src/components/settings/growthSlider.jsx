import React from "react";
import { Slider } from "antd";
import { appStore } from "../../store";

export default function GrowthSlider() {
  return (
    <Slider
      defaultValue={7}
      min={2}
      max={9}
      included={false}
      reverse
      onAfterChange={(value) => {
        appStore.growth = value;
      }}
    />
  );
}
