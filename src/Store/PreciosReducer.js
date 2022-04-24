export const CHANGE_DATA = 'CHANGE_DATA';
export const CHANGE_MATERIAL = 'CHANGE_MATERIAL';
// export const GUARDAR_PRECIO = 'GUARDAR_PRECIO';


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
    // case CALCULAR_TOTAL:
    //   return {
    //     ...state,
    //     total: Object.values(state.precios).map(num => num).reduce((a,b) => a +b, 0),
    //   }
    // case USER_FINISHED:
    //   return {
    //     ...state,
    //     loading: false,
    //   }
    default:
      return state
  }
}