import React from 'react'
import "../styles/variables.css";
import "../styles/general.css";
import Bookmark from "../assets/bookmark.svg";

export default function team() {
  return (
    <div>
          <div className="bg-principal p-10 sm:p-20 mt-20">
        <span className="text-3xl block m-auto text-white text-center font-bold">
        Somos una empresa de servicios <br/> legales para PYMES | CES Legal
        </span>
      </div>
      <p className="px-6 py-6 sm:px-28 sm:py-10 text-center">En CES Legal los servicios legales para PYMES son prestados por nuestro equipo de trabajo de expertos. Profesionales con amplia experiencia cada uno en sus ramas, que se enfocan en solucionar la necesidades legales de nuestros clientes.</p>

      <span className="text-3xl block m-auto text-black text-center font-bold mb-6">
      Equipo de trabajo de servicios legales para PYMES
        </span>
        <div className="  px-0  sm:px-32">
      

            <ul className="bg-gray">
            <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2  sm:p-28">
                <div>
                       <li className="flex-li-book">
                {" "}
                <img src={Bookmark} alt="book" />
                <span className="font-bold text-lg mt-2">Administradora: </span><span  className=" mt-3"> Lorena Conde</span>
              </li> <li className="flex-li-book">
                <img src={Bookmark} alt="book" />
                <span className="font-bold text-lg mt-2">Abogado Jr: </span><span  className=" mt-3">  Kimberly Arias</span>

              </li>
                </div>
          <div>
    <li className="flex-li-book">
                <img src={Bookmark} alt="book" />
                <span className="font-bold text-lg mt-2">Coordinador área laboral:  </span><span  className=" mt-3">  William Leal</span>

              </li>
              <li className="flex-li-book">
                <img src={Bookmark} alt="book" />
                <span className="font-bold text-lg mt-2"> Director jurídico: </span><span  className=" mt-3">  Carlos E. Sampedro</span>

              </li> 
          </div>
              
          </div> 
            </ul>
          </div>
    </div>
  )
}
