import React from "react";
import "../styles/general.css";
import "../styles/variables.css";
import LogoContent from "../assets/logo-content.png";
import Square from "../assets/square.png";
export default function homePage() {
  return (
    <div>
      {" "}
      <div className="relative isolate  pt-24 lg:px-8 bg-principal height-div">
        <div className=" p-2 ">
          <div className=" sm:mb-8 sm:flex sm:justify-center">
            <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
              <div>
                <h3 className="text-white text-3xl recursived-div">
                  Legal services for your SME with the costs you are looking for
                  | CES Legal
                </h3>
                <a href="/contact" className="border-full border-white text-white px-6 py-2 border-2 rounded-full">
                  Contacto
                </a>
              </div>

              <div>
                <img src={LogoContent} className="img-content" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-tertiary py-4 px-16 separated-content">
        <span>
          News:
          <span>
            En CES Legal hemos diseñado un portafolio de servicios...
          </span>{" "}
        </span>
      </div>
      <div className="p-6 bg-white margin-top-description sm:p-10">
        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
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
      <div className=" sm:px-44 px-10 bg-tertiary pb-20">
        <h3 className="text-center font-bold text-2xl mb-6 pt-20">
          Ejes de valor de nuestros Servicios legales
        </h3>
        <p className="text-center">
          En CES Legal tenemos cuatro ejes de valor que hacen la diferencia en
          la prestación de nuestros servicios legales: Reducción de costos,
          especialización, tecnología y procesos. Con esto logramos democratizar
          el derecho poniéndolo al alcance de todas las PYMES.
        </p>
        <div className="grid grid-cols-1 gap-16 p-6 sm:grid-cols-2 ">
          <div>
            <div className="div-bg-one border-b border-gray-200  rounded-md h-full ">
              <div className="div-before-card">title</div>
              <div className="div-card-text p-4 mt-16 rounded-b-md">
                <h3 className=" font-bold leading-6 text-white text-xl">
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
          <div>
            {" "}
            <div>
              <div className="div-bg-two border-b border-gray-200  rounded-md h-full ">
                <div className="div-before-card">title</div>
                <div className="div-card-text p-4 mt-16 rounded-b-md">
                  <h3 className=" font-bold leading-6 text-white text-xl">
                    Reducción de costos en los Servicios legales
                  </h3>
                  <p>
                    Nuestra visión es poner al alcance de las PYMEs los
                    servicios legales que requieren. Por esto estamos
                    constantemente revisando nuestros procesos e incluyendo
                    nuevas tecnologías que permiten tener un bajo costo, pero
                    con una alta calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div>
              <div className="div-bg-three border-b border-gray-200  rounded-md h-full ">
                <div className="div-before-card">title</div>
                <div className="div-card-text p-4 mt-16 rounded-b-md">
                  <h3 className=" font-bold leading-6 text-white text-xl">
                    Reducción de costos en los Servicios legales
                  </h3>
                  <p>
                    Nuestra visión es poner al alcance de las PYMEs los
                    servicios legales que requieren. Por esto estamos
                    constantemente revisando nuestros procesos e incluyendo
                    nuevas tecnologías que permiten tener un bajo costo, pero
                    con una alta calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div>
              <div className="div-bg-four border-b border-gray-200  rounded-md h-full ">
                <div className="div-before-card">title</div>
                <div className="div-card-text p-4 mt-16 rounded-b-md">
                  <h3 className=" font-bold leading-6 text-white text-xl">
                    Reducción de costos en los Servicios legales
                  </h3>
                  <p>
                    Nuestra visión es poner al alcance de las PYMEs los
                    servicios legales que requieren. Por esto estamos
                    constantemente revisando nuestros procesos e incluyendo
                    nuevas tecnologías que permiten tener un bajo costo, pero
                    con una alta calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-principal sm:px-64 px-10 pb-20">
        <h3 className="text-center font-bold text-2xl mb-6 pt-10 sm:pt-20 text-white">
          Contáctanos
        </h3>
        <p className="text-center text-white">
          Si quieres conocer nuestra forma de trabajo y los costos de nuestros
          servicios, diligencia este formulario para que uno de nuestros
          asesores pueda agendar una cita contigo.
        </p>
        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
          <div>
            {" "}
            <div className="mb-11">
              <div className="mt-2">
                <input
                  placeholder="  Primer nombre"
                  type="name"
                  name="name"
                  id="name"
                  className="inputs-form-contacts border-transparent focus:outline-none"
                  aria-describedby="name-description"
                />
              </div>
            </div>
            <div className="mb-11">
              <div className="mt-2">
                <input
                  placeholder="   Correo electrónico"
                  type="email"
                  name="email"
                  id="email"
                  className="inputs-form-contacts border-transparent focus:outline-none"
                  aria-describedby="email-description"
                />
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="mb-11">
              <div className="mt-2">
                <input
                  placeholder="Apellido"
                  type="lastname"
                  name="lastname"
                  id="lastname"
                  className="inputs-form-contacts border-transparent focus:outline-none"
                  aria-describedby="lastname-description"
                />
              </div>
            </div>
            <div className="mb-11">
              <div className="mt-2">
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="Teléfono"
                  className="inputs-form-contacts border-transparent focus:outline-none"
                  aria-describedby="phone-description"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-20 p-4">
          <div className="mt-2 pb-10">
            <input
              placeholder="Mensaje"
              type="message"
              name="message"
              id="message"
              className="inputs-form-contacts border-transparent focus:outline-none"
              aria-describedby="message-description"
            />
          </div>
          <button className="border-full principal-color px-6 py-2 rounded-full text-center block m-auto">
            Contacto
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
