import React, { useContext } from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourses/Courses.css";
import { coursesCard } from "../../dummydata";
import { LanguageContext } from "../../LanguageContext"; // Importa el contexto de idioma

const HAbout = () => {
  const { idioma } = useContext(LanguageContext); // Obtén el idioma desde el contexto

  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading 
            subtitle={idioma === "español" ? "nuestros cursos" : "our courses"} 
            title={idioma === "español" ? "explora nuestros cursos en línea populares" : "explore our popular online courses"} 
          />

          <div className="coursesCard">
            <div className="grid2">
              {coursesCard.slice(0, 3).map((val, index) => (
                <div className="items" key={index}>
                  <div className="content flex">
                    <div className="left">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <h1>{val.coursesName}</h1>
                      <div className="rate">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <label htmlFor="">(5.0)</label>
                      </div>
                      <div className="details">
                        {val.courTeacher.map((details, idx) => (
                          <div className="box" key={idx}>
                            <div className="dimg">
                              <img src={details.dcover} alt="" />
                            </div>
                            <div className="para">
                              <h4>{details.name}</h4>
                            </div>
                            <span>{details.totalTime}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>
                  <button className="outline-btn">
                    {idioma === "español" ? "¡INSCRÍBETE AHORA!" : "ENROLL NOW!"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  );
};

export default HAbout;
