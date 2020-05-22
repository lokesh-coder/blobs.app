import React from "react";

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 mr-6 leading-none">
        <span className="font-semibold text-xl tracking-tight">Blobs.app</span>
      </div>
      <div>
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  mr-4"
          >
            Github
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  mr-4"
          >
            Flutter package
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 "
          >
            Share
          </a>
        </div>
      </div>
    </nav>
  );
}
