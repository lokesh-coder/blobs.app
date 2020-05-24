import React from "react";
import SettingsItem from "../common/settingsItem";
import EdgesSlider from "./edgesSlider";
import GrowthSlider from "./growthSlider";
import Links from "./links";

export default function Settings() {
  const edgeInfo =
    "Total nodes to create a shape. Increasing this value will add complexity to the shape";
  const growthInfo =
    "Minimum size of the blob in percentage. More the smaller more the randomness";
  return (
    <div>
      <SettingsItem label="Total nodes" info={edgeInfo}>
        <EdgesSlider />
      </SettingsItem>
      <SettingsItem label="Minumum growth size" info={growthInfo}>
        <GrowthSlider />
      </SettingsItem>
      <Links />
    </div>
  );
}
