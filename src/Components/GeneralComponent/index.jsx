import './styles.css';
import { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import Divider from '@mui/material/Divider';
import { calcularLongitud } from '../Helpers';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_DATA } from '../../Store/PreciosReducer';
import FormControlLabel from '@mui/material/FormControlLabel';

const GeneralComponent = ({ numeroMarco, nombreMarco }) => {

  const { ordenDeTrabajo } = useSelector(({PreciosReducer}) => ({
    ordenDeTrabajo: PreciosReducer.ordenDeTrabajo,
  }))

  const data = Object.values(ordenDeTrabajo)?.find(( { nombre }) => nombre === nombreMarco);

  const [alto, setAlto] = useState(0);
  const [ancho, setAncho] = useState(0);

  const dispatch = useDispatch();
  const longitud = (alto && ancho) && calcularLongitud(alto, ancho);
  const [tipoCuadro, setTipoCuadro] = useState('foto');

  const cambioTipoCuadro = (e) => {
    setTipoCuadro(e.target.value);
  }

  useEffect(() => {
    if (longitud) {
      const newData = { ...data, medidas: { alto, ancho, longitud }}
      dispatch({ type: CHANGE_DATA, payload: { marco: numeroMarco, data: newData} })
    } else {
      const newData = { ...data, medidas: { alto: 0, ancho: 0, longitud : 0}}
      dispatch({ type: CHANGE_DATA, payload: { marco: numeroMarco, data: newData} })
    }
  }, [longitud])

  useEffect(() => {
    const newData = { ...data, enmarcar: tipoCuadro}
    dispatch({ type: CHANGE_DATA, payload: { marco: numeroMarco, data: newData} })
  }, [tipoCuadro])

  return (
    <div className="enmarcacion-container">
      {nombreMarco === 'Primer marco' && (
        <div className="enmarcacion-type-of-picture">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="type-of-picture"
              name="radio-buttons-group"
              value={tipoCuadro}
              onChange={cambioTipoCuadro}
            >
              <FormControlLabel value="foto" control={<Radio  />} label="Foto" />
              <FormControlLabel value="pintura" control={<Radio  />} label="Pintura" />
              <FormControlLabel value="imagen" control={<Radio  />} label="Imagen" />
              <FormControlLabel value="otro" control={<Radio  />} label="Otro" />
            </RadioGroup>
          </FormControl>
        </div>
      )}

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
        {longitud !== 0 && (
          <Typography>
            Total: {longitud}
          </Typography>
        )}
      </div>
      <Divider />
    </div>
  )
}

export default GeneralComponent;
