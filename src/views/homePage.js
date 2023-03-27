import React from "react";
import "../styles/general.css";
import LogoContent from "../assets/logo-content.png";
export default function homePage() {
  return (
    <div>
      {" "}
      <div className="relative isolate  pt-24 lg:px-8 bg-slate-800 mb-32 height-div">
        <div className=" p-2 ">
          <div className=" sm:mb-8 sm:flex sm:justify-center">
            <div class="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
              <div>
                <h3 className="text-white text-3xl recursived-div">
                  Legal services for your SME with the costs you are looking for
                  | CES Legal
                </h3>
                <button className="border-full border-white text-white px-6 py-2 border-2 rounded-full">
                Contacto
                </button>
              </div>

              <div>
                <img src={LogoContent} className="img-content"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*   <div class="grid grid-cols-2 gap-4 background-principa">
  <div>01</div>

  <div>09</div>
</div> */}
    </div>
  );
}
