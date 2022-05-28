import './styles.css';
import { useEffect, useState } from 'react';
import Material from '../Material';
import Paspartout from '../Paspartout';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import GeneralComponent from '../GeneralComponent';
import { formatter, glassesPrice } from '../Helpers';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_DATA } from '../../Store/PreciosReducer';
import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const roundSizes = (n) => Math.ceil(n/10)*10;

const Enmarcación = ({
  otroMarco, setOtroMarco, ultimo, nombreMarco, numeroMarco
}) => {

  const { ordenDeTrabajo } = useSelector(({PreciosReducer}) => ({
    ordenDeTrabajo: PreciosReducer.ordenDeTrabajo,
  }));

  const dataFrame = Object.values(ordenDeTrabajo)?.find(( { nombre }) => nombre === nombreMarco);
  const { total, paspartout, paspartoutDetails: { tipoPaspartout } } = dataFrame;
  const percentagePaspartout = paspartout ? (tipoPaspartout === "tradicional" ? 0.10 : tipoPaspartout === "externo" ? 0.30 : 0 ) : 0
  const priceWithoutPaspartout = dataFrame?.precioMaterial + dataFrame?.precioVidrio;
  const totalPrice = priceWithoutPaspartout + ( priceWithoutPaspartout * percentagePaspartout);

  useEffect(() => {
    const newData = {
      ...dataFrame,
      total: totalPrice
    }
    dispatch({ type: CHANGE_DATA, payload: { marco: numeroMarco, data: newData} })
  }, [totalPrice])

  const dispatch = useDispatch();
  const [notes, setNotes] = useState('');
  const [glass, setGlass] = useState('ninguno');

  useEffect(() => {
    const sizes = roundSizes(dataFrame?.medidas?.alto)/100 * roundSizes(dataFrame?.medidas?.ancho)/100;
    const priceCurrentGlass = glassesPrice[glass];
    const price = sizes * priceCurrentGlass;
    const newData = {
      ...dataFrame,
      vidrio: glass,
      precioVidrio: price,
    }
    dispatch({ type: CHANGE_DATA, payload: { marco: numeroMarco, data: newData} })
  }, [glass])

  useEffect(() => {
    const newData = { ...dataFrame, anotaciones: notes}
    dispatch({ type: CHANGE_DATA, payload: { marco: numeroMarco, data: newData} })
  }, [notes])

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
            value={glass}
            size="small"
            onChange={(e) => setGlass(e.target.value)}
            disabled={!dataFrame?.medidas?.longitud}
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
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
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
