import React, { useState } from 'react'
import { loginUser,currentUser } from "../../JS/actions/user"
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./Login.css"

const Login = () => {
    const [container, setConatiner] = useState("container-adduser ")


    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }, history))
        setEmail("");
        setPassword("")
    }

    return (
        <div className ='adduser'>
        <h2 style={{color: 'red'}} >Welcome !!: Sign in</h2>
<div className= {container} id="container">
<div className="form-container sign-up-container">
            <form className='form-adduser'  >
              <h1 className= 'h1-adduser'>Create Account</h1>
              <span className="span-adduser" > Use your email for registration</span>
              <input className="input-adduser" type="text" placeholder="Name"  />
              <input className="input-adduser"  type="email" placeholder="Email" />
              <input className="input-adduser"  type="password" placeholder="Password" />
              <input className="input-adduser"  type="password"  placeholder="Confirm Password"  />
              <div className="social-container">
              <input type="checkbox" id="Term-service"  value="Term-service"  />
              <label >I am +18 & I agree to the Terms of Service</label>
               </div>
              <button className='button-adduser'  >Sign Up</button>
            </form>
          </div>


 <div className="form-container sign-in-container">
   <form  className="form-adduser" onSubmit={handleSubmit}   >
     <h1 className='h1-adduser' >Sign in</h1>
     <span className='span-adduser' > Use your account</span>
     <input className="input-adduser"  type="email" placeholder="Email"  required value={email} onChange={(e) => { setEmail(e.target.value) }}/>
     <input className="input-adduser"  type="password" placeholder="Password"required value={password} onChange={(e) => { setPassword(e.target.value) }}  />
     <a className='a-adduser' >Forgot your password?</a>
     <button className='button-adduser'>Sign In</button>
   </form>
 </div>
 <div className="overlay-container">
   <div className="overlay">
     <div className="overlay-panel overlay-left">
       <h1 className='h1-adduser' >Welcome Back!</h1>
       <p className='p-adduser'>To keep connected with us please login with your personal info</p>
       <Link to ='/login' >  <button className="ghost button-adduser" id="signIn" onClick={()=> setConatiner("container-adduser ")}>Sign In</button>
      </Link> </div>
     <div className="overlay-panel overlay-right">
       <h1 className='h1-adduser'>Hello, Friend!</h1>
       <p className='p-adduser'>Enter your personal details and start journey with us</p>
       <Link to ='/register'  >   <button className="ghost button-adduser" id="signUp" onClick={()=>setConatiner("container-adduser right-panel-active")}>Sign Up</button>
     </Link>  </div>
   </div>
 </div>
</div>
</div>
    )
}

export default Login
