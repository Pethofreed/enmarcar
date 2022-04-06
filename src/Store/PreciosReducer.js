const SAVE_USER = 'SAVE_USER'
const USER_ERROR = 'USER_ERROR'
const USER_SUCCESS = 'USER_SUCCESS'
const USER_LOADING = 'USER_LOADING'
const USER_FINISHED = 'USER_FINISHED'


const initialState = {
  user: {},
  loading: false,
  error: null,
}

export function PreciosReducer(state = initialState, action){
  switch(action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      }
    case USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      }
    case USER_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case USER_FINISHED:
      return {
        ...state,
        loading: false,
      }
    case SAVE_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}