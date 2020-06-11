import React from "react";
import Header from "./header";
import Footer from "./footer";
import Blob from "../blob";
import ActionBar from "../actions/actionBar";
import Settings from "../settings/settings";

export default function Grid() {
  return (
    <div className="app font-body">
      <div className="flex flex-col w-full max-w-screen-xl mx-auto px-6 min-h-screen">
        <div className="md:flex flex-1">
          <div className="md:w-9/12 flex flex-col items-center justify-center">
            <div className="flex flex-1 w-full justify-center flex-col">
              <div className="flex flex-col items-center">
                <div className="block md:hidden">
                  <Header />
                </div>
                <Blob />
                <div className="py-10">
                  <ActionBar />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-3/12 flex items-center">
            <div className="flex-1">
              <div className="hidden md:block">
                <Header />
              </div>
              <Settings />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
