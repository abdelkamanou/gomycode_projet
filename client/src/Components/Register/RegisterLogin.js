import React,{useState} from 'react'
import './RegisterLogin.css'
import {registerUser,verificationRegisterUser,saveUser} from "../../JS/actions/user"
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


const RegisterLogin = () => {
const [container, setConatiner] = useState("container-adduser right-panel-active" )
const dispatch = useDispatch()
const history=useHistory();
const [user, setUser] = useState({name:"",email:"",password:""})
const [confirmpassword,setConfirmpassword]=useState("")
const [msgpswd,setMsgpswd]=useState("You need to enter your password")
const [msgpswdconf,setMsgpswdconf]=useState("")
const [msgname,setMsgname]=useState("*You need to enter your Name")
const [msgemail,setMsgemail]=useState("*You need to enter your Email")



const handleChangeName=(name)=>{
 setUser({...user , name:name.target.value })

}

 const handleChangeEmail=(email)=>{
   email.preventDefault()
  setUser({...user , email:email.target.value })}

  const handleChangePassword=(password)=>{
    password.preventDefault()
    setUser({...user , password:password.target.value })}
    const handleChangeConfirmPassword=(e)=>{
      e.preventDefault()
      setConfirmpassword(e.target.value )
    }


const handleSubmit=(e)=>{
  e.preventDefault()
    if(user.name !==''){ setMsgname("")}  
    if(user.email!==""){ setMsgemail("") }
    if(user.password!==''){ setMsgpswd("")}
    if(confirmpassword!==user.password){
      setMsgpswdconf("*justify your password confirmation")}
    if(confirmpassword===user.password && msgpswd ===''&& msgemail==="" && msgname==="") {
     // setMsgpswdconf("")
     // dispatch(registerUser(user,history))
     // setUser({name:"",email:"",password:""})
    //  setConfirmpassword('')
    dispatch(verificationRegisterUser(  {email : user.email} ,history))
    dispatch(saveUser(user))

}};





  
    


    return (
        <div className ='adduser'>
        <h2 style={{color: 'red'}} >Welcome !!: Sign up</h2>
        <div className= {container} id="container">
          <div className="form-container sign-up-container">
            <form className='form-adduser' onSubmit={handleSubmit}   >
              <h1 className= 'h1-adduser'>Create Account</h1>
              <span className="span-adduser" > Use your email for registration</span>
              <input className="input-adduser" type="text" placeholder="Name" value={user.name} onChange={ handleChangeName} />
              <label >{msgname}</label>
              <input className="input-adduser"  type="email" placeholder="Email" value={user.email} onChange={ handleChangeEmail } />
              <label >{msgemail}</label>
              <input className="input-adduser"  type="password" placeholder="Password" value={user.password} onChange={handleChangePassword } />
              <label >{msgpswd}</label>
              <input className="input-adduser"  type="password"  placeholder="Confirm Password" value={confirmpassword} onChange={handleChangeConfirmPassword} />
              <label >{msgpswdconf}</label>
              <div className="social-container">
              <input type="checkbox" id="Term-service"  value="Term-service"  />
              <label >I am +18 & I agree to the Terms of Service</label>
               </div>
              <button className='button-adduser'  >Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="form-adduser" >
              <h1 className='h1-adduser' >Sign in</h1>
              <div className="social-container">
               
              </div>
              <span className='span-adduser' > Use your account</span>
              <input className="input-adduser"  type="email" placeholder="Email" />
              <input className="input-adduser"  type="password" placeholder="Password" />
              <a className='a-adduser' >Forgot your password?</a>
              <button className='button-adduser'>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className='h1-adduser' >Welcome Back!</h1>
                <p className='p-adduser'>To keep connected with us please login with your personal info</p>
                <Link to ='/login'  >  <button className="ghost button-adduser" id="signIn" onClick={()=> setConatiner("container-adduser ")}>Sign In</button>
                 </Link>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className='h1-adduser'>Hello, Friend!</h1>
                <p className='p-adduser'>Enter your personal details and start journey with us</p>
                <Link  to ='/register'> <button className="ghost button-adduser" id="signUp" onClick={()=>setConatiner("container-adduser right-panel-active")}>Sign Up</button>
              </Link>  </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default RegisterLogin