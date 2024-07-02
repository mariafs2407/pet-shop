import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="w-full bg-[#313c46] text-white py-20">
      <div className="flex mx-auto flex-col  md:flex-row justify-between max-w-screen-big items-center gap-4 p-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl whi font-medium text-secundary">Siganos</h1>
          <p>
            Facilitamos la consolidación,
            <br />
            el marketing y el seguimiento
            <br />
            de su sitio web de redes sociales.
          </p>
          <div className="flex flex-row gap-4">
            <FaFacebookSquare className="icon " />
            <FaTwitterSquare className="icon" />
            <FaSquareInstagram className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl whi font-medium text-secundary">
            Información
          </h1>
          <Link to="#">Mi cuenta</Link>
          <Link to="#">Carro</Link>
          <Link to="#">Preguntas Frecuentes</Link>
        </div>
      </div>
    </div>
  );
};
