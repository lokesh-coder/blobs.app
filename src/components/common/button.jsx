import React from "react";

export default function Button({ label, onClick }) {
  return (
    <button
      className="bg-theme-900 text-white px-6 py-3 rounded-md text-base font-medium focus:outline-none hover:bg-theme-400 mx-2"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
