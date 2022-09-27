import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk"; 

import {userReducer, userDeleteReducer} from "./userDucks";

const rootReducer = combineReducers({
  usuarios: userReducer,
  usuariosDelete: userDeleteReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStrore(){
  const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ))
  return store;
} 
