import './styles.css';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

const Enmarcación = () => {

  const [alto, setAlto] = useState(0);
  const [ancho, setAncho] = useState(0);
  const calcCms = () => {
    const sum = (alto * 2) + (ancho * 2);
    return sum / 100;
  }

  return (
    <div className="enmarcacion-container">
      <div className="enmarcacion-type-of-picture">
        <FormControl>
          <RadioGroup
          row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="type-of-picture"
            name="radio-buttons-group"
          >
            <FormControlLabel value="foto" control={<Radio  />} label="Foto" />
            <FormControlLabel value="pintura" control={<Radio  />} label="Pintura" />
            <FormControlLabel value="imagen" control={<Radio  />} label="Imagen" />
            <FormControlLabel value="otro" control={<Radio  />} label="Otro" />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="enmarcacion-ancho-alto-inputs">
      <TextField
        id="outlined-number"
        label="Medida ancho"
        type="number"
        size="small"
        className='ancho'
        rows={1}
        value={ancho}
        onChange={(e) => setAncho(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          marginRight: '10px',
          marginBottom: '15px',
          width: 150
        }}
      />
      <TextField
        id="outlined-number"
        label="Medida alto"
        type="number"
        size="small"
        maxRows='3'
        value={alto}
        onChange={(e) => setAlto(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          marginRight: '10px',
          marginBottom: '15px',
          width: 150
        }}
      />
      {(!!ancho && !!alto) && (
        <Typography>
          Total: {calcCms()} Centímetros
        </Typography>
      )}
      </div>
    </div>
  )
}

export default Enmarcación;
