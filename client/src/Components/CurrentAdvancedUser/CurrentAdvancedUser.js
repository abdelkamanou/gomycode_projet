import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { deleteUser_by_mail,deletebyEmailAcountVerification,logout} from '../../JS/actions/user'
import {deleteadvUser,ClearReducerADVUser } from "../../JS/actions/serviceuser"
import { Link,useParams,useHistory } from 'react-router-dom'


const CurrentAdvancedUser = () => {
  const dispatch=  useDispatch()
  //const {email} = useParams()
  const history=useHistory()
  const email=useSelector(state => state.userReducer.user.email)
    const advuser = useSelector(state => state.serviceuserReducer.getadvuser)
    const load = useSelector(state => state.serviceuserReducer.advancedcurentuserexist)

    const [deleteaccount, setDeleteaccount] = useState('')
    const handleDeleteask =()=> 
    {
      setDeleteaccount('are you sure you want to delete your account !!?')
       
     }
     const handleDelete =()=> 
     { 
         dispatch(deleteUser_by_mail(email));
         dispatch(deletebyEmailAcountVerification (email));
         dispatch(deleteadvUser(email))
         .then(dispatch(logout()))
         .then(dispatch(ClearReducerADVUser ()) 
         )
        .then ( history.push(`/`))
      }
  
    return (

        <div>

            {load? <div style={{color:"white"}} >
            <h2>  Name : </h2>   <h3>{advuser[0].name}</h3>
            <h2>  Age: </h2>   <h3>{advuser[0].age}</h3>
            <h2>  Phone : </h2>   <h3>{advuser[0].phone}</h3>
             <h2>  Job : </h2>   <h3>{advuser[0].job}</h3>
           <h2>   Region :</h2>    <h3>{advuser[0].region}</h3>
           <h2>   Price:</h2>    <h3>{advuser[0].price}</h3>
           <h2>   experience :</h2>    <h3>{advuser[0].experience}</h3>

             Delete my account :<button onClick={handleDeleteask}> Delete</button>  
              <h2>{deleteaccount}</h2>
              {deleteaccount!==''? <button onClick={handleDelete} >Yes</button> : <h5>*</h5> }
            </div>  :  <div> <h1>you are not create your service yet!</h1>  
            <h2>you cant create your advanced acount from here ...</h2>
            <button onClick={()=>history.push("/CreateAdvancedUser")}   >Go</button>
            </div>  }
        </div>
    )
}

export default CurrentAdvancedUser
