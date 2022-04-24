export const CHANGE_DATA = 'CHANGE_DATA';
export const CHANGE_MATERIAL = 'CHANGE_MATERIAL';


const initialState = {
  ordenDeTrabajo: {
    primero: {
      nombre: 'Primer marco',
      enmarcar: 'foto',
      medidas: {
        alto: 0, ancho: 0, longitud: 0
      },
      materiales: {
        tipo: 'plastico',
        material: 'Elegir...',
        modificado: 'estandar',
        caracteristicas: '',
      },
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
      vidrio: 'anti_reflejo',
      anotaciones: '',
      precioMaterial: 0,
      precioPaspartout: 0,
    },
    segundo: {
      nombre: 'Segundo marco',
      enmarcar: 'foto',
      medidas: {
        alto: 0, ancho: 0, longitud: 0
      },
      materiales: {
        tipo: 'plastico',
        material: 'Elegir...',
        modificado: 'estandar',
        caracteristicas: '',
      },
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
      vidrio: 'anti_reflejo',
      anotaciones: '',
      precioMaterial: 0,
      precioPaspartout: 0,
    },
    tercero: {
      nombre: 'Tercer marco',
      enmarcar: 'foto',
      medidas: {
        alto: 0, ancho: 0, longitud: 0      },
      materiales: {
        tipo: 'plastico',
        material: 'Elegir...',
        modificado: 'estandar',
        caracteristicas: '',
      },
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
      vidrio: 'anti_reflejo',
      anotaciones: '',
      precioMaterial: 0,
      precioPaspartout: 0,
    },
    cuarto: {
      nombre: 'Cuarto marco',
      enmarcar: 'foto',
      medidas: {
        alto: 0, ancho: 0, longitud: 0      },
      materiales: {
        tipo: 'plastico',
        material: 'Elegir...',
        modificado: 'estandar',
        caracteristicas: '',
      },
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
      vidrio: 'anti_reflejo',
      anotaciones: '',
      precioMaterial: 0,
      precioPaspartout: 0,
    },
    quinto: {
      nombre: 'Quinto marco',
      enmarcar: 'foto',
      medidas: {
        alto: 0, ancho: 0, longitud: 0      },
      materiales: {
        tipo: 'plastico',
        material: 'Elegir...',
        modificado: 'estandar',
        caracteristicas: '',
      },
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
      vidrio: 'anti_reflejo',
      anotaciones: '',
      precioMaterial: 0,
      precioPaspartout: 0,
    },
    sexto: {
      nombre: 'Sexto marco',
      enmarcar: 'foto',
      medidas: {
        alto: 0, ancho: 0, longitud: 0      },
      materiales: {
        tipo: 'plastico',
        material: 'Elegir...',
        modificado: 'estandar',
        caracteristicas: '',
      },
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
      vidrio: 'anti_reflejo',
      anotaciones: '',
      precioMaterial: 0,
      precioPaspartout: 0,
    },
  }
}

export function PreciosReducer(state = initialState, action){
  switch(action.type) {
    case CHANGE_DATA:
      return {
        ...state,
        ordenDeTrabajo: {
          ...state.ordenDeTrabajo,
          [action.payload.marco]: action.payload.data
        }
      }
    case CHANGE_MATERIAL:
      return {
        ...state,
        precios: action.payload
      }
    default:
      return state
  }
}