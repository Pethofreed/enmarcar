export const CALCULAR_TOTAL = 'CALCULAR_TOTAL';
export const GUARDAR_PRECIO = 'GUARDAR_PRECIO';
const USER_SUCCESS = 'USER_SUCCESS';
const USER_LOADING = 'USER_LOADING';
const USER_FINISHED = 'USER_FINISHED';


const initialState = {
  precios : {},
  total: 0,
  error: null,
  precioFinal: 0,
}

export function PreciosReducer(state = initialState, action){
  switch(action.type) {
    case GUARDAR_PRECIO:
      return {
        ...state,
        precios: action.payload
      }
    case CALCULAR_TOTAL:
      return {
        ...state,
        total: Object.values(state.precios).map(num => num).reduce((a,b) => a +b, 0),
      }
    // case USER_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
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