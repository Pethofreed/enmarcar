import './styles.css';
import { useEffect, useState } from 'react';
import Material from '../Material';
import Paspartout from '../Paspartout';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import GeneralComponent from '../GeneralComponent';
import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const Enmarcación = ({
  otroMarco, setOtroMarco, ultimo
}) => {

  const [notas, setNotas] = useState('');
  const [material, setMaterial] = useState('');
  const [vidrio, setVidrio] = useState('anti_reflejo');
  const [altoPaspartout, setAltoPaspartout] = useState(0);
  const [anchoPaspartout, setAnchoPaspartout] = useState(0);
  const [caracteristicas, setCaracteristicas] = useState('');
  const [tipoMaterial, setTipoMaterial] = useState('plastico');
  const [materialValue, setMaterialValue] = useState('estandar');

  useEffect(() => {
    materialValue === 'estandar' && setCaracteristicas('')
  }, [materialValue])

  return (
    <div className="enmarcacion-container">
      <GeneralComponent />

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

      <Divider />

      <Paspartout
        altoPaspartout={altoPaspartout}
        setAltoPaspartout={setAltoPaspartout}
        anchoPaspartout={anchoPaspartout}
        setAnchoPaspartout={setAnchoPaspartout}
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
          >
            <MenuItem value="anti_reflejo">Anti reflejo</MenuItem>
            <MenuItem value="claro">Claro</MenuItem>
            <MenuItem value="vinilo">Vinilo</MenuItem>
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
