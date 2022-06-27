import './styles.css';
import { useState } from 'react';
import { history } from '../../Utils/history';
import Logo from './logo_enmarcar.png';
import Button from '../Button';
import Input from '../Input';

const users = [
  { username: 'admin', pass: 'root' },
  { username: 'Usuario_uno', pass: 'root' },
]

const Login = () => {

  const [user, setUser] = useState('');
  const [error, setError] = useState(false);
  const [password, setPassword] = useState('');

  const handleSession = () => {
    users.forEach(({username , pass}) => {
      if (user === username && password === pass) {
        setError(false);
        setPassword('');
        setUser('');
        history.push('/dashboard')
      } else setError(true);
    })
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
              label
              children={"Usuario:"}
              htmlFor={"usuario"}
              Input
              type={"text"}
              id={"usuario"}
              placeholder={"Nombre de usuario"}
              onChange={(e) => {
                setUser(e.target.value)
                setError(false)
              }}
              value={user}
            />
            <Input
              label
              children={"Contraseña:"}
              htmlFor={"contrasena"}
              Input
              type={"password"}
              id={"contrasena"}
              placeholder={"Ingresa aqui la contraseña"}
              onChange={(e) => {
                setPassword(e.target.value)
                setError(false)
              }}
              value={password}
            />
            <Button
              onClick={() => handleSession()}
              children={"Ingresar"}
            />
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