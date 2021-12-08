import React from 'react'
import "./Navbar.css"
import { useHistory,useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const history=useHistory()
    const {email} = useParams()

    const loadnavbar= useSelector(state => state.userReducer.loaddashboard)


    return (
            <div>
            <nav>
 <a onClick={()=>history.push("/")} >Home</a> 
	<a onClick={()=>history.push("/services")}>Services</a> 
	<a >Contact Us</a>
 { loadnavbar?
  <a onClick={()=>history.push("/register")} >Register</a> 
  : 
   <a onClick={()=>history.push("/CreateAdvancedUser")}  >Create service</a> }	
 { loadnavbar? <a onClick={()=>history.push("/login")} >Login </a>
 :
 <a onClick={()=>history.push(`/my_advanced_acount/:${email}`)} >Account</a>  }	
	<div className="animation start-home"></div>
</nav>

        </div>
    )
}

export default Navbar
