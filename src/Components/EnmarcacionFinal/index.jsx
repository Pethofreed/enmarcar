import './styles.css';
import { useState } from "react";
import { formatter } from "../Helpers";
import Enmarcación from "../Enmarcacion";
import { useSelector } from "react-redux";
import { Archivo } from "../DocumentoPDF";
import { Button, Divider } from "@mui/material";

const EnmarcacionFinal = () => {

  const { ordenDeTrabajo } = useSelector(({PreciosReducer}) => ({
    ordenDeTrabajo: PreciosReducer.ordenDeTrabajo,
  }))

  const preciosMaterial = Object.values(ordenDeTrabajo)?.map(( { precioMaterial }) => precioMaterial)
  .reduce((a,b) => a + b, 0);
  const preciosVidrios = Object.values(ordenDeTrabajo)?.map(( { precioVidrio }) => precioVidrio)
  .reduce((a,b) => a + b, 0);

  const total = preciosMaterial + preciosVidrios;

  const [generarPdf, setGenerarPdf] = useState(false);
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
        <h1 className="total">
          Total: {total ? formatter.format(total) : 0} Pesos
        </h1>
      </div>

      <Button variant="contained" onClick={() => setGenerarPdf(!generarPdf)} disabled={!preciosMaterial}>
        Generar PDF
      </Button>

      {generarPdf && (
        <>
          <div className="mt-20">
            <Divider />
          </div>
          <Archivo ordenDeTrabajo={ordenDeTrabajo} />
        </>
      )}

    </>
  )
}

export default EnmarcacionFinal;
