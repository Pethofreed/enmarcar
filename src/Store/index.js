import thunk from 'redux-thunk'
import { PreciosReducer } from './PreciosReducer'

import { createStore, combineReducers, applyMiddleware } from 'redux'

const appReducers = combineReducers({
  PreciosReducer
})

const rootReducer = (state, action) => {
  if(action.type === 'USER_LOGOUT'){
    state = undefined
  }
  return appReducers(state, action)
}

const middlewares = applyMiddleware(thunk)

export const store = createStore(rootReducer, middlewares)