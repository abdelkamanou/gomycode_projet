import React from 'react'
import './ServiceUserCard.css'

const ServiceUserCard = ({el}) => {
    return (
        <div className="card-container">
        <span className="pro">{el.job}</span>
        <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
        <h3>{el.name}</h3>
        <h6>{el.region}</h6>
        <p>Phone:<br /> {el.phone}</p>
        <div className="buttons">
          <button className="primary">
            Price :
          </button>
          <button className="primary ghost">
            {el.price} DT
          </button>
        </div>
        <div className="skills">
          <h6>experience :</h6>
          <ul>
            <li>{el.experience}</li>
           
          </ul>
        </div>
      </div>
    )
}

export default ServiceUserCard
