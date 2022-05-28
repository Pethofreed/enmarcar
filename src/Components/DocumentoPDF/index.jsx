import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Archivo  = (props) => {

  const { ordenDeTrabajo } = props || {};

  const [marcoUno, setMarcoUno] = useState(
    Object.values(ordenDeTrabajo)?.find(( { nombre }) => nombre === "Primer marco")
  );

  useEffect(() => {
    setMarcoUno(Object.values(ordenDeTrabajo)?.find(( { nombre }) => nombre === "Primer marco"));
  }, [ordenDeTrabajo])

  return(
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
    }}>
      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}>
        <h2 style={{
          textAlign: "center",
        }}>
          Orden de trabajo
        </h2>














        {/* PRIMER MARCO  */}
        <div style={{
          width: "80%",
          height: "100%",
          display: "flex",
          padding: "20px",
          backgroundColor: "#eee",
          borderRadius: "10px",
          boxSizing: "border-box",
        }}>
          <div>
            <h2 style={{
              marginBottom: "10px",
              textDecoration: "underline",
            }}>
              Primer marco
            </h2>
            <div style={{
              display: "flex",
              marginBottom: "-5px",
            }}>
              <p style={{
                margin: "5px 30px -5px 0",
                fontWeight: "bold",
              }}>Enmarcar:
                <span style={{
                  textTransform: "capitalize",
                  marginLeft: "5px",
                  fontWeight: "400",
                }}>
                  {marcoUno?.enmarcar}
                </span>
              </p>

              <p style={{
                margin: "5px 0",
                fontWeight: "bold",
              }}>Medidas: (
                <span style={{
                  textTransform: "capitalize",
                  margin: "0 5px",
                  fontWeight: "400",
                }}>
                  Alto: {marcoUno?.medidas?.alto}
                </span>

                <span style={{
                  textTransform: "capitalize",
                  margin: "0 5px",
                  fontWeight: "400",
                }}>
                  Ancho: {marcoUno?.medidas?.ancho}
                </span>
              )</p>
            </div>

            <p style={{
              margin: "5px 0",
              fontWeight: "bold",
            }}>
              <span style={{
                textTransform: "capitalize",
                margin: "0 5px 5px 0",
                fontWeight: "bold",
              }}>
                Material:
              </span>

              <span style={{
                textTransform: "capitalize",
                margin: "0 30px 0 0",
                fontWeight: "400",
              }}>
                {marcoUno?.materiales?.tipo}
              </span>

              <span style={{
                textTransform: "capitalize",
                margin: "0 5px",
                fontWeight: "bold",
              }}>
                Referencia:
              </span>

              <span style={{
                margin: "0 30px 0 0",
                textTransform: "capitalize",
                fontWeight: "400",
              }}>
                {marcoUno?.materiales?.material}
              </span>

              <span style={{
                textTransform: "capitalize",
                margin: "0 5px",
                fontWeight: "bold",
              }}>
                Marco:
              </span>

              <span style={{
                textTransform: "capitalize",
                fontWeight: "400",
              }}>
                {marcoUno?.materiales?.modificado}
              </span>
            </p>

            {marcoUno?.materiales?.modificado !== "estandar" && (
              <p style={{
                margin: "5px 0",
                fontWeight: "bold",
              }}>Caracteristicas del personalizado:
                <span style={{
                  textTransform: "capitalize",
                  margin: "0 5px",
                  fontWeight: "400",
                }}>
                  {marcoUno?.materiales?.caracteristicas}
                </span>
              </p>
            )}





            {/* ------------ PASPARTOUT ----------------- */}
            {marcoUno?.paspartout ? (
              <>
                <div style={{
                  display: "flex",
                  marginBottom: "-5px",
                }}>

                  <p style={{
                    margin: "20px 30px 5px 0",
                    fontWeight: "bold",
                  }}>Paspartout:
                    <span style={{
                      textTransform: "capitalize",
                      marginLeft: "5px",
                      fontWeight: "400",
                    }}>
                      Sí
                    </span>
                  </p>

                  <p style={{
                    margin: "20px 0 5px 0",
                    fontWeight: "bold",
                  }}>Medidas: (
                    <span style={{
                      textTransform: "capitalize",
                      margin: "0 5px",
                      fontWeight: "400",
                    }}>
                      Alto: {marcoUno?.paspartoutDetails?.paspartoutAlto}
                    </span>

                    <span style={{
                      textTransform: "capitalize",
                      margin: "0 5px",
                      fontWeight: "400",
                    }}>
                      Ancho: {marcoUno?.paspartoutDetails?.paspartoutAncho}
                    </span>
                  )</p>
                </div>

                <p style={{
                  margin: "5px 0",
                  fontWeight: "bold",
                }}>
                  <span style={{
                    textTransform: "capitalize",
                    margin: "0 5px 5px 0",
                    fontWeight: "bold",
                  }}>
                    Color:
                  </span>

                  <span style={{
                    textTransform: "capitalize",
                    margin: "0 30px 0 0",
                    fontWeight: "400",
                  }}>
                    {marcoUno?.paspartoutDetails?.paspartoutColor || 'Ninguno'}
                  </span>

                  <span style={{
                    textTransform: "capitalize",
                    margin: "0 5px",
                    fontWeight: "bold",
                  }}>
                    Tipo:
                  </span>

                  <span style={{
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}>
                    {marcoUno?.paspartoutDetails?.tipoPaspartout}
                  </span>
                </p>

                {marcoUno?.paspartoutDetails?.tipoPaspartout === 'flotante' && (
                  <p style={{
                    margin: "5px 0",
                    fontWeight: "bold",
                  }}>
                    <span style={{
                      margin: "0 5px 5px 0",
                      fontWeight: "bold",
                    }}>
                      Con o sin marco:
                    </span>

                    <span style={{
                      textTransform: "capitalize",
                      margin: "0 30px 0 0",
                      fontWeight: "400",
                    }}>
                      {marcoUno?.paspartoutDetails?.marco === 'sin_marco' ? 'Sin marco' : 'Con marco'}
                    </span>
                  </p>
                )}

                {marcoUno?.paspartoutDetails?.marco === 'con_marco' && (
                  <p style={{
                    margin: "5px 0",
                    fontWeight: "bold",
                  }}>Materiales paspartout: (
                    <span style={{
                      textTransform: "capitalize",
                      margin: "0 5px",
                      fontWeight: "400",
                    }}>
                      Tipo: {marcoUno?.paspartoutDetails?.marcoDetails?.tipo}
                    </span>

                    <span style={{
                      textTransform: "capitalize",
                      margin: "0 5px",
                      fontWeight: "400",
                    }}>
                      Codigo Material: {marcoUno?.paspartoutDetails?.marcoDetails?.material}
                    </span>

                    <span style={{
                      textTransform: "capitalize",
                      margin: "0 5px",
                      fontWeight: "400",
                    }}>
                      Marco: {marcoUno?.paspartoutDetails?.marcoDetails?.modificado}
                    </span>
                  )</p>
                )}

                {marcoUno?.paspartoutDetails?.marcoDetails.modificado === 'personalizado' && (
                  <p style={{
                    margin: "5px 0",
                    fontWeight: "bold",
                  }}>Caracteristicas del personalizado:
                    <span style={{
                      textTransform: "capitalize",
                      margin: "0 5px",
                      fontWeight: "400",
                    }}>
                      {marcoUno?.paspartoutDetails?.marcoDetails.caracteristicas}
                    </span>
                  </p>
                )}
              </>
            ) : (
              <p style={{
                margin: "20px 30px 5px 0",
                fontWeight: "bold",
              }}>Paspartout:
                <span style={{
                  textTransform: "capitalize",
                  marginLeft: "5px",
                  fontWeight: "400",
                }}>
                  No
                </span>
              </p>
            )}




            {/* ------------------------ VIDRIO -------------- */}
            <p style={{
              margin: "20px 0 5px 0",
              fontWeight: "bold",
            }}>
              <span style={{
                margin: "0 5px 5px 0",
                fontWeight: "bold",
              }}>
                Vidrio:
              </span>

              <span style={{
                textTransform: "capitalize",
                margin: "0 30px 0 0",
                fontWeight: "400",
              }}>
                {marcoUno?.vidrio === 'anti_reflejo' && 'Anti reflejo'}
                {marcoUno?.vidrio === 'claro4mm' && 'Claro 4mm'}
                {marcoUno?.vidrio === 'vinilo' && 'Vinilo'}
                {marcoUno?.vidrio === 'espejo3mm' && 'Espejo 3mm'}
                {marcoUno?.vidrio === 'espejo4mm' && 'Espejo 4mm'}
              </span>
            </p>





            {/* ------------------------ APUNTES GENERALES -------------- */}
            {marcoUno?.anotaciones && (
              <p style={{
                margin: "5px 0",
                fontWeight: "bold",
              }}>
                <span style={{
                  margin: "0 5px 5px 0",
                  fontWeight: "bold",
                }}>
                  Notas:
                </span>

                <span style={{
                  textTransform: "capitalize",
                  margin: "0 30px 0 0",
                  fontWeight: "400",
                }}>
                  {marcoUno?.anotaciones}
                </span>
              </p>
            )}


          </div>
        </div>
      </div>
    </div>
  )
}