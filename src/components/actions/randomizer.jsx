import React from "react";
import { view } from "@risingstack/react-easy-state";
import Button from "../common/button";
import { appStore } from "../../store";
import { generator } from "../../services/generator";
import animator from "../../services/animator";

const Randomizer = view(() => {
  const changeBlob = () => {
    const { path, id } = generator({
      edges: appStore.edges,
      growth: appStore.growth,
      size: appStore.size,
    });
    appStore.path = path;
    appStore.id = id;
  };
  changeBlob();
  return <Button label="Change" onClick={changeBlob} />;
});
export default Randomizer;
