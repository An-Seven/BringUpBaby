import state from './state.js'
import { createStore ,combineReducers} from 'redux'
import * as types from './types'
const reducer = (state, action) => {
      let { type, data } = action;
      switch (type) {
            case types.VIEW_LOADING:
                  return Object.assign({}, state, { blLoding: data })
            default:
                  return state;
      }
}
let store = createStore(reducer,state)
export default store