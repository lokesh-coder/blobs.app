import React from "react";
import Header from "./header";
import Footer from "./footer";
import Blob from "../blob";
import ActionBar from "../actions/actionBar";
import Settings from "../settings/settings";

export default function Grid() {
  return (
    <div className="app bg-gray-100">
      <div className="flex flex-col w-full max-w-screen-xl mx-auto px-6 min-h-screen">
        <Header />
        <div className="flex flex-1">
          <div className="w-9/12 flex flex-col items-center justify-center">
            <div>
              <Blob />
              <div className="py-10">
                <ActionBar />
              </div>
            </div>
          </div>
          <div className="w-3/12 flex items-center">
            <div className="flex-1">
              <Settings />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
