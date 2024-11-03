import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/educacion_calidad/getUsuarios.php")
      .then(response => {
        setUsuarios(response.data); // Almacena los datos en el estado
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {usuario.nombre} <br />
            <strong>Email:</strong> {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
