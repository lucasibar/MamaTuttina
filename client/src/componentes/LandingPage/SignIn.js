import React, { useState } from 'react';
import './SignIn.css';
// import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignIn(props) {
  // const history = useHistory();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza la petición y maneja la respuesta
    // Si todo está bien, puedes utilizar history.push('/day') para navegar a la siguiente pantalla
  };

  return (
    <div className="landingPage">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            value={user}
            onChange={(e) => setUser(e.target.value)}
            InputProps={{ className: 'MuiInputBase-input', style: { background: 'white' } }}
            InputLabelProps={{ className: 'MuiInputLabel-root' }}
          />
        </div>
        <div className="inputContainer">
          <TextField
            label="Contraseña"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{ className: 'MuiInputBase-input', style: { background: 'white' } }}
            InputLabelProps={{ className: 'MuiInputLabel-root' }}
          />
        </div>
        <Button type="submit" variant="contained" fullWidth className="signInButton">
          Sign In
        </Button>
      </form>
    </div>
  );
}

