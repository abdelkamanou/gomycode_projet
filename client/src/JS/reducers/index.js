import {combineReducers} from "redux"
import {userReducer} from "./user"
import {serviceuserReducer} from "./serviceuser"
import {register_verificationReducer } from "./verifyregisteruser"

export const rootReducer=combineReducers({userReducer:userReducer,serviceuserReducer:serviceuserReducer,register_verificationReducer :register_verificationReducer })
