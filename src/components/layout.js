import React from "react";
import Header from "./principal/header";
import Footer from "./principal/footer";
export default function layout({ children }) {
  return (
    <div>
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div>{children}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
