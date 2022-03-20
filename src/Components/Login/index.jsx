import './styles.css';
import Card from '@mui/material/Card';
import Logo from './logo_enmarcar.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Login = () => {
  return(
    <div className="login-container">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <img src={Logo} alt="Enmarcar logo" className='logo-enmarcar'/>
          <div className="form-inputs">
            <TextField id="standard-basic" label="Usuario" variant="standard" />
            <TextField id="standard-basic" label="Contraseña" variant="standard" type="password"/>
          </div>

        </CardContent>
        <CardActions>
          <Button size="small">Ingresar</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Login;