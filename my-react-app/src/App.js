import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Header from "./components/common/header/Header";
import About from "./components/about/about";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Pruebas from "./components/pruebas/pruebas";
import Login from "./components/login/login";
import Register from "./components/register/register";
import ProtectedRoute from "./components/ProtectedRoute";
import { LanguageProvider, LanguageContext } from "./LanguageContext"; // Importa el contexto

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <MainRoutes />
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

function MainRoutes() {
  const location = useLocation();
  const { idioma } = useContext(LanguageContext); // Obtener el idioma desde el contexto
  const message = location.state?.message || "";

  return (
    <div>
      {message && (
        <div style={{
          backgroundColor: '#f8d7da',
          color: '#721c24',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'center',
          marginBottom: '15px',
        }}>
          {message}
        </div>
      )}
      <Switch>
        <Route exact path="/" render={() => <Home idioma={idioma} />} />
        <Route exact path="/about" render={() => <About idioma={idioma} />} />
        <Route exact path="/courses" render={() => <CourseHome idioma={idioma} />} />
        <Route exact path="/team" render={() => <Team idioma={idioma} />} />
        <Route exact path="/pricing" render={() => <Pricing idioma={idioma} />} />
        <Route exact path="/journal" render={() => <Blog idioma={idioma} />} />
        <Route exact path="/contact" render={() => <Contact idioma={idioma} />} />
        <ProtectedRoute exact path="/pruebas" component={() => <Pruebas idioma={idioma} />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/register" render={() => <Register />} />
      </Switch>
    </div>
  );
}

export default App;
