import React ,{useState} from 'react'
import './ServicesList.css'
import {Link, useHistory} from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux'
import {getUsers_by_job} from '../../JS/actions/serviceuser'
import {Image_URL_Doctors} from './ImgUrl'


const ServicesList = () => {
 const history=useHistory()
 const dispatch=useDispatch()
 const [job, setJob] = useState('')
  
const handleDoctors=()=>{
    if(job.length!==0){
       history.push(`/service_list/${job}`)
       dispatch(getUsers_by_job(job))
    }
  }

  const handleNurses=()=>{
    if(job.length!==0){
       history.push(`/service_list/${job}`)
       dispatch(getUsers_by_job(job))
    }
  }

  const handlePhysiotherapy=()=>{
    if(job.length!==0){
     //  history.push(`/service_list/${job}`)
       dispatch(getUsers_by_job(job))
    }
  }
   // history.push(`/service_list/${job}`)
   //dispatch(getUsers_by_job("doctor"))
  //}
  //const handleDoctors =()=>{
 // setJob('doctor')
  // console.log(job,'job')} 
    return (
        <div className='serviceslist'>
            <div className="cards">
  <div  className="card">
    <img src={Image_URL_Doctors} className="card__image" alt="" />
    <div className="card__overlay">
      <div className="card__header">
        <div className="card__header-text">
          <h1 className="card__title"  onMouseOver={()=> setJob('Physiotherapy')} onClick={handlePhysiotherapy}>Physiotherapy</h1>        
        </div>
      </div>
    </div>
  </div>      
  <div  className="card"> 
    <img src="https://www.jerseysbest.com/wp-content/uploads/2020/09/physician.jpg" className="card__image" alt="" />
    <div className="card__overlay">        
      <div className="card__header">
        <div className="card__header-text">
          <Link to ={`/service_list/${job}`}>
          <h1 className="card__title" onMouseOver={()=> setJob('Doctor')} onClick={handleDoctors}>Doctors
          </h1>
          </Link>
        </div>
      </div>
    </div>
  </div>
 

  <div  className="card">
    <img src="https://media.nurse.org/cache/aa/01/aa01783a718519f47597790ed22de98a@2x.webp" className="card__image" alt="" />
    <div className="card__overlay">
      <div className="card__header">
        <div className="card__header-text">
          <h1 className="card__title" onMouseOver={()=> setJob('Nurse')}  onClick={handleNurses}>Nurses</h1>   
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default ServicesList
