import './styles.css';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import MaterialPaspartout from '../MaterialPaspartout';
import { CHANGE_DATA } from '../../Store/PreciosReducer';
import FormControlLabel from '@mui/material/FormControlLabel';

const Paspartout = ({
  nombreMarco, numeroMarco
}) => {

  const { ordenDeTrabajo } = useSelector(({PreciosReducer}) => ({
    ordenDeTrabajo: PreciosReducer.ordenDeTrabajo,
  }))

  const data = Object.values(ordenDeTrabajo)?.find(( { nombre }) => nombre === nombreMarco);

  const dispath = useDispatch();
  const [altoPaspartout, setAltoPaspartout] = useState(0);
  const [anchoPaspartout, setAnchoPaspartout] = useState(0);

  const [color, setColor] = useState('');
  const [marco, setMarco] = useState('sin_marco');
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

  useEffect(() => {
    if (!paspartout) {
      setAltoPaspartout(0)
      setAnchoPaspartout(0)
      setColor('')
      setType('tradicional')
      setMarco('sin_marco')
      setTipoMaterial('plastico')
      setMaterial('Elegir...')
      setCaracteristicas('')
      setMaterialValue('estandar')
      const newData = {
        ...data,
        paspartout: false,
        paspartoutDetails: {
          paspartoutAncho: 0,
          paspartoutAlto: 0,
          paspartoutColor: '',
          tipoPaspartout: 'tradicional',
          marco: 'sin_marco',
          marcoDetails: {
            tipo: 'plastico',
            material: 'Elegir...',
            modificado: 'estandar',
            caracteristicas: '',
          },
        },
      };
      dispath({ type: CHANGE_DATA, payload: { marco: numeroMarco, data: newData} })
    } else {
      const newData = {
        ...data,
        paspartout: true,
        paspartoutDetails: {
          paspartoutAncho: anchoPaspartout,
          paspartoutAlto: altoPaspartout,
          paspartoutColor: color,
          tipoPaspartout: type,
          marco: marco,
          marcoDetails: {
            tipo: tipoMaterial,
            material: material,
            modificado: materialValue,
            caracteristicas,
          },
        },
      };
      dispath({ type: CHANGE_DATA, payload: { marco: numeroMarco, data: newData} })
    }

    if (materialValue === 'estandar')
      setCaracteristicas('')
  }, [paspartout, anchoPaspartout, altoPaspartout, color, marco, type, material, caracteristicas, tipoMaterial ,materialValue])

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
                    <FormControlLabel value="con_marco" control={<Radio />} label="Con marco" />
                    <FormControlLabel value="sin_marco" control={<Radio  />} label="Sin marco" />
                  </RadioGroup>
                </FormControl>
              )}
              {marco === 'con_marco' && (
                <MaterialPaspartout
                  material={material}
                  setMaterial={setMaterial}
                  tipoMaterial={tipoMaterial}
                  setTipoMaterial={setTipoMaterial}
                  materialValue={materialValue}
                  setMaterialValue={setMaterialValue}
                  caracteristicas={caracteristicas}
                  setCaracteristicas={setCaracteristicas}
                  nombreMarco={nombreMarco}
                  numeroMarco={numeroMarco}
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
