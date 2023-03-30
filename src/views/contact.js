import React from 'react'
import Img from "../assets/contact.png"
export default function ContactPage() {
  return (
    <div>
        <div className="bg-principal p-4 sm:p-20 mt-20">
      <span className="text-3xl block m-auto text-white text-center">Ponte en contacto para entender tus <br/> necesidades legales | CES Legal</span>
    </div>  
    <div className="bg-white p-4 sm:p-20 mt-20">
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
    <div><p>Ponte en contacto con CES Legal si quieres conocer en detalle el costo de nuestros servicios. Uno de nuestros asesores te atenderá. Podrás tener una propuesta ajustada a tus necesidades. Agenda una cita con alguno de nuestros expertos y podrás tener: 
        <br/>  <br/>
En CES Legal diseñamos a la medida los servicios legales que les ofrecemos a nuestros clientes. Nos enfocamos en tus necesidades específicas para ofrecerte justo lo que tu empresa requiere.</p></div>
        <div><img src={Img} className="block m-auto"/></div>
    </div>
    </div>
    <div className="bg-principal sm:px-64 px-10 pb-20">
        <h3 className="text-center font-bold text-2xl mb-6 pt-10 sm:pt-20 text-white">
        Formulario para contacto con CES Legal
        </h3>
        <p className="text-center text-white">
        Diligencia el siguiente formulario para ponerte en contacto con CES Legal.
        </p>
        <div class="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
          <div>
            {" "}
            <div className="mb-11">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6  text-white"
              >
                Primer nombre
              </label>
              <div className="mt-2">
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="block px-4 w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                  aria-describedby="name-description"
                />
              </div>
            </div>
            <div className="mb-11">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block px-4  w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
     
                  aria-describedby="email-description"
                />
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="mb-11">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6  text-white"
              >
                Apellido
              </label>
              <div className="mt-2">
                <input
                  type="lastname"
                  name="lastname"
                  id="lastname"
                  className="block px-4 w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                  aria-describedby="lastname-description"
                />
              </div>
            </div>
            <div className="mb-11">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Teléfono
              </label>
              <div className="mt-2">
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  className="block px-4  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                  aria-describedby="phone-description"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-20 p-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium leading-6 text-white"
          >
           Mensaje
          </label>
          <div className="mt-2 pb-10">
            <input
              type="message"
              name="message"
              id="message"
              className="block px-4  w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
   
              aria-describedby="message-description"
            />
          </div>
     
        <button className="border-full principal-color px-6 py-2 rounded-full text-center block m-auto">
                  Contacto
                </button>   </div>
      </div>
    </div>
  
  )
}
