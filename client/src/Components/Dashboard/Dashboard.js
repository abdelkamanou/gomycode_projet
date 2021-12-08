import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link, useHistory } from 'react-router-dom'
import {getCurrentAdvancedUser,ClearReducerADVUser } from "../../JS/actions/serviceuser"
import { currentUser, logout} from '../../JS/actions/user'

const Dashboard = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.userReducer.user)
    const loading = useSelector(state => state.userReducer.loading)
    const email= user.email
   const adv_current_user_exist =useSelector(state => state.serviceuserReducer.advancedcurentuserexist)
    const verif_acount_email= useSelector(state=>state.register_verificationReducer.register_verification.email)
    

    useEffect(() => {
        dispatch(currentUser())
        .then(dispatch(getCurrentAdvancedUser(email)))
        .then(()=>history.push("/"))
    }, [dispatch,email])



   
    
    return (
        <div>
            <button onClick={() => { 
                dispatch(logout()); 
                history.push("/");
                dispatch(ClearReducerADVUser ()) 
        
        }}>logout</button>
            {loading ? <h1>loading...</h1> :
             <div>
           <h1 style={{color:'white'}} >hello! <br></br>
        {user && user.name}
           </h1> 
           </div>
           }
        { adv_current_user_exist?
            <Link to={`/my_advanced_acount/:${email}`}> 
            <button>ADVANCED</button>
            </Link>
            : <h3 style={{color:'red'}}  >visitor</h3>
        }
        </div>
    )
}

export default Dashboard
