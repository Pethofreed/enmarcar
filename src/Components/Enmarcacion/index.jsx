import './styles.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import GeneralComponent from '../GeneralComponent';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

const Enmarcación = () => {

  const [material, setMaterial] = useState('');
  const [tipoMaterial, setTipoMaterial] = useState('plastico');
  const [materialValue, setMaterialValue] = useState('estandar');

  const handleChangeTipoMaterial = (e) => {
    setTipoMaterial(e.target.value);
  };

  const handleChangeMaterial = (e) => {
    setMaterial(e.target.value);
  };

  const handleMaterialValue = (e) => {
    setMaterialValue(e.target.value)
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
              <MenuItem value="uno">Tipo uno</MenuItem>
              <MenuItem value="dos">Tipo dos</MenuItem>
            </Select>
          </FormControl>
        </Box>
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
    </div>
  )
}

export default Enmarcación;
