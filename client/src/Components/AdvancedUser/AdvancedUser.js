import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import "./AdvancedUser.css"
import {addAdvancedUser,getCurrentAdvancedUser} from "../../JS/actions/serviceuser"
import {useHistory,Link,useParams} from "react-router-dom"


const AdvancedUser = () => {

    const user = useSelector(state=>state.userReducer.user)
    const advancedcurentuserexist=useSelector(state=>state.serviceuserReducer.advancedcurentuserexist)
    const dispatch = useDispatch()
    const history = useHistory()
    const {email} = useParams()
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [region, setRegion] = useState('')
    const [genre, setGenre] = useState('')
    const [password, setPassword] = useState('')
    const [job, setJob] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [experience, setExperience] = useState('')
    const [description, setDescription] = useState('')

   
const handleClick =()=>{
 dispatch( addAdvancedUser( { 
     name: user.name,            
     age : age,
     email : user.email,
     phone :phone,
     genre : genre,
     region : region,
     password : password,
     job : job,
     price : price,
     category: category,
     experience : experience,
     description : description
    },history)).then (dispatch(getCurrentAdvancedUser(user.email)))
    setAge("")
    setPhone("")
    setRegion("")
    setGenre("")
    setPassword("")
    setJob("")
    setPrice("")
    setCategory("")
    setExperience("")
    setDescription("")
}


    const loading = useSelector(state=>state.userReducer.loading)
    return (
       <div>
       {! advancedcurentuserexist ?
    <div className="advanceduser">
                        {loading ? <h1>loading...</h1> : 
<div className='containerForm'>
             <h1>Create your service</h1>
             <h1>hello {user && user.name}</h1>
                           
            <div className='directionForm'>
                <div className="TitleLabel">Your Name is :</div>
                <div className="form__group field">
               <input id="name" className="form__field" type="input text"  placeholder="Name" value={user.name}  /> 
               <label className="form__label">Name</label>
               </div>
            </div>

            <div className='directionForm'>
               <div className="TitleLabel"> Your Email is : </div>
               <div className="form__group field">
               <input className="form__field" type="email"  placeholder="Email" value={user.email} />
               <label className="form__label">e-mail</label>
               </div>
            </div>

            <div className='directionForm'>
               <div className="TitleLabel"> Enter your Age : </div>
               <div className="form__group field">
               <input className="form__field" type="number"  placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} />
               <label className="form__label">Age</label>
               </div>
            </div>

            <div className='directionForm'>
               <div className="TitleLabel"> Enter your Phone : </div>
               <div className="form__group field">
               <input className="form__field" type="number"  placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
               <label className="form__label">Phone</label>
               </div>
            </div>

            <div className='directionForm'>
               <div className="TitleLabel"> Select your Region :</div>
               <div className="form__group field">
               <input className="form__field" type="text"  placeholder="Region" value={region}/>
               <label className="form__label">Region</label>
               </div>
               <div className="box">  
               <select onChange={(e)=>setRegion(e.target.value)} >
               <option value=''>Select Your Region:</option>
               <option value='Gafsa'  >*Gafsa</option>
               <option value='Gabes'  >*Gabes</option>
               <option value="Tunis" >*Tunis</option>
               <option value="Sfax" >*Sfax</option>
               <option value="Ariana" >*Ariana</option>
               <option value="Nabeul" >*Nabeul</option>
               <option  value="Tozeur" >*Tozeur</option>
               <option  value="Bizert" >*Bizert</option>
               <option  value="Beja"  >*Beja</option>
               <option   value='Kasserin'  >*Kasserin</option>
               </select>
               </div>
            </div>

            <div className='directionForm'>
               <div className="TitleLabel"> Select your sexe :</div>
               <div className="form__group field">
               <input className="form__field" type="text"  placeholder="genre" value={genre} />
               <label className="form__label">Sexe</label>
               </div>
               <div className="box">  
               <select onChange={(e)=> setGenre(e.target.value)} >
               <option value='' >Select Your Sexe:</option>
               <option value='Man'  >*Man</option>
               <option value='Women'  >*Women</option>
               </select>
               </div>
            </div>

            <div className='directionForm'>
               <div className="TitleLabel">  Select your job:</div>
               <div className="form__group field">
               <input className="form__field" type="text"  placeholder="job"value={job}  />
               <label className="form__label">Job</label>
               </div>
               <div className="box">  
               <select onChange={(e)=>setJob(e.target.value) } >
               <option value=''>Select Your Job :</option>
               <option value='Doctor'  >*Doctor</option>
               <option value='Nurse'  >*Nurse</option>
               <option value='Physiotherapy'  >*Physiotherapy</option>
               </select>
               </div>
            </div>

            <div className='directionForm'>
               <div className="TitleLabel">Enter your Price: </div>
               <div className="form__group field">
               <input  className="form__field" type="number"  placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value) } />
               <label className="form__label">Price</label>
               </div>
            </div>

            <div className='directionForm'>
               <div className="TitleLabel"> Your category is :  </div>
               <div className="form__group field">
               <input className="form__field" type="text"  placeholder="category" value={category}  onChange={(e)=>setCategory('Health') } />
               <label className="form__label">Category</label>
               </div>
            </div>

            <div className='directionForm'>
               <div className="TitleLabel"> Enter your Experience : </div>
               <div className="form__group field">
               <input className="form__field" type="text"  placeholder="experience" value={experience} onChange={(e)=>setExperience(e.target.value) } />
               <label className="form__label">Experience</label>
               </div>
            </div>

            <div className='directionForm'>
               <div className="TitleLabel"> Enter your Description : </div>
               <div className="form__group field">
               <input className="form__field" type="text"  placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value) }  />
               <label className="form__label">Description</label>
               </div>
            </div>

            <div className='directionForm'>
               <div className="TitleLabel"> Enter your Password : </div>
               <div className="form__group field">
               <input className="form__field" type="password"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value) } />
               <label className="form__label">Password</label>
               </div>
            </div>

              <Link to='/my_advanced_account' > <button  onClick={handleClick} >submit</button> </Link>
  </div>         
             }
  </div> 
  :
  <div> <h1> You advanced account is already exist  </h1> 
    <h4> click here to go to your account info </h4>
     <button onClick={()=> history.push(`/my_advanced_acount/:${email}`)}   >Go</button>
  </div>
            }
            </div>   
    )
}

export default AdvancedUser
