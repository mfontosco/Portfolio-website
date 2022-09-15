import { applyMiddleware, createStore } from "redux";
import rootreducers from "./Reducers/Index";
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = [thunk]

let devTools;
if(process.env.NODE_ENV === "development"){
    devTools =composeWithDevTools(applyMiddleware(...middleware))
}else{
   devTools= applyMiddleware(...middleware)
}

const store =createStore(rootreducers,devTools)

export default store;