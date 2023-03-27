import React from "react";
import Logo from "../../assets/logo.png";
export default function footer() {
  return (
    <div>
      <footer className="bg-slate-400" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pt-10 lg:px-8 lg:pt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <img src={Logo} className="ml-0 sm:-ml-8" />
              <span className="font-size-paragraphs w-20">
                Si quieres conocer nuestra forma de trabajo y los costos de
                nuestros servicios, diligencia este formulario para que uno...
              </span>
            </div>
            <div className="pt-10 pl-4 pr-4">
              <span className="font-bold text-xl mb-6 block text-center">
                Enlaces rápidos
              </span>
              <div className="grid grid-cols-2 gap-4 ">
                <div>
                  <ul>
                    <li className="mb-4">
                      <span>Inicio</span>
                    </li>
                    <li className="mb-4">
                      <span>Trayectoria</span>
                    </li>
                    <li className="mb-4">
                      <span>El equipo</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className="mb-4">La compañía</li>
                    <li className="mb-4">Portafolio</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-10 pl-4 pr-4">
              <span className="font-bold text-xl mb-6 block text-center">
                Suscríbase ahora
              </span>
              <ul className="mb-8">
                <li>
                  {" "}
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nombre
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      className="mb-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </li>
                <li>
                  {" "}
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="you@example.com"
                    />
                  </div>
                </li>
              </ul>
              <button className="principal-color">Suscríbase ahora</button>
            </div>
          </div>
        </div>{" "}
        <div className="bg-slate-700 p-6 text-center italic">
          Derechos de autor 2023 | CES Legal Digital
        </div>
      </footer>
    </div>
  );
}
