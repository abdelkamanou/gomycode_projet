import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUsers_by_job, getUsers_by_job_region} from "../../JS/actions/serviceuser";
import ServiceUserCard from '../ServiceUserCard/ServiceUserCard.js'
import {useHistory,useParams} from "react-router-dom"
import "./ServiceUsersList"

  const ServiceUsersList = () => {
    const history = useHistory()
    const {job}=useParams()
console.log(job)
    const [region, setRegion] = useState('')
    const dispatch = useDispatch();
   // useEffect(() => { dispatch(getUsers());}, [dispatch])
    const Users = useSelector(state => state.serviceuserReducer.getusersbyjob);

    return (   

        <div>
             <div className='directionForm'>
             <button onClick={()=>{ dispatch(getUsers_by_job(job)),
                  history.push(`/service_list/${job}`)
               } }>all</button>
               <div className="TitleLabel"> filter par Region:</div>
               <div >
              
               <input className="form__field" type="text"  placeholder="Region" value={region}/>
               <button onClick={()=>{ dispatch(getUsers_by_job_region(job,region)),
                 history.push(`/service_list/${job}/${region}`) 
                 }} >Search</button>
               
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

    {
        Users.map((el) => <ServiceUserCard el={el} key={el._id} />)
      }
        </div>
    )
}

export default ServiceUsersList
