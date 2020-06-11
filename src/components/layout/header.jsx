import React from "react";
import Logo from "assets/blobs_logo.png";

export default function Header() {
  return (
    <nav className="flex items-center justify-center flex-wrap p-6 my-4">
      <div className="flex flex-col items-center flex-shrink-0 mr-6 leading-none">
        <img src={Logo} width="50" />
        <h1 className="my-4 font-extrabold text-2xl tracking-tight text-gray-700">
          Blob generator
        </h1>
      </div>
    </nav>
  );
}
