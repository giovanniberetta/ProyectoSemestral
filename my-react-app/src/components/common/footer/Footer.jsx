import React, { useContext } from "react";
import { blog } from "../../../dummydata";
import "./footer.css";
import { LanguageContext } from "../../../LanguageContext"; // Importa el contexto de idioma

const Footer = () => {
  const { idioma } = useContext(LanguageContext); // Obtén el idioma desde el contexto

  return (
    <>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>Academia Inteligentes Asintomaticos</h1>
            <span>
              {idioma === "español" ? "EDUCACIÓN EN LÍNEA Y AUTO MEJORAMIENTO" : "ONLINE EDUCATION & SELF IMPROVEMENT"}
            </span>
            <p>
              {idioma === "español"
                ? "Un pequeño río llamado Duden pasa por su lugar y lo abastece con la regelialia necesaria."
                : "A small river named Duden flows by their place and supplies it with the necessary regelialia."}
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link">
            <h3>{idioma === "español" ? "Explorar" : "Explore"}</h3>
            <ul>
              <li>{idioma === "español" ? "Sobre Nosotros" : "About Us"}</li>
              <li>{idioma === "español" ? "Servicios" : "Services"}</li>
              <li>{idioma === "español" ? "Cursos" : "Courses"}</li>
              <li>{idioma === "español" ? "Blog" : "Blog"}</li>
              <li>{idioma === "español" ? "Contáctenos" : "Contact Us"}</li>
            </ul>
          </div>
          <div className="box link">
            <h3>{idioma === "español" ? "Enlaces Rápidos" : "Quick Links"}</h3>
            <ul>
              <li>{idioma === "español" ? "Contáctenos" : "Contact Us"}</li>
              <li>{idioma === "español" ? "Precios" : "Pricing"}</li>
              <li>{idioma === "español" ? "Términos y Condiciones" : "Terms & Conditions"}</li>
              <li>{idioma === "español" ? "Privacidad" : "Privacy"}</li>
              <li>{idioma === "español" ? "Retroalimentación" : "Feedbacks"}</li>
            </ul>
          </div>
          <div className="box">
            <h3>{idioma === "español" ? "Publicaciones Recientes" : "Recent Post"}</h3>
            {blog.slice(0, 3).map((val, index) => (
              <div className="items flexSB" key={index}>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>{idioma === "español" ? "¿Tienes alguna pregunta?" : "Have a Questions?"}</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Av. Apoquindo 2827, 7550268 Las Condes, Santiago, Chile.
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +56 2 600 9000
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                contacto@nosequenombreponer.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          {idioma === "español"
            ? "Copyright ©2024 Todos los derechos reservados"
            : "Copyright ©2024 All rights reserved"}
        </p>
      </div>
    </>
  );
};

export default Footer;
