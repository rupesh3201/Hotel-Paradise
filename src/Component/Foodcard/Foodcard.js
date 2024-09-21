import React from 'react'
import './../../Css/Foodcard.css'

import nonveg from './../../Assets/nonveg.png'
import veg from './../../Assets/veg.png'


function Foodcard({title, description ,isveg, imgurl}) {
    
  return (
    <div className='foodcard'>
    <img src={imgurl} alt='img'  className='food-item-img'/>
      <h1 className='foodcard-title'>{title}</h1>
    <p className='dis'>{description}</p>
    <img src={isveg ? veg : nonveg } className='food-card-icon' alt='img' />
    </div>
  )
}

export default Foodcard