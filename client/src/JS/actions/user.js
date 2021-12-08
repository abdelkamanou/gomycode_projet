import { LOAD_USER, 
    REGISTER_USER, 
    LOGIN_USER,
     FAIL_USER, 
     LOGOUT_USER, 
     CURRENT_USER ,
     FAIL_VERIFICATION_REGISTER_USER,
     LOAD_VERIFICATION_REGISTER_USER ,
     VERIFICATION_REGISTER_USER,
     LOAD_CONFIRMATION_TOKEN,
     CONFIRMATION_TOKEN_SUCCES,
     CONFIRMATION_TOKEN_FAIL,
    SAVE_USER,
    DELETE_USER_SUCCESS,
    LOAD_DELETE_USER,
    DELETE_USER_FAIL,
    DELETE_TOKEN_FAIL,
    DELETE_TOKEN_SUCCESS,
    LOAD_DELETE_TOKEN} from "../constants/users"
import axios from "axios"

export const registerUser = (user,history) => async dispatch => {
    dispatch({ type: LOAD_USER })
    try {
        const response = await axios.post("http://localhost:5012/api/user/register", user)
        dispatch({ type: REGISTER_USER, payload: response.data.user })
        history.push("/login")
    } catch (error) {
        console.dir(error.response.data)
        const { errors, msg } = error.response.data
        if (msg) { alert(msg) }
        if (Array.isArray(errors)) {
            errors.forEach(err => {
                alert(err.msg)
            })
        }
        dispatch({ type: FAIL_USER, payload: error.response.data })
    }
}

export const verificationRegisterUser = (register_user_verefication, history) => async dispatch => {
    dispatch({ type: LOAD_VERIFICATION_REGISTER_USER })
    try {
        
        const response = await axios.post("http://localhost:5012/api/user/Register_verification", register_user_verefication)
        dispatch({ type: VERIFICATION_REGISTER_USER, payload: response.data.register_user_verefication})
        history.push("/verify_registration")
    } catch (error) {
        console.dir(error.response.data)
        const { errors, msg } = error.response.data
        if (msg) { alert(msg) }
        if (Array.isArray(errors)) {
            errors.forEach(err => {
                alert(err.msg)
            })
        }
        dispatch({ type: FAIL_VERIFICATION_REGISTER_USER, payload: error.response.data })
    }
}




export const loginUser = (userAuth, history) => async dispatch => {
    dispatch({ type: LOAD_USER })
    try {
        const response = await axios.post("/api/user/login", userAuth)
        dispatch({ type: LOGIN_USER, payload: response.data })
        history.push(`/:${userAuth.email}`)
    } catch (error) {

        const { errors, msg } = error.response.data
        if (msg) { alert(msg) }
        if (Array.isArray(errors)) {
            errors.forEach(err => {
                alert(err.msg)
            })
        }
        dispatch({ type: FAIL_USER, payload: error.response.data })
    }
}

export const currentUser = () => async dispatch => {
    dispatch({ type: LOAD_USER })
    try {
        const opts = {
            headers:
                { Authorization: localStorage.getItem("token") }
        }
        const response = await axios.get("http://localhost:5012/api/user/current", opts)
        dispatch({ type: CURRENT_USER, payload: response.data.user })
       

    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data })
    }
}

export const logout = () => {
    return { type: LOGOUT_USER }
}


export const confirmRegister = ( user )=> async dispatch => {
   dispatch( {type : LOAD_CONFIRMATION_TOKEN})
try {
 const response= await axios.post("http://localhost:5012/api/user/Confirm_registration",user)
  dispatch( {type: CONFIRMATION_TOKEN_SUCCES, payload : response.data.user})
}catch(error) {
    dispatch({type: CONFIRMATION_TOKEN_FAIL, payload : error.response.data})
}

}

export const saveUser = (user) => dispatch =>{
    dispatch({type :SAVE_USER,payload:user })

}

// Delete contact by id
export const deleteUserby_id = (id)=> async dispatch =>{
    dispatch({type:LOAD_DELETE_USER})
    try {
        const result = await axios.delete(`http://localhost:5012/api/user/${id}`,)
        dispatch({type: DELETE_USER_SUCCESS,payload : result.data})
    } catch (error) {
        dispatch({type: DELETE_USER_FAIL, payload : error.response.data})
    }
}

// Delete token verification of the user was deleted
export const deleteTokenRegiterVerification = (token_mail_verification,history)=> async dispatch =>{
    dispatch({type:LOAD_DELETE_TOKEN})
    try {
        const result = await axios.delete(`http://localhost:5012/api/user/Register_verification/${token_mail_verification}`)
        dispatch({type: DELETE_TOKEN_SUCCESS,payload : result.data})
        history.push("/login")
    } catch (error) {
        dispatch({type: DELETE_TOKEN_FAIL, payload : error.response.data})
    }
}
// Delete by mail acount verification of the user want to deleted
export const deletebyEmailAcountVerification = (email)=> async dispatch =>{
    dispatch({type:LOAD_DELETE_TOKEN})
    try {
        const result = await axios.delete(`http://localhost:5012/api/user/Register_verification/${email}`)
        dispatch({type: DELETE_TOKEN_SUCCESS,payload : result.data})
    } catch (error) {
        dispatch({type: DELETE_TOKEN_FAIL, payload : error.response.data})
    }
}

// Delete contact by email
export const deleteUser_by_mail = (email)=> async dispatch =>{
    dispatch({type:LOAD_DELETE_USER})
    try {
        const result = await axios.delete(`http://localhost:5012/api/user/${email}`,)
        dispatch({type: DELETE_USER_SUCCESS,payload : result.data})
    } catch (error) {
        dispatch({type: DELETE_USER_FAIL, payload : error.response.data})
    }
}