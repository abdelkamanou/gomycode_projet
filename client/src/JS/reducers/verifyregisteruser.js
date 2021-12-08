import {
    FAIL_VERIFICATION_REGISTER_USER,
    LOAD_VERIFICATION_REGISTER_USER ,
    VERIFICATION_REGISTER_USER,
    LOAD_CONFIRMATION_TOKEN,
    CONFIRMATION_TOKEN_SUCCES,
    CONFIRMATION_TOKEN_FAIL,
    SAVE_USER,
    DELETE_TOKEN_FAIL,
    DELETE_TOKEN_SUCCESS,
    LOAD_DELETE_TOKEN} from "../constants/users"
   
   
    const initialState = {
        loadDleteToken : false,
        loadingverivication: false,
        register_verification: {},
        user:{},
        errors: null,
        confirmation_token : "",
        loadingconfirmationtoken : false,
        confirmSaveUser:false
    }
    export const register_verificationReducer = (state = initialState, { type, payload }) => {
        switch (type) {

            case LOAD_VERIFICATION_REGISTER_USER :
                return { ...state, loadingverivication: true }
            case VERIFICATION_REGISTER_USER:
                return { ...state, register_verification: payload, loadingverivication: false }
            case FAIL_VERIFICATION_REGISTER_USER:
                return { ...state, errors: payload,  loadingverivication: false }

            case LOAD_CONFIRMATION_TOKEN :
                return {...state,  loadingconfirmationtoken :true}
            case   CONFIRMATION_TOKEN_SUCCES : 
                return {...state, confirmation_token: payload, loadingconfirmationtoken :false, confirmSaveUser:true}
            case  CONFIRMATION_TOKEN_FAIL :
                return {...state,errors : payload, loadingconfirmationtoken :false}

            case  LOAD_DELETE_TOKEN :
                return {...state, loadDleteToken :true}
            case  DELETE_TOKEN_SUCCESS :
                return {...state, loadDleteToken :false}
            case  DELETE_TOKEN_FAIL :
                return {...state,errors : payload, loadDleteToken :false}

            case SAVE_USER:    
                return {...state, user:payload}

                
            default:
                return state
        }
    }