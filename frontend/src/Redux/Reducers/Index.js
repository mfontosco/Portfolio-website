import { combineReducers } from "redux";
import { contactAdminReducer } from "./ContactAdminReducer";

const rootreducers = combineReducers({
    contact:contactAdminReducer
})

export default rootreducers