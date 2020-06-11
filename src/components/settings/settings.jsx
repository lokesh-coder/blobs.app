import React from "react";
import SettingsItem from "../common/settingsItem";
import EdgesSlider from "./edgesSlider";
import GrowthSlider from "./growthSlider";
import Links from "./links";
import ColorPicker from "./colorPicker";
import GradientPicker from "./gradientPicker";
import Stroke from "./stroke";

export default function Settings() {
  const edgeInfo =
    "Total nodes to create a shape. Increasing this value will add complexity to the shape";
  const growthInfo =
    "Minimum size of the blob in percentage. More the smaller more the randomness";
  return (
    <div>
      <SettingsItem label="Randomness" info={growthInfo}>
        <GrowthSlider />
      </SettingsItem>
      <SettingsItem label="Complexity" info={edgeInfo}>
        <EdgesSlider />
      </SettingsItem>

      <div className="flex justify-center mt-3">
        <ColorPicker />
        <div className="w-6"></div>
        <GradientPicker />
        <div className="w-6"></div>
        <Stroke />
      </div>
      <Links />
    </div>
  );
}
