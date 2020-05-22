import React from "react";

export default function SettingsItem({ label, children }) {
  return (
    <div className="block w-full py-6">
      <h3>{label}</h3>
      {children}
    </div>
  );
}
