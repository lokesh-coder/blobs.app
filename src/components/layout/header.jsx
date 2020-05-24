import React from "react";
import Logo from "assets/blobs_logo.png";

export default function Header() {
  return (
    <nav className="flex items-center justify-center flex-wrap p-6 my-4">
      <div className="flex items-center flex-shrink-0 mr-6 leading-none">
        <img src={Logo} width="50" />
      </div>
    </nav>
  );
}
