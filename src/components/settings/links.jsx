import React from "react";

export default function Links() {
  const allLinks = [
    {
      icon: "flutter-fill",
      url: "https://pub.dev/packages/blobs",
      label: "Package",
    },
    {
      icon: "github-fill",
      url: "https://github.com/lokesh-coder/blobs.app",
      label: "Github",
    },
    {
      icon: "twitter-line",
      url:
        "http://www.twitter.com/intent/tweet?url=https://blobs.app/&text=Generate beautiful blob shapes for web and flutter apps",
      label: "Share",
    },
  ];
  return (
    <ul className="flex justify-around my-8">
      {allLinks.map((l) => {
        return (
          <li className="flex font-medium">
            <a
              href={l.url}
              className="flex justify-around text-theme-300 hover:text-theme-800 text-sm font-medium"
            >
              <i className={`ri-${l.icon} text-base mr-1`} /> {l.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
