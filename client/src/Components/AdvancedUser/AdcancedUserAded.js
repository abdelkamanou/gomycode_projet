import React from 'react'
import { useHistory,useParams } from 'react-router-dom'

const AdcancedUserAded = () => {
    const history=useHistory()
    const {email}=useParams()
    return (
        <div>
            <h1>your account has successfully created</h1>

            <div> <h1> You advanced account is already exist  </h1> 
    <h4> click here to go to your account info </h4>
     <button onClick={()=> history.push(`/my_advanced_acount/:${email}`)}   >Go</button>
  </div> 
        </div>
    )
}

export default AdcancedUserAded
