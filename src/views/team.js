import React from "react";
import "../styles/variables.css";
import "../styles/general.css";
import Bookmark from "../assets/bookmark.svg";
import BookmarkWhite from "../assets/bookmark-white.png";
import TeamWork from "../assets/team-works.png";
import Team from "../assets/team.png";
import { teamList, teamWorkAssociated } from "../data/team";

export default function team() {
  return (
    <div>
      <div className="bg-principal p-10 sm:p-20 mt-20">
        <span className="text-3xl block m-auto text-white text-center font-bold">
          Somos una empresa de servicios <br /> legales para PYMES | CES Legal
        </span>
      </div>
      <p className="px-6 py-6 sm:px-28 sm:py-10 text-center">
        En CES Legal los servicios legales para PYMES son prestados por nuestro
        equipo de trabajo de expertos. Profesionales con amplia experiencia cada
        uno en sus ramas, que se enfocan en solucionar la necesidades legales de
        nuestros clientes.
      </p>

      <span className="text-3xl block m-auto text-black text-center font-bold mb-6">
        Equipo de trabajo de servicios legales para PYMES
      </span>
      <div className="  px-0  sm:px-32">
        <ul className="bg-gray">
          <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2  sm:p-28 mb-12 sm:mb-20">
            {teamList.map((index) => (
              <li className="flex-li-book " key={index.title}>
                <img src={Bookmark} alt="book" />
                <span className="pt-2 ml-4">
                  {" "}
                  <span className="font-bold text-lg mt-2">{index.title}</span>
                  <span className=" mt-3">{index.subTitle}</span>
                </span>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2  sm:p-28 bg-principal">
        <div>
          <span className="text-3xl block m-auto text-white text-center font-bold">
            Equipo de trabajo legal asociado (externo)
          </span>
          <ul className="pt-14">
            {teamWorkAssociated.map((index) => (
              <li className="flex-li-book text-white pb-6" key={index.title}>
                <img
                  src={BookmarkWhite}
                  alt="book"
                  className="img-bookmark-white"
                />
                <span className="ml-6">
                  <span className="font-bold text-lg mt-2 ">{index.title}</span>
                  <span className=" mt-3">{index.subTitle}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={Team} alt="team" className="img-team" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2  sm:p-28">
        <div>
          <img src={TeamWork} alt="team-work" />
        </div>
        <div>
          <span className="pt-2 text-3xl block m-auto text-black text-left font-bold mb-6">
            Equipo de trabajo de servicios legales para PYMES
          </span>
          <p className="pt-6 sm:pt-14">
            En CES Legal los servicios legales para PYMES son prestados por
            nuestro equipo de trabajo de expertos. Profesionales con amplia
            experiencia cada uno en sus ramas, que se enfocan en solucionar la
            necesidades legales de nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  );
}
