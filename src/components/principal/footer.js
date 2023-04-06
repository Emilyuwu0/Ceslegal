import React from "react";
import Logo from "../../assets/logo.png";
import "../../styles/general.css";
export default function footer() {
  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Portafolio", href: "/briefcase" },
    { name: "Trayectoria", href: "/trayectory" },
    { name: "La compañía", href: "/company" },
    { name: "El equipo", href: "/team" },
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

              <div>
                <ul className="grid grid-cols-2 gap-4 text-center sm:text-left">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </ul>

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
