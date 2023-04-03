import React from "react";
import "../styles/variables.css";
import "../styles/general.css";
import Bookmark from "../assets/bookmark.svg";
import Hands from "../assets/hands.png";
import { ListTrayectory } from "../data/trayectory";

export default function trajectory() {
  return (
    <div>
      <div className="bg-principal p-10 sm:p-20 mt-20 font-bold">
        <span className="text-3xl block m-auto text-white text-center">
          Un portafolio jurídico para todas las <br /> PYMES | CES Legal
        </span>
      </div>
      <div className="mt-10">
        <span className="text-3xl m-auto block text-center font-bold">
          Breve historia de CES Legal y sus servicios legales para PYMES
        </span>
        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2  sm:p-28">
          <div>
            <span className=" py-4  block mt-2">
              {" "}
              CES Legal fue fundada en 2013 por el abogado Carlos Sampedro
              enfocada en prestar servicios legales para PYMES. Nació con el
              objetivo de proteger a las PYMES colombianas en la cotidianidad
              del desarrollo de su actividad económica. Se enfoca principalmente
              en las tres preocupaciones más relevantes para toda empresa:
            </span>
          </div>{" "}
          <div className="bg-gray  p-6 sm:p-10">
            <ul>
              {" "}
              {ListTrayectory.map((index) => (
                <li className="flex-li-book">
                  <img src={Bookmark} alt="book" />
                  <p className="text-bookmark">{index.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2  sm:p-44">
          <div>
            <img src={Hands} alt="hands" className="text-center" />
          </div>{" "}
          <div>
            <p>
              Desde su fundación, la empresa se ha enfocado en que sus clientes
              puedan tener la ayuda de los servicios legales requeridos. La
              ayuda y la vinculación de tecnología para automatización de
              procesos ha sido clave. Los servicios legales para PYMES de CES
              Legal buscan que la empresa se dedique a la operación y tercerice
              su área jurídica.
            </p>
            <p>
              Hoy en día CES Legal se proyecta como una prestadora de servicios
              jurídicos alternativos que, en conjunto con las herramientas
              tecnológicas, brinde acceso a las personas que requieran de
              servicios jurídicos en general, con costos adecuados para las
              empresas medianas y pequeñas.
              <br />
              La trayectoria de la compañía ha consolidado un equipo fuerte y
              experto, con unas soluciones especializadas para las PYME.
            </p>
          </div>
        </div>
        <div className="bg-gray text-center py-14 sm:py-20">
          <span className="text-3xl block m-auto font-bold ">
            Conoce en detalle nuestros servicios legales para PYMES
          </span>
          <p className="mt-6 sm:mt-14">
            Diligencia este formulario y te contactaremos para presentarte
            nuestras soluciones en detalle.
          </p>
        </div>
      </div>
    </div>
  );
}
