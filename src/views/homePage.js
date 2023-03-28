import React from "react";
import "../styles/general.css";
import LogoContent from "../assets/logo-content.png";
import Square from "../assets/square.png";
export default function homePage() {
  return (
    <div className=" mb-32 ">
      {" "}
      <div className="relative isolate  pt-24 lg:px-8 bg-slate-800 height-div">
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
                <img src={LogoContent} className="img-content" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-400 py-4 px-16 separated-content">
        <span>
          News:
          <span>
            En CES Legal hemos diseñado un portafolio de servicios...
          </span>{" "}
        </span>
      </div>
      <div className="p-6 bg-white margin-top-description sm:p-10">
        <div class="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
          <div>
            <img src={Square} className="m-auto square-img" />
          </div>
          <div>
            <p className="pt-20">
              En CES Legal hemos diseñado un portafolio de servicios legales al
              alcance de las PYMES en Colombia. Las empresas pequeñas y medianas
              también tienen riesgos legales que se originan en sus relaciones
              con trabajadores, la DIAN, proveedores y clientes. Con el equipo
              de CES Legal hemos diseñado servicios de alta calidad para las
              PYMES en Colombia apoyados en procesos bien diseñados. Esto nos
              permite mantener costos adecuados y un estándar de calidad
              profesional.
            </p>
          </div>
        </div>
      </div>
      <div className=" sm:px-44 px-10 mb-20">
        <h3 className="text-center font-bold text-2xl mb-6">
          Ejes de valor de nuestros Servicios legales
        </h3>
        <p className="text-center">
          En CES Legal tenemos cuatro ejes de valor que hacen la diferencia en
          la prestación de nuestros servicios legales: Reducción de costos,
          especialización, tecnología y procesos. Con esto logramos democratizar
          el derecho poniéndolo al alcance de todas las PYMES.
        </p>
        <div class="grid grid-cols-1 gap-16 p-6 sm:grid-cols-2">
          <div >
            <div className="bg-pink-300 border-b border-gray-200  rounded-md h-44 ">
              <div className="div-before-card">title</div>
              <div className="bg-purple-400 p-4 mt-16 rounded-b-md">

                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Reducción de costos en los Servicios legales
                </h3>
                <p>
                  Nuestra visión es poner al alcance de las PYMEs los servicios
                  legales que requieren. Por esto estamos constantemente
                  revisando nuestros procesos e incluyendo nuevas tecnologías
                  que permiten tener un bajo costo, pero con una alta calidad.
                </p>
              </div>
            </div>
          </div>
          <div>   <div >
           
          </div></div>
          <div>   <div >
            <div className="bg-pink-300 border-b border-gray-200  rounded-md h-44 ">
              <div className="div-before-card">title</div>
              <div className="bg-purple-400 p-4 mt-16 rounded-b-md">

                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Reducción de costos en los Servicios legales
                </h3>
                <p>
                  Nuestra visión es poner al alcance de las PYMEs los servicios
                  legales que requieren. Por esto estamos constantemente
                  revisando nuestros procesos e incluyendo nuevas tecnologías
                  que permiten tener un bajo costo, pero con una alta calidad.
                </p>
              </div>
            </div>
          </div></div>
          <div>   <div >
            <div className="bg-pink-300 border-b border-gray-200  rounded-md h-44 ">
              <div className="div-before-card">title</div>
              <div className="bg-purple-400 p-4 mt-16 rounded-b-md">

                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Reducción de costos en los Servicios legales
                </h3>
                <p>
                  Nuestra visión es poner al alcance de las PYMEs los servicios
                  legales que requieren. Por esto estamos constantemente
                  revisando nuestros procesos e incluyendo nuevas tecnologías
                  que permiten tener un bajo costo, pero con una alta calidad.
                </p>
              </div>
            </div>
          </div></div>
        </div>
      </div>

      <div className="bg-gray-400 sm:px-44 px-10">
      <h3 className="text-center font-bold text-2xl mb-6 text-white">Contáctanos</h3>
      <p className="text-center text-white">Si quieres conocer nuestra forma de trabajo y los costos de nuestros servicios, diligencia este formulario para que uno de nuestros asesores pueda agendar una cita contigo.</p>
      <div class="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">

        <div>1</div>
        <div>1</div>
      </div>
      </div>

    </div>
  );
}
