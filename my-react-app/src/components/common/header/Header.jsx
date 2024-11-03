import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  // Definimos un array de elementos de menú para evitar duplicación
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "All Courses" },
    { path: "/about", label: "About" },
    { path: "/team", label: "Team" },
    { path: "/pricing", label: "Pricing" },
    { path: "/journal", label: "Journal" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="start">
            <Link to="/login">
              <div className="button">Login</div>
            </Link>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
