import { Divider, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import GeneralComponent from "../GeneralComponent";
import "./styles.css";

const Retablo = () => {

  const [tipo, setTipo] = useState('MDF')

  return (
    <>
      <GeneralComponent />

      <div className="enmarcacion-type-of-picture">
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="type-of-picture"
            name="radio-buttons-group"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <FormControlLabel value="MDF" control={<Radio  />} label="MDF" />
            <FormControlLabel value="Tablero" control={<Radio  />} label="Tablero" />
          </RadioGroup>
        </FormControl>
      </div>

      <Divider />


    </>
  )
}

export default Retablo;
