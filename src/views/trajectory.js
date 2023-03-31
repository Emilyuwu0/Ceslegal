import React from "react";

export default function trajectory() {
  return (
    <div>
      <div className="bg-principal p-10 sm:p-20 mt-20">
        <span className="text-3xl block m-auto text-white text-center">
          Un portafolio jurídico para todas las <br /> PYMES | CES Legal
        </span>
      </div>
      <div className="mt-10">
        <span className="text-3xl m-auto block text-center">
          Breve historia de CES Legal y sus servicios legales para PYMES
        </span>
        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2  sm:p-44">
          <div>
            <span className="bg-red py-4 px-4">
              CES Legal fue fundada en 2013 por el abogado Carlos Sampedro
              enfocada en prestar servicios legales para PYMES. Nació con el
              objetivo de proteger a las PYMES colombianas en la cotidianidad
              del desarrollo de su actividad económica. Se enfoca principalmente
              en las tres preocupaciones más relevantes para toda empresa:
            </span>
          </div>{" "}
          <div>
            <ul>
              <li>Trabajadores: Las relaciones laborales</li>
              <li>Impuestos: DIAN</li>
              <li>Relaciones comerciales: Clientes y proveedores</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2  sm:p-44">
          <div>
            <p>image</p>
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
        <div>
            <span className="text-3xl block m-auto">Conoce en detalle nuestros servicios legales para PYMES</span>
            <p>Diligencia este formulario y te contactaremos para presentarte nuestras soluciones en detalle.</p>
        </div>
      </div>
    </div>
  );
}
