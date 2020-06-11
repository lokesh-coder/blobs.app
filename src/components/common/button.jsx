import React from "react";
import { Tooltip } from "antd";

export default function Button({
  label,
  onClick,
  children,
  tooltipText,
  isPrimary = true,
}) {
  let classNames = "";
  if (isPrimary) {
    classNames = "shadow-lg bg-theme-400 text-white hover:bg-theme-900";
  } else {
    classNames = "text-theme-600";
  }
  return (
    <Tooltip title={tooltipText}>
      <button
        className={`px-6 py-3 rounded-md text-base font-medium focus:outline-none mx-2  ${classNames}`}
        onClick={onClick}
      >
        {label || children}
      </button>
    </Tooltip>
  );
}
