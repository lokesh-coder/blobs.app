import React from "react";

export default function Download({ content, filename }) {
  const downloadFile = () => {
    const url = window.URL.createObjectURL(new Blob([content]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
  };
  return (
    <div
      className="font-medium leading-none cursor-pointer text-gray-500 hover:bg-gray-300 hover:text-gray-600 p-2 rounded-md flex items-center"
      onClick={() => downloadFile()}
    >
      <i className="ri-download-line text-lg mr-1"></i> <span>Download</span>
    </div>
  );
}
