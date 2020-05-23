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
      <ul className="flex justify-around my-8">
        <li className="flex font-medium">
          <i className="ri-flutter-fill text-base mr-1" /> Package
        </li>
        <li className="flex font-medium">
          <i className="ri-github-fill text-base mr-1" /> Github
        </li>
        <li className="flex font-medium">
          <i className="ri-twitter-line text-base mr-1" />
          Share
        </li>
      </ul>
    </div>
  );
}
