import { GET_USERS_FAIL,
     GET_USERS_LOAD,
      GET_USERS_SUCCESS,
      LOAD_ADVANCE_USER,
      ADD_ADVANCED_USER_SUCCES,
      ADD_ADVANCED_USER_FAIL,
      GET_ADV_USR_LOAD,
      GET_ADV_USR_SUCCESS,
      GET_ADV_USR_FAIL ,
      CLEAR_SERVICE_REDUCER_LOUGOUT,
      LOAD_DELETE_ADV_USER,
      DELETE_ADV_USER_SUCCESS,
      DELETE_ADV_USER_FAIL,
      GET_USRS_JOB_LOAD,
      GET_USRS_JOB_SUCCESS,
      GET_USRS_JOB_FAIL,
      GET_USRS_JOB_REGION_LOAD,
      GET_USRS_JOB_REGION_SUCCESS,
      GET_USRS_JOB_REGION_FAIL} from "../constants/users";

const Initialstate = {
    users:[],
    getadvuser :{},
    addAdvancedUser: {},
    getusersbyjob : [],
    loadgetusersbyjob : false,
    loadgetusersbyjobregion:false,
    loading:false,
    advancedcurentuserexist:false,
    load_add_advanceUser : false,
    loadgetadvuser : false,
    loadDeleteadvUser: false,
    errors:null,
};

export const serviceuserReducer = (state = Initialstate,{type,payload})=>{
    switch (type) {
        case GET_USERS_LOAD:
            return  {...state,loading:true};

        case GET_USERS_SUCCESS :
            return {...state,users:payload,loading:false}

        
        case GET_USERS_FAIL :
            return {...state,errors:payload,loading:false}
        
        case LOAD_ADVANCE_USER:
            return  {...state,load_add_advanceUser:true};
    
        case ADD_ADVANCED_USER_SUCCES :
            return {...state,addAdvancedUser:payload,load_add_advanceUser:false}
    
            
        case ADD_ADVANCED_USER_FAIL :
            return {...state,errors:payload,load_add_advanceUser:false}    
            
        case GET_ADV_USR_LOAD :
            return {...state,loadgetadvuser:true}

        case GET_ADV_USR_SUCCESS :
            return {...state,getadvuser:payload,loadgetadvuser:false,advancedcurentuserexist:true}

        case GET_ADV_USR_FAIL:
            return {...state,errors:payload,loadgetadvuser:false}


        case CLEAR_SERVICE_REDUCER_LOUGOUT:
            return {...state, getadvuser :{},getusersbyjob : [],advancedcurentuserexist:false, loadgetadvuser : false}
    

        case LOAD_DELETE_ADV_USER:
            return { ...state, loadDeleteADVUser: true }
        case  DELETE_ADV_USER_SUCCESS:
            return { ...state, loadDeleteadvUser: false }
                    //localStorage.removeItem("token")
        case   DELETE_ADV_USER_FAIL:
            return { ...state, errors: payload, loadDeleteadvUser: false }

        case GET_USRS_JOB_LOAD :
            return {...state,loadgetusersbyjob:true}
        case GET_USRS_JOB_SUCCESS:
            return {...state,getusersbyjob:payload,loadgetusersbyjob:false}
        case GET_USRS_JOB_FAIL:
            return {...state,errors:payload,loadgetusersbyjob:false}

        case GET_USRS_JOB_REGION_LOAD :
            return {...state,loadgetusersbyjobregion:true}
        case GET_USRS_JOB_REGION_SUCCESS:
            return {...state,getusersbyjob:payload,loadgetusersbyjobregion:false}
        case GET_USRS_JOB_REGION_FAIL:
            return {...state,errors:payload,loadgetusersbyjobregion:false}
      
        default : return state
           
    }
     

    }
