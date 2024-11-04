import React, { useContext } from "react";
import "./Courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";
import { LanguageContext } from "../../LanguageContext"; // Importa el contexto de idioma

const OnlineCourses = () => {
  const { idioma } = useContext(LanguageContext); // Obtén el idioma desde el contexto

  return (
    <>
      <section className="online">
        <div className="container">
          <Heading 
            subtitle={idioma === "español" ? "CURSOS" : "COURSES"} 
            title={idioma === "español" ? "Explora Nuestros Cursos en Línea" : "Browse Our Online Courses"} 
          />
          <div className="content grid3">
            {online.map((val, index) => (
              <div className="box" key={index}>
                <div className="img">
                  <img src={val.cover} alt="" />
                  <img src={val.hoverCover} alt="" className="show" />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
