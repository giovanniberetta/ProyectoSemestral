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
import Login from "./components/login/login"; // Importa el componente de Login
import Register from "./components/register/register"; // Importa el componente de registro

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

// Componente para manejar las rutas principales y mostrar mensajes de éxito
function MainRoutes() {
  const location = useLocation();
  const message = location.state?.message || '';

  return (
    <div>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/courses" component={CourseHome} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/journal" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/pruebas" component={Pruebas} />
        <Route exact path="/login" component={Login} /> {/* Ruta para Login */}
        <Route exact path="/register" component={Register} /> {/* Nueva ruta para Register */}
      </Switch>
    </div>
  );
}

export default App;
