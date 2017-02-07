import {FETCH_WEATHER} from '../actions/index'

export default function (state=[], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return a brand new state array by concating the
      // existing data with the new data.
      // DONT MUTATE STATE. ALWAYS RETURN A NEW STATE. dont use state.push()
      // return state.concat([action.payload.data]) //new entry at the end
      return [action.payload.data, ...state] //new entry at the beginning
    default:

  }
  return state
}
