import React from "react";
import "../styles/variables.css";
export default function briefcase() {
  return (
    <div>
      <div className="bg-principal p-10 sm:p-20 mt-20">
        <span className="text-3xl block m-auto text-white text-center">
          Un portafolio jurídico para todas las <br /> PYMES | CES Legal
        </span>
      </div>
      <div>
        <p className="text-center mt-10">
          CES Legal's legal portfolio of services is complete and specialized.
          We cover the areas of commercial law, labor law, civil and tax law.
        </p>
        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2  sm:p-44">
          <div>
            <button className="text-center">
              <span className="bg-red py-4 px-4">
                Portafolio jurídico - derecho comercial
              </span>
            </button>
          </div>{" "}
          <div>
            <button>Portafolio jurídico - derecho laboral</button>
          </div>
        </div>
{/* Tabs */}
        <div>
             <div> <span className="text-3xl block m-auto">Portafolio jurídico - derecho comercial</span></div>
        <div> <span className="text-3xl block m-auto">Portafolio jurídico - derecho laboral</span></div>
        </div>
       
      </div>
    </div>
  );
}
