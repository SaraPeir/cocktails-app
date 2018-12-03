import { CREATE_RHUM_SELECT_OPTIONS } from '../actions';

const initialState = {
    rhumOptions: []
}

export function createRhumOptions(state = initialState, action) {
  switch (action.type) {
      case CREATE_RHUM_SELECT_OPTIONS:
          return Object.assign({}, state, {rhumOptions: action.optionsRhum }) //action.[desde dispatch( { type: UPDATE_INFO, drinksArray: response.data.drinks } in action]
      default:
          return state
  }
}
