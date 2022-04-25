import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import RadioGroup from '@mui/material/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { CHANGE_DATA } from '../../Store/PreciosReducer';
import { materialMadera, materialPlastico } from '../Helpers';
import FormControlLabel from '@mui/material/FormControlLabel';

const MaterialPaspartout = ({
  material,
  setMaterial,
  tipoMaterial,
  setTipoMaterial,
  materialValue,
  setMaterialValue,
  caracteristicas,
  setCaracteristicas,
  numeroMarco,
  nombreMarco
}) => {

  const { ordenDeTrabajo } = useSelector(({PreciosReducer}) => ({
    ordenDeTrabajo: PreciosReducer.ordenDeTrabajo,
  }))

  const dispatch = useDispatch();
  const data = Object.values(ordenDeTrabajo)?.find(( { nombre }) => nombre === nombreMarco);

  useEffect(() => {
    setMaterial('Elegir...')
  }, [tipoMaterial])

  useEffect(() => {
    if (materialValue === 'estandar') setCaracteristicas('');
    const materialActual = tipoMaterial === 'plastico'
      ? materialPlastico?.find(({ nombre }) => nombre === material)
      : materialMadera?.find(({ nombre }) => nombre === material);
    const precioMaterial =  data?.medidas?.longitud * materialActual?.precio;
    const newData = {
      ...data,
      precioMaterial,
      materiales: {
        tipo: tipoMaterial,
        material,
        modificado: materialValue,
        caracteristicas,
      }
    }
    dispatch({ type: CHANGE_DATA, payload: { marco: numeroMarco, data: newData } })
  }, [tipoMaterial, material, materialValue, caracteristicas])

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
            {materialMadera.map(({nombre}) => {
              return (
                <MenuItem value={nombre}>{nombre}</MenuItem>
              )
            })}
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

        {material !== 'Elegir...' && (
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

export default MaterialPaspartout;
