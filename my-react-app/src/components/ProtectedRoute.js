// src/components/ProtectedRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('loggedInUser'); // Verifica si hay un usuario autenticado en localStorage

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          // Si no está autenticado, redirige a "/" con un mensaje
          <Redirect to={{ pathname: '/', state: { message: 'Debes iniciar sesión para acceder a esta sección.' } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
