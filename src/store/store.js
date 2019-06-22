import state from './state.js'
import {createStore} from 'redux'
import * as types from './types'
const reducer=(state,action)=>{
       let {type,data}=action;
      switch(type){
            case types.VIEW_NAV:
                  console.log(data)
               return  Object.assign({},state,{blnav:data})
            default:
                    return state;
      }
}
let store =createStore(reducer,state)
export default store