import React from 'react'
import "../styles/variables.css";
import "../styles/general.css";
import Company from "../assets/company.png";
export default function company() {
  return (
    <div>
       <div className="bg-principal p-10 sm:p-20 mt-20">
        <span className="text-3xl block m-auto text-white text-center font-bold">
        Somos una empresa de servicios <br/> legales para PYMES | CES Legal
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2  sm:p-28">
          <div>
          <span className="text-3xl block m-auto font-bold mb-14">La misión de nuestra compañía</span>
          <p>En CES Legal nos enfocamos en prestar servicios jurídicos a través de profesionales con amplia experiencia que permitan a nuestros clientes soluciones eficaces y prácticas, siempre con el fin de evitar la mayor burocracia que sea posible, así como, la exposición a procesos judiciales extensos mediante estrategias que prevengan o disminuyan la exposición a riesgos de índole judicial</p>
          </div>{" "}
          <div>
        <img src={Company} alt="company" className="float-right"/>
          </div>
        </div>
        <div className="bg-gray text-center py-14 sm:py-20">
          <span className="text-3xl block m-auto font-bold ">
          Nuestra visión de compañía
          </span>
          <p className="mt-6 sm:mt-14 px-2 sm:px-20">
          Democratizar el derecho mediante el uso de tecnología que permitan reducir los costos y automatizar los procesos jurídicos sin que por ello se sacrifique la calidad en la prestación del servicio.
          </p>
        </div>
    </div>
  )
}
