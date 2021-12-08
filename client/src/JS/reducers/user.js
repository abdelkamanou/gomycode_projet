import { LOAD_USER,
     REGISTER_USER,
      LOGIN_USER,
       FAIL_USER,
        LOGOUT_USER, 
        CURRENT_USER,
        DELETE_USER_SUCCESS,
        LOAD_DELETE_USER,
        DELETE_USER_FAIL } from "../constants/users"

const initialState = {
    loading: false,
    user: {},
    errors: null,
    loaddashboard : true,
    loadDeleteUser : false,
    registerUser: false,
    getcurrentreducer:false
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, loading: true }
        case REGISTER_USER:
            return { ...state,errors:null, user: payload, loading: false ,registerUser : true}
        case LOGIN_USER:
            localStorage.setItem("token", payload.token)
            return { ...state,errors:null, user: payload.user, loading: false,loaddashboard :false }
        case CURRENT_USER:
            return { ...state,errors:null, user: payload, loading: false ,getcurrentreducer:true}
        case FAIL_USER:
            return { ...state, errors: payload, loading: false }
        case LOGOUT_USER:
            localStorage.removeItem("token")
            return {
                loading: false,
                user: {},
                errors: null,
                loaddashboard : true
            }
        case LOAD_DELETE_USER:
            return { ...state, loadDeleteUser: true }
        case DELETE_USER_SUCCESS:
            return { ...state, loadDeleteUser: false }
                //localStorage.removeItem("token")
            

        case  DELETE_USER_FAIL:
            return { ...state, errors: payload, loadDeleteUser: false }
        default:
            return state
    }
}