import { GET_USERS_FAIL, 
    GET_USERS_LOAD, 
    GET_USERS_SUCCESS ,
    LOAD_ADVANCE_USER,
    ADD_ADVANCED_USER_SUCCES,
    ADD_ADVANCED_USER_FAIL,
    GET_ADV_USR_LOAD,
    GET_ADV_USR_SUCCESS,
    GET_ADV_USR_FAIL,
    CLEAR_SERVICE_REDUCER_LOUGOUT,
    LOAD_DELETE_ADV_USER,
    DELETE_ADV_USER_SUCCESS,
    DELETE_ADV_USER_FAIL,
    GET_USRS_JOB_LOAD,
    GET_USRS_JOB_SUCCESS,
    GET_USRS_JOB_FAIL,
    GET_USRS_JOB_REGION_LOAD,
    GET_USRS_JOB_REGION_SUCCESS,
    GET_USRS_JOB_REGION_FAIL} from '../constants/users'
import axios from 'axios'


//Get all Users
export const getUsers =()=> async (dispatch) =>{
    dispatch({type:GET_USERS_LOAD })
    try {
       
        let result = await axios.get(`http://localhost:5012/api/serviceuser/all_users`)
        dispatch({type: GET_USERS_SUCCESS ,payload:result.data.res})
    } catch (error) {
        dispatch({type:GET_USERS_FAIL,payload:error})
    }

}
// get current advanced user by email
export const getCurrentAdvancedUser =(email)=> async (dispatch) =>{
    dispatch({type:GET_ADV_USR_LOAD })
    try {
        let response = await axios.get(`/api/serviceuser/${email}`)
        dispatch({type: GET_ADV_USR_SUCCESS ,payload:response.data.res})
    } catch (error) {
        dispatch({type:GET_ADV_USR_FAIL,payload:error})
    }

}



// get  advanced users by job
export const getUsers_by_job =(job)=> async (dispatch) =>{
    dispatch({type:GET_USRS_JOB_LOAD })
    try {
       // history.push(`/service_list/${job}`)
        const response = await axios.get(`/api/serviceuser/filter_job/${job}`)
        dispatch({type: GET_USRS_JOB_SUCCESS ,payload:response.data.res})
    } catch (error) {
        dispatch({type:GET_USRS_JOB_FAIL,payload:error})
    }

}

// get  advanced users by job & region
export const getUsers_by_job_region =(job,region)=> async (dispatch) =>{
    dispatch({type:GET_USRS_JOB_REGION_LOAD })
    try {
        const response = await axios.get(`/api/serviceuser/filter_job&region/${job}/${region}`)
        dispatch({type: GET_USRS_JOB_REGION_SUCCESS ,payload:response.data.res})
        console.log(response)
    } catch (error) {
        dispatch({type:GET_USRS_JOB_REGION_FAIL,payload:error})
    }
}

// Delete ADVANCED USER
export const deleteadvUser = (email)=> async dispatch =>{
    dispatch ({type : LOAD_DELETE_ADV_USER})
    try {
        const result = await axios.delete(`http://localhost:5012/api/serviceuser/delete_adv_user/${email}`)
        dispatch( {type:DELETE_ADV_USER_SUCCESS,payload : result.data } )
    } catch (error) {
        dispatch({type: DELETE_ADV_USER_FAIL, payload : error.response.data})

    }
}

// add  Advanced User
export const addAdvancedUser = (user,history)=> async dispatch =>{
    dispatch({type: LOAD_ADVANCE_USER})
    try {
        const response = await axios.post(`http://localhost:5012/api/serviceuser/add_advanced_user`,user)
        dispatch({type: ADD_ADVANCED_USER_SUCCES, payload : response.data.user })
        history.push("/my_advanced_account")
    } catch (error) {
        console.dir(error.response.data)
        const { errors, msg } = error.response.data
        if (msg) { alert(msg) }
        if (Array.isArray(errors)) {
            errors.forEach(err => {
                alert(err.msg)
            })
        }
    dispatch({ type: ADD_ADVANCED_USER_FAIL, payload: error.response.data })
   
    
    }
}

//Clear reducer after logout

export const ClearReducerADVUser = () => dispatch =>{
    dispatch({type :CLEAR_SERVICE_REDUCER_LOUGOUT })

}