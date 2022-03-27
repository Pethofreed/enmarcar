import './styles.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import GeneralComponent from '../GeneralComponent';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';


const Enmarcación = () => {

  const Madera = () => {
    return(
      <Box sx={{ width: 150, marginRight: '10px', marginBottom: '15px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Material</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label='Material'
            value={material}
            size="small"
            onChange={handleChangeMaterial}
          >
            <MenuItem value="m-uno">Madera uno</MenuItem>
            <MenuItem value="m-dos">Madera Dos</MenuItem>
            <MenuItem value="m-tres">Madera Tres</MenuItem>
            <MenuItem value="m-cuatro">Madera Cuatro</MenuItem>
            <MenuItem value="m-cinco">Madera Cinco</MenuItem>
          </Select>
        </FormControl>
      </Box>
    )
  }

  const Plastico = () => {
    return(
      <Box sx={{ width: 150, marginRight: '10px', marginBottom: '15px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Material</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label='Material'
            value={material}
            size="small"
            onChange={handleChangeMaterial}
          >
            <MenuItem value="p-uno">Plastico uno</MenuItem>
            <MenuItem value="p-dos">Plastico Dos</MenuItem>
            <MenuItem value="p-tres">Plastico Tres</MenuItem>
            <MenuItem value="p-cuatro">Plastico Cuatro</MenuItem>
            <MenuItem value="p-cinco">Plastico Cinco</MenuItem>
          </Select>
        </FormControl>
      </Box>
    )
  };

  const [marco, setMarco] = useState('true');
  const [material, setMaterial] = useState('');
  const [color, setColor] = useState('');
  const [type, setType] = useState('tradicional');
  const [paspartout, setPaspartout] = useState(false);
  const [altoPaspartout, setAltoPaspartout] = useState(0);
  const [anchoPaspartout, setAnchoPaspartout] = useState(0);
  const [tipoMaterial, setTipoMaterial] = useState('plastico');
  const [materialValue, setMaterialValue] = useState('estandar');

  const calcularPaspartout = () => {
    const sum = (altoPaspartout * 2) + (anchoPaspartout * 2);
    return sum / 100;
  }

  const handleChangeTipoMaterial = (e) => {
    setTipoMaterial(e.target.value);
  };

  const handleChangeMaterial = (e) => {
    setMaterial(e.target.value);
  };

  const handleMaterialValue = (e) => {
    setMaterialValue(e.target.value)
  }

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  }

  return (
    <div className="enmarcacion-container">
      <GeneralComponent />

      <div className="enmarcacion-material-select">
        <Box sx={{ width: 150, marginRight: '10px', marginBottom: '15px' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Tipo Material</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label='Tipo material'
              value={tipoMaterial}
              size="small"
              onChange={handleChangeTipoMaterial}
            >
              <MenuItem value="plastico">Plástico</MenuItem>
              <MenuItem value="madera">Madera</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {tipoMaterial === 'plastico' ? <Plastico /> : <Madera />}

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="personalizado"
            name="radio-buttons-group"
            value={materialValue}
            onChange={handleMaterialValue}
          >
            <FormControlLabel value="estandar" control={<Radio />} label="Estandar" />
            <FormControlLabel value="personalizado" control={<Radio  />} label="Personalizado" />
          </RadioGroup>
        </FormControl>
      </div>
      <Divider />
      <div className="enmarcacion-paspartout">
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
            </div>
          </>
        )}
      </div>



    </div>
  )
}

export default Enmarcación;
