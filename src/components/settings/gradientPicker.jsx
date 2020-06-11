import React, { useState } from "react";
import { Popover, Input } from "antd";
import { view } from "@risingstack/react-easy-state";
import { appStore } from "../../store";
import hexValidator from "../../services/hex-validator";

const GradientPicker = view(() => {
  const [val, setVal] = useState(appStore.gradient);
  const colors = [
    ["#e96443", "#904e95"],
    ["#FF5F6D", "#FFC371"],
    ["#EECDA3", "#EF629F"],
    ["#4CA1AF", "#C4E0E5"],
    ["#c2e59c", "#64b3f4"],
    ["#3CA55C", "#B5AC49"],
  ];
  const getBgCss = (color = null) => {
    let cols = color;
    if (!cols)
      cols =
        appStore.type == "gradient"
          ? appStore.gradient
          : ["#d1d8e0", "#4a5568"];
    return {
      background: `linear-gradient(
        180deg,
        ${cols[0]} 0%,
        ${cols[1]} 100%
      )`,
    };
  };
  const content = () => {
    return (
      <div className="flex flex-col">
        <div className="flex justify-center">
          {colors.map((color, i) => {
            return (
              <div
                className="w-6 h-6 rounded-full mx-1 cursor-pointer"
                style={getBgCss(color)}
                onClick={() => {
                  setVal(color);
                  appStore.type = "gradient";
                  appStore.gradient = color;
                }}
              ></div>
            );
          })}
        </div>
        <hr className="my-4" />
        <div className="flex">
          <Input
            placeholder="#ffffff"
            className="mr-2"
            defaultValue={appStore.gradient[0]}
            value={val[0]}
            onChange={(e) => {
              setVal([e.target.value, val[1]]);
            }}
            onPressEnter={(e) => {
              if (!hexValidator(e.target.value)) return;
              appStore.gradient = val;
              appStore.type = "gradient";
            }}
          />
          <div className="w-2"></div>
          <Input
            placeholder="#ffffff"
            defaultValue={appStore.gradient[1]}
            value={val[1]}
            onChange={(e) => {
              setVal([val[0], e.target.value]);
            }}
            onPressEnter={(e) => {
              if (!hexValidator(e.target.value)) return;
              appStore.gradient = val;
              appStore.type = "gradient";
            }}
          />
        </div>
      </div>
    );
  };
  return (
    <Popover content={content} trigger="click">
      <div
        className="w-8 h-8 rounded-full cursor-pointer gradient"
        style={getBgCss()}
      ></div>
    </Popover>
  );
});

export default GradientPicker;
