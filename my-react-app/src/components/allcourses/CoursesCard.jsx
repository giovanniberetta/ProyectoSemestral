import React, { useContext } from "react";
import "./Courses.css";
import { coursesCard } from "../../dummydata";
import { LanguageContext } from "../../LanguageContext"; // Importa el contexto de idioma

const CoursesCard = () => {
  const { idioma } = useContext(LanguageContext); // Obtén el idioma desde el contexto

  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val) => (
            <div className="items" key={val.id}>
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
                    {val.courTeacher.map((details, index) => (
                      <div className="box" key={index}>
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
      </section>
    </>
  );
};

export default CoursesCard;
