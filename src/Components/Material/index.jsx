import './styles.css';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import RadioGroup from '@mui/material/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';









const materialPlastico = [
  { nombre: '1001 05', precio: 140.360 },
  { nombre: '10028 05', precio: 162.140 },
  { nombre: '1015 02', precio: 171.600 },
  { nombre: '10425', precio: 123.860 },
  { nombre: '1100', precio: 230.340 },
  { nombre: '12646', precio: 327.360 },
  { nombre: '172', precio: 39.600 },
  { nombre: '173', precio: 59.400 },
  { nombre: '214', precio: 21.120 },
  { nombre: '2514', precio: 21.120 },
  { nombre: '293', precio: 28.820 },
  { nombre: '3005', precio: 31.900 },
  { nombre: '3120', precio: 37.620 },
  { nombre: '314', precio: 27.500 },
  { nombre: '317', precio: 23.540 },
  { nombre: '3419', precio: 37.620 },
  { nombre: '3510', precio: 84.700 },
  { nombre: '402', precio: 51.040 },
  { nombre: '414', precio: 44.220 },
  { nombre: '415', precio: 65.340 },
  { nombre: '4218', precio: 42.680 },
  { nombre: '4520', precio: 51.040 },
  { nombre: '461', precio: 51.700 },
  { nombre: '4914', precio: 44.660 },
  { nombre: '4929', precio: 65.780 },
  { nombre: '494', precio: 64.460 },
  { nombre: '555', precio: 59.180 },
  { nombre: '616', precio: 73.480 },
  { nombre: '670', precio: 84.260 },
  { nombre: '7502', precio: 0 },
  { nombre: '7513', precio: 88.660 },
  { nombre: '7534', precio: 146.960 },
  { nombre: '7919', precio: 90.640 },
  { nombre: '821', precio: 94.820 },
  { nombre: '8529', precio: 167.200 },
  { nombre: '9531', precio: 154.440 },
  { nombre: '982', precio: 139.040 },
  { nombre: '9929', precio: 186.340 },
  { nombre: '999', precio: 170.280 },
]

const Material = ({
  material, setMaterial,
  tipoMaterial, setTipoMaterial,
  materialValue, setMaterialValue,
  caracteristicas, setCaracteristicas
}) => {

  useEffect(() => {
    setMaterial('')
  }, [tipoMaterial])

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
            {materialPlastico.map(({nombre}) => {
              return (
                <MenuItem value={nombre}>{nombre}</MenuItem>
              )
            })}
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

        {material && (
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
        )}
      </div>
      <div className="caracteristicas">
        {materialValue === 'personalizado' && (
          <div className="mb-10">
            <TextField
              id="outlined-textarea"
              label="Personalizado"
              placeholder="Características..."
              multiline
              fullWidth
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
