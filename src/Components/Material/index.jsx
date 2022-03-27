import './styles.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import RadioGroup from '@mui/material/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

const Material = ({
  material, setMaterial,
  tipoMaterial, setTipoMaterial,
  materialValue, setMaterialValue,
}) => {

  const [caracteristicas, setCaracteristicas] = useState('');

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
            onChange={(e) => setMaterial(e.target.value)}
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
            onChange={(e) => setMaterial(e.target.value)}
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

  return(
    <div className='material-container'>
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
              onChange={(e) => setTipoMaterial(e.target.value)}
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
            onChange={(e) => setMaterialValue(e.target.value)}
          >
            <FormControlLabel value="estandar" control={<Radio />} label="Estandar" />
            <FormControlLabel value="personalizado" control={<Radio  />} label="Personalizado" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="caracteristicas">
        {materialValue === 'personalizado' && (
          <div className="mb-10">
            <TextField
              id="outlined-textarea"
              label="Personalizado"
              placeholder="Características..."
              multiline
              value={caracteristicas}
              onChange={(e) => setCaracteristicas(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Material;
