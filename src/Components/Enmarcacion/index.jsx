import './styles.css';
import { useEffect, useState } from 'react';
import Material from '../Material';
import Paspartout from '../Paspartout';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import GeneralComponent from '../GeneralComponent';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_DATA } from '../../Store/PreciosReducer';
import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { formatter } from '../Helpers';

const precioVidrios = {
  ninguno: 0,
  anti_reflejo: 75000,
  claro4mm: 90000,
  espejo3mm: 70000,
  espejo4mm: 100000,
  vinilo: 20000,
}

const roundSizes = (n) => Math.ceil(n/10)*10;

const Enmarcación = ({
  otroMarco, setOtroMarco, ultimo, nombreMarco, numeroMarco
}) => {

  const { ordenDeTrabajo } = useSelector(({PreciosReducer}) => ({
    ordenDeTrabajo: PreciosReducer.ordenDeTrabajo,
  }));

  const data = Object.values(ordenDeTrabajo)?.find(( { nombre }) => nombre === nombreMarco);
  const total = data?.precioMaterial + data?.precioVidrio;

  const dispatch = useDispatch();
  const [notas, setNotas] = useState('');
  const [vidrio, setVidrio] = useState('ninguno');

  useEffect(() => {
    const medidas = roundSizes(data?.medidas?.alto)/100 * roundSizes(data?.medidas?.ancho)/100;
    const precioVidrioActual = precioVidrios[vidrio];
    const precio = medidas * precioVidrioActual;
    const newData = {
      ...data,
      vidrio,
      precioVidrio: precio,
    }
    dispatch({ type: CHANGE_DATA, payload: { marco: numeroMarco, data: newData} })
  }, [vidrio])

  useEffect(() => {
    const newData = { ...data, anotaciones: notas}
    dispatch({ type: CHANGE_DATA, payload: { marco: numeroMarco, data: newData} })
  }, [notas])

  return (
    <div className="enmarcacion-container">
      {nombreMarco !== 'Primer marco' && (
        <h2>{nombreMarco}</h2>
      )}

      <GeneralComponent
        nombreMarco={nombreMarco}
        numeroMarco={numeroMarco}
      />

      <Material
        nombreMarco={nombreMarco}
        numeroMarco={numeroMarco}
      />

      <Divider />

      <Paspartout
        nombreMarco={nombreMarco}
        numeroMarco={numeroMarco}
      />

      <div className="mb-20">
        <Divider />
      </div>

      <Box sx={{ width: 150, marginRight: '10px', marginBottom: '15px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Vidrio</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label='Material'
            value={vidrio}
            size="small"
            onChange={(e) => setVidrio(e.target.value)}
            disabled={!data?.medidas?.longitud}
          >
            <MenuItem value="ninguno">Elegir...</MenuItem>
            <MenuItem value="anti_reflejo">Anti reflejo</MenuItem>
            <MenuItem value="claro4mm">Claro 4mm</MenuItem>
            <MenuItem value="vinilo">Vinilo</MenuItem>
            <MenuItem value="espejo3mm">Espejo 3mm</MenuItem>
            <MenuItem value="espejo4mm">Espejo 4mm</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField
        id="outlined-textarea"
        label="Notas"
        placeholder="Apuntes generales..."
        multiline
        value={notas}
        onChange={(e) => setNotas(e.target.value)}
      />

      <div className='mt-20'>
        {total ? (
          <Typography variant='button'>
          Precio marco: { formatter.format(total)} Pesos
        </Typography>
        ) : ( null )}
      </div>

      <div className="mt-20">
        <Divider />
      </div>

      {!ultimo && (
        <FormControlLabel
          control={
            <Checkbox
              checked={otroMarco}
              onChange={() => setOtroMarco(!otroMarco)}
            />
          }
          label="Añadir otro marco"
        />
      )}

    </div>
  )
}

export default Enmarcación;
