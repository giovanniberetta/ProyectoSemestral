import React, { useContext } from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";
import { LanguageContext } from "../../LanguageContext"; // Importa el contexto de idioma

const CourseHome = () => {
  const { idioma } = useContext(LanguageContext); // Obtén el idioma desde el contexto

  return (
    <>
      <Back title={idioma === "español" ? "Explorar Cursos" : "Explore Courses"} />
      <CoursesCard />
      <OnlineCourses />
    </>
  );
};

export default CourseHome;
