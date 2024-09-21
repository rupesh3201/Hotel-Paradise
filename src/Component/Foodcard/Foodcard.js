import React from 'react'
import './../../Css/Foodcard.css'

import nonveg from './../../Assets/nonveg.png'

import veg from './../../Assets/veg.png'

function Foodcard({title, description ,isveg}) {
    
  return (
    <div className='foodcard'>
      <h1 className='foodcard-title'>{title}</h1>
    <p>{description}</p>
    </div>
  )
}

export default Foodcard