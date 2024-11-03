import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "./Login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        'http://localhost/educacion_calidad/login.php',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.success) {
        history.push({
          pathname: '/',
          state: { message: 'Inicio de sesión exitoso' },
        });
      } else {
        setError(response.data.message || 'Credenciales incorrectas');
      }
    } catch (error) {
      if (error.response) {
        console.error('Error en la respuesta del servidor:', error.response.data);
        setError(error.response.data.message || 'Error en el servidor');
      } else if (error.request) {
        console.error('Error en la solicitud:', error.request);
        setError('No se recibió respuesta del servidor');
      } else {
        console.error('Error en la configuración de la solicitud:', error.message);
        setError('Error al configurar la solicitud');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          <button type="submit" disabled={loading}>
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>

        {/* Botón de registro */}
        <button onClick={() => history.push('/register')} className="register-button">
          Registrarse
        </button>
      </div>
    </div>
  );
}

export default Login;
