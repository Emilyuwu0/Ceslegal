import React from "react";
import Img from "../assets/contact.png";
import "../styles/general.css";
export default function ContactPage() {
  return (
    <div>
      <div className="bg-principal p-10 sm:p-20 mt-20">
        <span className="text-3xl block m-auto text-white text-center">
          Ponte en contacto para entender tus <br /> necesidades legales | CES
          Legal
        </span>
      </div>
      <div className="bg-white p-4 sm:p-20 mt-20">
        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
          <div>
            <p>
              Ponte en contacto con CES Legal si quieres conocer en detalle el
              costo de nuestros servicios. Uno de nuestros asesores te atenderá.
              Podrás tener una propuesta ajustada a tus necesidades. Agenda una
              cita con alguno de nuestros expertos y podrás tener:
              <br /> <br />
              En CES Legal diseñamos a la medida los servicios legales que les
              ofrecemos a nuestros clientes. Nos enfocamos en tus necesidades
              específicas para ofrecerte justo lo que tu empresa requiere.
            </p>
          </div>
          <div>
            <img src={Img} className="block m-auto" alt="img" />
          </div>
        </div>
      </div>
      <div className="bg-principal sm:px-64 px-10 pb-20">
        <h3 className="text-center font-bold text-2xl mb-6 pt-10 sm:pt-20 text-white">
          Formulario para contacto con CES Legal
        </h3>
        <p className="text-center text-white">
          Diligencia el siguiente formulario para ponerte en contacto con CES
          Legal.
        </p>
        <div class="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
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
                  placeholder="Teléfono"
                  type="phone"
                  name="phone"
                  id="phone"
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
