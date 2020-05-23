import React from "react";
import SVGCopy from "./svgCopy";
import FlutterCopy from "./flutterCopy";
import Randomizer from "./randomizer";

export default function ActionBar(onClick) {
  return (
    <div className="flex justify-center">
      <SVGCopy />
      <Randomizer />
      <FlutterCopy />
    </div>
  );
}
