import { history } from '../../Utils/history';
import Logo from './logo_enmarcar.png';
import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import './styles.css';

const Login = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [user, setUser] = useState('')

  const handleSession = () => {
    if(user === process.env.REACT_APP_USER &&
      password === process.env.REACT_APP_PASS) {
        history.push('/dashboard')
      } else setError(true)
  }

  return(
    <div className="login-container">
      <div className="container-card">
        <div className="container-data-card">
          <div className="container-image">
            <img src={Logo} className='logo-enmarcar'/>
          </div>
          <div className="form-inputs">
            <Input
              label="Usuario:"
              type="text"
              id="usuario"
              placeholder="Nombre de usuario"
              onChange={(e) => {
                setUser(e.target.value)
                setError(false)
              }}
              value={user}
            />
            <Input
              label="Constraseña"
              type="password"
              id="contrasena"
              placeholder="Ingresa aqui la contraseña"
              onChange={(e) => {
                setPassword(e.target.value)
                setError(false)
              }}
              value={password}
            />
            <div className="container-button">
              <Button
                onClick={() => handleSession()}
                children={"Ingresar"}
              />
            </div>
          </div>
          {error && (
            <p className="error-login">
              Usuario o contraseña incorrecto.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login;