import { useEffect, useState } from "react";
import Enmarcación from "../Enmarcacion";
import { useSelector } from "react-redux";

const EnmarcacionFinal = () => {

  const { ordenDeTrabajo } = useSelector(({PreciosReducer}) => ({
    ordenDeTrabajo: PreciosReducer.ordenDeTrabajo,
  }))

  const [total, setTotal] = useState(0);

  useEffect(() => {

  }, [ordenDeTrabajo])

  // const data = Object.values(ordenDeTrabajo)?.find(( { nombre }) => nombre === nombreMarco);

  const [nuevoMarco1, setNuevoMarco1] = useState(false);
  const [nuevoMarco2, setNuevoMarco2] = useState(false);
  const [nuevoMarco3, setNuevoMarco3] = useState(false);
  const [nuevoMarco4, setNuevoMarco4] = useState(false);
  const [nuevoMarco5, setNuevoMarco5] = useState(false);

  return(
    <>
      <Enmarcación
        otroMarco={nuevoMarco1}
        setOtroMarco={setNuevoMarco1}
        nombreMarco='Primer marco'
        numeroMarco='primero'
      />
      {nuevoMarco1 && (
        <Enmarcación
          otroMarco={nuevoMarco2}
          setOtroMarco={setNuevoMarco2}
          nombreMarco='Segundo marco'
          numeroMarco='segundo'
        />
      )}
      {nuevoMarco2 && (
        <Enmarcación
          otroMarco={nuevoMarco3}
          setOtroMarco={setNuevoMarco3}
          nombreMarco='Tercer marco'
          numeroMarco='tercero'
        />
      )}
      {nuevoMarco3 && (
        <Enmarcación
          otroMarco={nuevoMarco4}
          setOtroMarco={setNuevoMarco4}
          nombreMarco='Cuarto marco'
          numeroMarco='cuarto'
        />
      )}
      {nuevoMarco4 && (
        <Enmarcación
          otroMarco={nuevoMarco5}
          setOtroMarco={setNuevoMarco5}
          nombreMarco='Quinto marco'
          numeroMarco='quinto'
        />
      )}
      {nuevoMarco5 && (
        <Enmarcación
          ultimo precio="precio-seis"
          nombreMarco='Sexto marco'
          numeroMarco='sexto'
        />
      )}
      <div>
        <h1>Total: $ {total ? total : 0} Pesos</h1>
      </div>

    </>
  )
}

export default EnmarcacionFinal;
