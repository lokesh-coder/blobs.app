import React from "react";

export default function Header() {
  return (
    <nav className="flex items-center justify-center flex-wrap p-6 my-10">
      <div className="flex items-center flex-shrink-0 mr-6 leading-none">
        <div className="relative">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            className="brand-bg absolute"
            style={{ marginTop: -16 }}
          >
            <path
              d="M415.5,331.5Q344,413,254,405.5Q164,398,115.5,324Q67,250,102,152Q137,54,234,81.5Q331,109,409,179.5Q487,250,415.5,331.5Z"
              fill="#cbd5e0"
            ></path>
          </svg>

          <span className="font-semibold text-xl tracking-tight relative z-10">
            blobs.app
          </span>
        </div>
      </div>
    </nav>
  );
}
