import './styles.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Login = () => {
  return(
    <div className="login-container">
      <Typography variant="h2" component="div" mb={5} sx={{ color: '#eee' }}>
        Enmarcar
      </Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div" mb={2} align="center">
            Iniciar Sesion
          </Typography>
          <div className="form-inputs">
            <TextField id="standard-basic" label="Usuario" variant="standard" />
            <TextField id="standard-basic" label="Contraseña" variant="standard" />
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