import React, { useContext } from "react";
import Back from "../common/back/Back";
import "./contact.css";
import { LanguageContext } from "../../LanguageContext"; // Importa el contexto de idioma

const Contact = () => {
  const { idioma } = useContext(LanguageContext); // Obtén el idioma desde el contexto

  return (
    <>
      <Back title={idioma === "español" ? "Contáctanos" : "Contact us"} />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row"></div>
          <div className="right row">
            <h1>{idioma === "español" ? "Contáctanos" : "Contact us"}</h1>
            <p>
              {idioma === "español"
                ? "Estamos abiertos a cualquier sugerencia o solo para charlar"
                : "We're open for any suggestion or just to have a chat"}
            </p>

            <div className="items grid2">
              <div className="box">
                <h4>{idioma === "español" ? "DIRECCIÓN:" : "ADDRESS:"}</h4>
                <p>
                  {idioma === "español"
                    ? "198 West 21th Street, Suite 721 Nueva York NY 10016"
                    : "198 West 21th Street, Suite 721 New York NY 10016"}
                </p>
              </div>
              <div className="box">
                <h4>{idioma === "español" ? "CORREO ELECTRÓNICO:" : "EMAIL:"}</h4>
                <p>info@yoursite.com</p>
              </div>
              <div className="box">
                <h4>{idioma === "español" ? "TELÉFONO:" : "PHONE:"}</h4>
                <p>+ 1235 2355 98</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder={idioma === "español" ? "Nombre" : "Name"} />
                <input type="email" placeholder={idioma === "español" ? "Correo Electrónico" : "Email"} />
              </div>
              <input type="text" placeholder={idioma === "español" ? "Asunto" : "Subject"} />
              <textarea cols="30" rows="10" placeholder={idioma === "español" ? "Escribe un mensaje aquí..." : "Create a message here..."}></textarea>
              <button className="primary-btn">
                {idioma === "español" ? "ENVIAR MENSAJE" : "SEND MESSAGE"}
              </button>
            </form>

            <h3>{idioma === "español" ? "Síguenos aquí" : "Follow us here"}</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
