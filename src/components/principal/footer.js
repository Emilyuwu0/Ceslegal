import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "../../styles/general.css";
export default function footer() {
  const navigation = [
    { name: "Inicio", to: "/" },
    { name: "Portafolio", to: "/briefcase" },
    { name: "Trayectoria", to: "/trayectory" },
    { name: "La compañía", to: "/company" },
    { name: "El equipo", to: "/team" },
  ];
  return (
    <div>
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pt-10 lg:px-8 lg:pt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <img src={Logo} className="ml-0 sm:-ml-8" alt="logo" />
              <span className="font-size-paragraphs w-20">
                Si quieres conocer nuestra forma de trabajo y los costos de
                nuestros servicios, diligencia este formulario para que uno...
              </span>
            </div>
            <div className="pt-10 pl-4 pr-4">
              <span className="font-bold text-xl mb-6 block text-center">
                Enlaces rápidos
              </span>

              <div className="grid grid-cols-2 gap-4 text-center sm:text-left">
                
                {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
     

                <div></div>
              </div>
            </div>
            <div className="pt-10 pl-4 pr-4">
              <span className="font-bold text-xl mb-6 block text-center">
                Suscríbase ahora
              </span>
              <ul className="mb-8">
                <li>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      placeholder="Nombre"
                      className="inputs-footer border-transparent focus:outline-none"
                    />
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="inputs-footer border-transparent focus:outline-none"
                      placeholder="Correo electrónico"
                    />
                  </div>
                </li>
              </ul>
              <button className="principal-color ">Suscríbase ahora</button>
            </div>
          </div>
        </div>{" "}
        <div className="bg-tertiary p-6 text-center italic">
          Derechos de autor 2023 | CES Legal Digital
        </div>
      </footer>
    </div>
  );
}
