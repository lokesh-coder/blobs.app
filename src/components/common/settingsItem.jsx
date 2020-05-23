import React from "react";

export default function SettingsItem({ label, children }) {
  return (
    <div className="block w-full py-6">
      <div className="flex justify-between">
        <h3>{label}</h3>
        <i className="ri-question-line"></i>
      </div>
      {children}
    </div>
  );
}
