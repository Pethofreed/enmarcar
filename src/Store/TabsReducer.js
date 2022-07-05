export const CHANGE_TAB = 'CHANGE_TAB';

const initialState = {
  activeTab: 0,
}

export function TabsReducer(state = initialState, action){
  switch(action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      }
    default:
      return state
  }
}