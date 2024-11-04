import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
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
import ProtectedRoute from "./components/ProtectedRoute"; // Importa el componente de ruta protegida

function App() {
  return (
    <>
      <Router>
        <Header />
        <MainRoutes />
        <Footer />
      </Router>
    </>
  );
}

function MainRoutes() {
  const location = useLocation();
  const message = location.state?.message || '';

  return (
    <div>
      {/* Muestra el mensaje solo si existe */}
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
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/courses" component={CourseHome} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/journal" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <ProtectedRoute exact path="/pruebas" component={Pruebas} /> {/* Ruta protegida */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
