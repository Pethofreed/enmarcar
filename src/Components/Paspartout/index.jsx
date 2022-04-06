import './styles.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Material from '../Material';

const Paspartout = ({
  altoPaspartout, setAltoPaspartout,
  anchoPaspartout, setAnchoPaspartout,
}) => {

  const [color, setColor] = useState('');
  const [marco, setMarco] = useState('false');
  const [type, setType] = useState('tradicional');
  const [paspartout, setPaspartout] = useState(false);

  const [material, setMaterial] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');
  const [tipoMaterial, setTipoMaterial] = useState('plastico');
  const [materialValue, setMaterialValue] = useState('estandar');

  const calcularPaspartout = () => {
    const sum = (altoPaspartout * 2) + (anchoPaspartout * 2);
    return sum / 100;
  }

  return(
    <>
      <div className="paspartout-container">
        <FormControlLabel
          control={
            <Checkbox
              checked={paspartout}
              onChange={() => setPaspartout(!paspartout)}
            />
          }
          label="Paspartout"
        />
        {paspartout && (
          <>
            <div className="enmarcacion-ancho-alto-inputs mt-10">
              <TextField
                id="outlined-number"
                label="Ancho"
                type="number"
                size="small"
                className='ancho'
                rows={1}
                value={anchoPaspartout}
                onChange={(e) => setAnchoPaspartout(e.target.value)}
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
                label="Alto"
                type="number"
                size="small"
                maxRows='3'
                value={altoPaspartout}
                onChange={(e) => setAltoPaspartout(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  marginRight: '10px',
                  marginBottom: '15px',
                  width: 150
                }}
              />
              {(!!anchoPaspartout && !!altoPaspartout) && (
                <Typography>
                  Total: {calcularPaspartout()}
                </Typography>
              )}
            </div>
            <div className="paspartout-personalizado">
              <div className="paspartout-row mt-10">
                <TextField
                  id="outlined-number"
                  label="Color"
                  type="text"
                  size="small"
                  maxRows='3'
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  sx={{
                    marginRight: '10px',
                    marginBottom: '15px',
                    width: 150
                  }}
                />

                <Box sx={{ width: 150, marginRight: '10px', marginBottom: '15px' }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label='Type'
                      value={type}
                      size="small"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <MenuItem value="tradicional">Tradicional</MenuItem>
                      <MenuItem value="externo">Externo</MenuItem>
                      <MenuItem value="flotante">Flotante</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              {type === 'flotante' && (
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="personalizado"
                    name="radio-buttons-group"
                    value={marco}
                    onChange={(e) => setMarco(e.target.value)}
                  >
                    <FormControlLabel value="true" control={<Radio />} label="Con marco" />
                    <FormControlLabel value="false" control={<Radio  />} label="Sin marco" />
                  </RadioGroup>
                </FormControl>
              )}
              {marco === 'true' && (
                <Material
                  material={material}
                  setMaterial={setMaterial}
                  tipoMaterial={tipoMaterial}
                  setTipoMaterial={setTipoMaterial}
                  materialValue={materialValue}
                  setMaterialValue={setMaterialValue}
                  caracteristicas={caracteristicas}
                  setCaracteristicas={setCaracteristicas}
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  )
};

export default Paspartout;
