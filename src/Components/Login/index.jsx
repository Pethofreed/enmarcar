import './styles.css';
import { useState } from 'react';
import { history } from '../../Utils/history';
import Card from '@mui/material/Card';
import Logo from './logo_enmarcar.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

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
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <img src={Logo} alt="Enmarcar logo" className='logo-enmarcar'/>
          <div className="form-inputs">
            <TextField
              id="standard-basic"
              label="Usuario"
              variant="standard"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />

            <TextField
              id="standard-basic"
              label="Contraseña"
              variant="standard"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleSession()}>Ingresar</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Login;