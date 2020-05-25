import React, { useState } from "react";

export default function Copy({ label = "Copy", text }) {
  const [isCopied, setStatus] = useState(false);
  const copyToClipboard = (str) => {
    setStatus(true);
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setTimeout(() => {
      setStatus(false);
    }, 700);
  };
  return (
    <div
      className="font-medium leading-none cursor-pointer text-gray-500 hover:bg-gray-300 hover:text-gray-600 p-2 rounded-md flex items-center"
      onClick={() => copyToClipboard(text)}
    >
      <i
        className={`${
          isCopied ? "ri-check-fill" : "ri-file-copy-2-line"
        } text-lg mr-1`}
      ></i>{" "}
      <span>{isCopied ? "Copied!" : label}</span>
    </div>
  );
}
