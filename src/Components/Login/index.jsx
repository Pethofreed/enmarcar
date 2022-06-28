import './styles.css';
import Logo from './logo_enmarcar.png';
import { useState } from 'react';
import Loader from '../Loader';
import Button from '../Button';
import Input from '../Input';
import axios from 'axios';

const users = [
  { username: 'admin', pass: 'root' },
  { username: 'Usuario_uno', pass: 'root' },
]

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [user, setUser] = useState('')

  const handleSession = async () => {
    //setLoading(true)
    // if (!user || !password) {
    //   setError(true)
    //   return
    // }
    // setError(false)
    // try {
    //   const {data} = await axios({
    //     method: POST,
    //     baseURL: process.env.REACT_APP_SERVER,
    //     url: '',
    //     data: { user, password }
    //   })
    //   setLoading(false)
    //   localStorage.setItem("token", data)
    //   push.navigate('/dashboard')
    // } catch(error) {
    //   setError(true)
    //  setLoading(false)
    // }
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
            {!loading ?
              <Button
                onClick={() => handleSession()}
                children={"Ingresar"}
              /> : <Loader />
            }
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