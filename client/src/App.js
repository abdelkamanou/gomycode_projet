import React from 'react'
import './App.css';
import RegisterLogin from './Components/Register/RegisterLogin';
import {Route,Switch} from "react-router-dom"
import Login from './Components/Login/Login';
import Homeservice from './Components/Home/Homeservice';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/Routing/PrivateRoute';
import ServicesList from './Components/ServicesList/ServicesList';
import {Link} from 'react-router-dom'
import { useSelector} from "react-redux"
import ServiceUsersList from './Components/ServiceUsersList/ServiceUsersList';
import AdvancedUser from './Components/AdvancedUser/AdvancedUser';
import EmailVerification from './Components/Register/EmailVerification';
import AdvancedUserAded from './Components/AdvancedUser/AdcancedUserAded';
import CurrentAdvancedUser from './Components/CurrentAdvancedUser/CurrentAdvancedUser';


function App() {


  const loading = useSelector(state => state.userReducer.loaddashboard)
  return (
    <div className="App">
    <div className="navbar-general">
     <div> <Navbar/></div>
     {loading?   <Link to ="/login"> <button>login</button> </Link>: 
     <div> <PrivateRoute path="/"component={Dashboard} /> </div> }
      
</div>
 <Switch>
 <Route exact path="/" ><Homeservice/> </Route> 
  <Route path='/register'> <RegisterLogin/> </Route> 
  <Route path="/login" >  <Login/> </Route>
  <PrivateRoute path='/services' component={ServicesList}/>  
  <Route path="/verify_registration"><EmailVerification/> </Route>
  <PrivateRoute path={["/service_list/:job","/service_list/:job/:region"]}   component={ServiceUsersList} />
  <PrivateRoute path="/CreateAdvancedUser" component={AdvancedUser} /> 
  <PrivateRoute path='/my_advanced_account' component={AdvancedUserAded}/>
  <PrivateRoute path='/my_advanced_acount' component={CurrentAdvancedUser}/>

  
     </Switch>   
    </div>
  );
}

export default App;
