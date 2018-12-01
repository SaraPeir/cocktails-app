import { UPDATE_INFO_RHUM } from '../actions';

const initialState = {
    drinksDataRhum: []
}

export function updateInfoRhum(state = initialState, action) {
  switch (action.type) {
      case UPDATE_INFO_RHUM:
          return Object.assign({}, state, {drinksDataRhum: action.drinksArrayRhum}) //action.[desde dispatch( { type: UPDATE_INFO, drinksArray: response.data.drinks } in action]
      default:
          return state
  }
}
