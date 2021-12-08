import React,{useState} from 'react'
import './Register.css'
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {registerUser,verificationRegisterUser} from '../../JS/actions/user'
import { Link } from 'react-router-dom';

const Register= () => {
const [container, setConatiner] = useState("container-adduser right-panel-active" )
const dispatch = useDispatch()
const history=useHistory();
const [user, setUser] = useState({Name:"",Email:"",Password:""})
const [confirmpassword,setConfirmpassword]=useState("")
const [msgpswd,setMsgpswd]=useState("")
const [msgpswdconf,setMsgpswdconf]=useState("")
const [msgname,setMsgname]=useState("")
const [msgemail,setMsgemail]=useState("")



const handleChangeName=(name)=>{
  name.preventDefault()
 setUser({...user , name:name.target.value })}

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
if (user.name ===''){
  setMsgname("*You need to enter your Name")}
else if (user.name !==''&& user.email===""){
    setMsgemail("*You need to enter your Email")
    setMsgname("")}  
else if (user.password ===''&& user.email!==""){
  setMsgpswd("*You need to enter your password")
  setMsgemail("")}
     else if( user.password!==''&& confirmpassword!==user.password){
        setMsgpswdconf("*justify your password confirmation")
        setConfirmpassword("")
        setMsgpswd("")}
    else {
     
     dispatch(verificationRegisterUser(user,history))
      //dispatch(registerUser(user,history))
//setUser({name:"",email:"",password:""})
     // setConfirmpassword("")
      setMsgpswdconf("")
}};




  
    


    return (
        <div className ='adduser'>
                 <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
        <div className= {container} id="container">
          <div className="form-container sign-up-container">
            <form className='form-adduser' onSubmit={handleSubmit}   >
              <h1 className= 'h1-adduser'>Create Account</h1>
              <span className="span-adduser" > Use your email for registration</span>
              <input className="input-adduser" type="text" placeholder="Name" value={user.name} onChange={handleChangeName} />
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
  
               <Link to ='/login'> <button className='button-adduser'  >Sign Up</button> </Link>
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
              <Link to ='/login'><button className="ghost button-adduser" id="signIn" onClick={()=> setConatiner("container-adduser ")}>Sign In</button>
              </Link>  
            </div>
             <div className="overlay-panel overlay-right">
                <h1 className='h1-adduser'>Hello, Friend!</h1>
                <p className='p-adduser'>Enter your personal details and start journey with us</p>
                <Link to ='/register'><button className="ghost button-adduser" id="signUp" onClick={()=>setConatiner("container-adduser right-panel-active")}>Sign Up</button>
                </Link> 
            </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Register