import React from "react";
import Logo from "assets/blobs_logo.png";
import "./loader.scss";

export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen ">
      <img src={Logo} width={50} />
      <i className="loader ri-loader-2-fill text-3xl text-theme-300 mt-4"></i>
    </div>
  );
}
