import React from "react";
import { view } from "@risingstack/react-easy-state";
import Button from "../common/button";
import { appStore } from "../../store";
import { generator } from "../../services/generator";
import animator from "../../services/animator";

const Randomizer = view(() => {
  const changeBlob = () => {
    const svgPath = generator({
      edges: appStore.edges,
      growth: appStore.growth,
      size: appStore.size,
    });
    appStore.path = svgPath;
  };
  changeBlob();
  return <Button label="Randomizer" onClick={changeBlob} />;
});
export default Randomizer;
