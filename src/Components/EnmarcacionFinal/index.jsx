import { useState } from "react";
import Enmarcación from "../Enmarcacion";
import { useSelector } from "react-redux";

const EnmarcacionFinal = () => {

  const { precios, total } = useSelector(({PreciosReducer}) => ({
    precios: PreciosReducer.precios,
    total: PreciosReducer.total,
  }))

  const [allPrecios, setAllPrecios] = useState({
    precio_uno: 0,
    precio_dos: 0,
    precio_tres: 0,
    precio_cuatro: 0,
    precio_cinco: 0,
  });

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
        precio="precio_uno"
        allPrecios={allPrecios}
        setAllPrecios={setAllPrecios}
        ComponenteMedidas
      />
      {nuevoMarco1 && (
        <Enmarcación
          otroMarco={nuevoMarco2}
          setOtroMarco={setNuevoMarco2}
          precio="precio_dos"
          allPrecios={allPrecios}
          setAllPrecios={setAllPrecios}
          marco='Dos'
        />
      )}
      {nuevoMarco2 && (
        <Enmarcación
          otroMarco={nuevoMarco3}
          setOtroMarco={setNuevoMarco3}
          precio="precio_tres"
          allPrecios={allPrecios}
          setAllPrecios={setAllPrecios}
          marco='Tres'
        />
      )}
      {nuevoMarco3 && (
        <Enmarcación
          otroMarco={nuevoMarco4}
          setOtroMarco={setNuevoMarco4}
          precio="precio_cuatro"
          allPrecios={allPrecios}
          setAllPrecios={setAllPrecios}
          marco='Cuatro'
        />
      )}
      {nuevoMarco4 && (
        <Enmarcación
          otroMarco={nuevoMarco5}
          setOtroMarco={setNuevoMarco5}
          precio="precio_cinco"
          allPrecios={allPrecios}
          setAllPrecios={setAllPrecios}
          marco='Cinco'
        />
      )}
      {nuevoMarco5 && (
        <Enmarcación
          ultimo precio="precio-seis"
          allPrecios={allPrecios}
          setAllPrecios={setAllPrecios}
          marco='Seis'
        />
      )}
      <div>
        <h1>Total: $ {total} Pesos</h1>
      </div>

    </>
  )
}

export default EnmarcacionFinal;
