import { useState } from "react";
import Enmarcación from "../Enmarcacion";

const EnmarcacionFinal = () => {

  const [nuevoMarco1, setNuevoMarco1] = useState(false);
  const [nuevoMarco2, setNuevoMarco2] = useState(false);
  const [nuevoMarco3, setNuevoMarco3] = useState(false);
  const [nuevoMarco4, setNuevoMarco4] = useState(false);
  const [nuevoMarco5, setNuevoMarco5] = useState(false);

  return(
    <>
      <Enmarcación otroMarco={nuevoMarco1} setOtroMarco={setNuevoMarco1} />
      {nuevoMarco1 && (
        <Enmarcación otroMarco={nuevoMarco2} setOtroMarco={setNuevoMarco2} />
      )}
      {nuevoMarco2 && (
        <Enmarcación otroMarco={nuevoMarco3} setOtroMarco={setNuevoMarco3} />
      )}
      {nuevoMarco3 && (
        <Enmarcación otroMarco={nuevoMarco4} setOtroMarco={setNuevoMarco4} />
      )}
      {nuevoMarco4 && (
        <Enmarcación otroMarco={nuevoMarco5} setOtroMarco={setNuevoMarco5} />
      )}
      {nuevoMarco5 && (
        <Enmarcación  ultimo/>
      )}
    </>
  )
}

export default EnmarcacionFinal;
