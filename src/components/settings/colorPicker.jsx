import React, { useState } from "react";
import { Popover, Divider, Input } from "antd";
import { view } from "@risingstack/react-easy-state";
import { appStore } from "../../store";
import hexValidator from "../../services/hex-validator";

const ColorPicker = view(() => {
  const [val, setVal] = useState(appStore.color);
  const colors = [
    "#00cec9",
    "#fab1a0",
    "#fdcb6e",
    "#fd79a8",
    "#a29bfe",
    "#B53471",
  ];
  const content = () => {
    return (
      <div className="flex flex-col">
        <div className="flex justify-center">
          {colors.map((color, i) => {
            return (
              <div
                className="w-6 h-6 rounded-full mx-1 cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => {
                  setVal(color);
                  appStore.type = "color";
                  appStore.color = color;
                }}
              ></div>
            );
          })}
        </div>
        <hr className="my-4" />
        <Input
          placeholder="#ffffff"
          defaultValue={appStore.color}
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
          onPressEnter={(e) => {
            if (!hexValidator(e.target.value)) return;
            setVal(e.target.value);
            appStore.type = "color";
            appStore.color = e.target.value;
          }}
        />
      </div>
    );
  };

  const getBgCss = () => {
    if (appStore.type == "color") {
      return { backgroundColor: appStore.color };
    }
    return { backgroundColor: "#d1d8e0" };
  };
  return (
    <Popover content={content} trigger="click">
      <div
        className="w-8 h-8 rounded-full cursor-pointer"
        style={getBgCss()}
      ></div>
    </Popover>
  );
});

export default ColorPicker;
