import React from 'react'

export default function company() {
  return (
    <div>
       <div className="bg-principal p-10 sm:p-20 mt-20">
        <span className="text-3xl block m-auto text-white text-center">
        Somos una empresa de servicios <br/> legales para PYMES | CES Legal
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2  sm:p-44">
          <div>
          <span className="text-3xl block m-auto">La misión de nuestra compañía</span>
          <p>En CES Legal nos enfocamos en prestar servicios jurídicos a través de profesionales con amplia experiencia que permitan a nuestros clientes soluciones eficaces y prácticas, siempre con el fin de evitar la mayor burocracia que sea posible, así como, la exposición a procesos judiciales extensos mediante estrategias que prevengan o disminuyan la exposición a riesgos de índole judicial</p>
          </div>{" "}
          <div>
         <p>image</p>
          </div>
        </div>
        <div>
            <span className="text-3xl block m-auto">Nuestra visión de compañía</span>
            <p>Democratizar el derecho mediante el uso de tecnología que permitan reducir los costos y automatizar los procesos jurídicos sin que por ello se sacrifique la calidad en la prestación del servicio.</p>
        </div>
    </div>
  )
}
