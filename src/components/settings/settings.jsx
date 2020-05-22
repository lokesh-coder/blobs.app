import React from "react";
import SettingsItem from "../common/settingsItem";
import EdgesSlider from "./edgesSlider";
import GrowthSlider from "./growthSlider";

export default function Settings() {
  return (
    <div>
      <SettingsItem label="Total nodes">
        <EdgesSlider />
      </SettingsItem>
      <SettingsItem label="Minumum growth size">
        <GrowthSlider />
      </SettingsItem>
    </div>
  );
}
