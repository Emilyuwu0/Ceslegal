import React from "react";
import "../styles/variables.css";
import { Tab } from "@headlessui/react";
import { commerciaLaw ,laborLaw} from "../data/briefcase";
import CommentWithPagination from "../components/pagination/commentPagination";

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
        {/*   <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2  sm:p-28">
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
        </div> */}
        {/* Tabs */}
        <div className="m-auto block text-center mt-14 mb-4">
          <Tab.Group>
            <Tab.List>
              <Tab className="bg-red py-2 px-2 rounded-lg text-white mr-0 sm:mr-8 mb-4 sm:0 font-bold hover:bg-pink-700">
                Portafolio jurídico - derecho comercial
              </Tab>
              <Tab className="bg-white border-2 border-black py-2 px-2 rounded-lg text-black font-bold hover:bg-slate-200">
                Portafolio jurídico - derecho laboral
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-8">
              <Tab.Panel><CommentWithPagination data={commerciaLaw}/> 
                   </Tab.Panel>
              <Tab.Panel><CommentWithPagination data={laborLaw} /> </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
   
        </div>

     
      </div>
    </div>
  );
}
