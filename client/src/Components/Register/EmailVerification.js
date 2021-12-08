import React ,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {confirmRegister} from '../../JS/actions/user'
import { useHistory } from 'react-router-dom';
import {registerUser,deleteTokenRegiterVerification} from "../../JS/actions/user"


const EmailVerification = () => {

    const dispatch =useDispatch()
    const history = useHistory()
const [tokenconfirmation, setTokenconfirmation] = useState({tonken:""})
const verifconfirme = useSelector(state => state.register_verificationReducer.confirmSaveUser)
const user =useSelector(state => state.register_verificationReducer.user)
//const registeruser=useSelector(state=>state.userReducer.registerUser)
//const tokenverification=useSelector(state=>state.register_verificationReducer.confirmation_token)
  const  handleChange = (e)=>{
        e.preventDefault()
        setTokenconfirmation({token :e.target.value})
    }
  const  handleClick =()=>{
      dispatch( confirmRegister({  token_mail_verification:  tokenconfirmation.token}))
      if (verifconfirme){
      dispatch(registerUser (user,history))    
      }
    }

    return (
        <div>
            <h2>check your mailbox and enter the code here :</h2>
            <input type="text" placeholder="code de confirmation"  value={tokenconfirmation.tonken} onChange={handleChange} />
            <button   onClick={handleClick} >confirm</button>
            {//registeruser? <div> Are you sure to confirm 
               // <button  onClick={()=>
               // dispatch(deleteTokenRegiterVerification(tokenverification,history))}   >yes</button>
           // </div> :<div></div> 
        }
        </div>
    )
}

export default EmailVerification
