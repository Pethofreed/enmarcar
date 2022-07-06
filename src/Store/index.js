import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { TabsReducer } from './TabsReducer'
import { PreciosReducer } from './PreciosReducer'

import { createStore, combineReducers, applyMiddleware } from 'redux'

const appReducers = combineReducers({
  PreciosReducer,
  TabsReducer,
})

const rootReducer = (state, action) => {
  if(action.type === 'USER_LOGOUT'){
    state = undefined
  }
  return appReducers(state, action)
}

const middlewares = applyMiddleware(thunk, logger)

export const store = createStore(rootReducer, middlewares)